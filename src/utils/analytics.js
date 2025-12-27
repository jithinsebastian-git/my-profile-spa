// Analytics utility to track visitor data

const LAST_VISIT_KEY = 'lastVisitDate'
const TOKEN_KEY = 'authToken'
// Single destructuring of Vite env variables at file top
const { VITE_API_URL, VITE_API_KEY } = import.meta.env
const API_URL = VITE_API_URL;
const API_KEY = VITE_API_KEY || '';

// Get or create JWT token for API calls
export const getAuthToken = async () => {
    let token = localStorage.getItem(TOKEN_KEY)

    if (token) {
        return token
    }

    // If we have API key in env, get a token from server
    if (API_KEY) {
        try {
            const response = await fetch(`${API_URL}/api/auth/token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ apiKey: btoa(API_KEY) })
            })
            const data = await response.json()
            if (data.token) {
                localStorage.setItem(TOKEN_KEY, data.token)
                return data.token
            }
        } catch (error) {
            console.error('Error getting auth token:', error)
        }
    }

    return null
}

// Create headers with authentication
const getAuthHeaders = async () => {
    const token = await getAuthToken()
    const headers = { 'Content-Type': 'application/json' }

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    } else if (API_KEY) {
        headers['x-api-key'] = API_KEY
    }

    return headers
}

export const trackVisitor = () => {
    const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    const lastVisitDate = localStorage.getItem(LAST_VISIT_KEY)

    // Only count if it's a new day
    if (lastVisitDate !== today) {
        localStorage.setItem(LAST_VISIT_KEY, today)

        // Send to backend
        sendAnalyticsToServer(today)
    }
}

export const getTotalUniqueVisitors = async () => {
    try {
        const headers = await getAuthHeaders()
        const response = await fetch(`${API_URL}/api/analytics/total`, { headers })
        const data = await response.json()
        return data.total || 0
    } catch (error) {
        console.error('Error fetching total visitors:', error)
        return 0
    }
}

export const getVisitorsByDate = async (date) => {
    try {
        const headers = await getAuthHeaders()
        const response = await fetch(`${API_URL}/api/analytics/visitors/${date}`, { headers })
        const data = await response.json()
        return data.count || 0
    } catch (error) {
        console.error('Error fetching visitors for date:', error)
        return 0
    }
}

export const getAllVisitors = async () => {
    try {
        const headers = await getAuthHeaders()
        const response = await fetch(`${API_URL}/api/analytics/visitors`, { headers })
        return await response.json()
    } catch (error) {
        console.error('Error fetching all visitors:', error)
        return {}
    }
}

async function sendAnalyticsToServer(date) {
    try {
        const headers = await getAuthHeaders();
        const response = await fetch(`${API_URL}/api/analytics/visitors`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ date })
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        // console.log('Visitor tracked:', data)
    } catch (error) {
        console.error('Error sending analytics:', error)
        // Fail silently - don't impact user experience
    }
}

export const resetCounter = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(LAST_VISIT_KEY)
    // console.log('Auth token and visitor data reset')
}
