import Main from '@/pages/Main'
import BlogPage from '@/pages/BlogPage'
import PostPage from '@/pages/PostPage'
import About from '@/pages/About'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/blog',
        component: BlogPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/blog/:id',
        component: PostPage
    },
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})