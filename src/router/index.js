import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import main from "@/views/main"
import register from "@/views/register"
import login from "@/views/login"
import forget_pswd from "@/views/forget_pswd";
import user_info from "@/views/user_info";

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
            {
                path: 'forget_pswd',
                name: 'forget_pswd',
                component: forget_pswd
            },
            {
                path: 'user_info',
                name: 'user_info',
                component: user_info
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
