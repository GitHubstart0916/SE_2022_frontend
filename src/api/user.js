import {request} from "@/units/api";

const api_urls = {
    user_register: 'user/register',
    user_login: '/user/login',
    user_logout: '/user/logout',
    get_user_info: '/user/get-info'
}

export async function register(body) {
    return await request({
        url: api_urls.user_register,
        body: body,
        method: 'post',
    })
}

export async function login(body) {
    return await request({
        url: api_urls.user_login,
        body: body,
        method: 'post',
    })
}

export async function logout() {
    return await request({
        url: api_urls.user_logout,
        params: {},
        method: 'post',
    })
}

export async function getUserInfo() {
    return await request({
        url: api_urls.get_user_info,
        params: {},
        method: 'get',
    })
}