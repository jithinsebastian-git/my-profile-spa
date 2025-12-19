import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Experience from '../components/Experience.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/experience', name: 'Experience', component: Experience }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
