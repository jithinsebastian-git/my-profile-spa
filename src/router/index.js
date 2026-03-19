import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Experience from '../components/Experience.vue'
import Awards from '../components/Awards.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/experience', name: 'Experience', component: Experience },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/awards', name: 'Awards', component: Awards },
    { path: '/:pathMatch(.*)*', redirect: '/' } // Redirect unknown paths to Home
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        return { top: 0 }
    }
})

export default router
