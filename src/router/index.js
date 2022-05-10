import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import main from "@/views/main"
import register from "@/views/register"
import login from "@/views/login"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        redirect: '/main',
        children: [
            {
                path: 'login',
                name: 'login',
                component: login
            },

            {
                path: 'main',
                name: 'main',
                component: main
            },
            {
                path: 'register',
                name: 'register',
                component: register
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
