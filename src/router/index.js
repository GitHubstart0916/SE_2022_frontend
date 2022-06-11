import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import main from "@/views/main"
import register from "@/views/register"
import login from "@/views/login"
import forget_pswd from "@/views/forget_pswd";
import user_info from "@/views/user_info";
import map_home from "@/views/map_home";
import service_home from "@/views/service_home";
import settings_home from "@/views/settings_home";
import create_map from "@/views/create_map";
import create_node from "@/views/create_node";

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
            {
                path: 'map_home',
                name: 'map_home',
                component: map_home
            },
            {
                path: 'service_home',
                name: 'service_home',
                component: service_home
            },
            // {
            //     path: 'settings_home',
            //     name: 'settings_home',
            //     component: settings_home
            // },
            {
                path: 'create_map',
                name: 'create_map',
                component: create_map
            },
            {
                path: 'create_node',
                name: 'create_node',
                component: create_node
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
