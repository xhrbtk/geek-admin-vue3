import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

const router = createRouter({
    history: createWebHashHistory(), // 用来配置内部使用hash模式的路由
    routes
})

export default router