import {request} from "@/units/api";

const api_urls = {
    user_register: 'user/register',
    user_login: '/user/login',
    user_logout: '/user/logout',
    get_user_id: '/test/get-user-id',
    get_user_info: '/user/get-user-info',
    forget_password: '/user/forget-password',
    reset_password: '/user/reset-password',
    create_map: '/map/create-map',
    finished_create_map: '', // TODO: 结束建图URL
    get_map_navi_item_url: '', // TODO: 请求地图的航点和物品URL
    del_map_url: '', // TODO: 删除地图的URL
    get_map_list: '/map/get-map-list', // TODO: 提醒后端加入获取地图列表的功能
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

export async function getUserID() {
    return await request({
        url: api_urls.get_user_id,
        params: {},
        method: 'get',
    })
}

export async function getUserInfo() {
    return await request({
        url: api_urls.get_user_info,
        body: {},
        method: 'post',
    })
}

export async function get_verification_code(body) {
    return await request({
        url: api_urls.forget_password,
        body: body,
        method: 'post',
    })
}

export async function reset_password(body) {
    return await request({
        url: api_urls.reset_password,
        body: body,
        method: 'post',
    })
}

export async function start_create_map() {
    return await request({
        url: api_urls.create_map,
        params: {},
        method: 'get',
    })
}

export async function finish_create_map(body) {
    return await request({
        url: api_urls.finished_create_map,
        body: body,
        method: 'post',
    })
}

export async function get_map_navi_item(body) {
    return await request({
        url: api_urls.get_map_navi_item_url,
        body: body,
        method: 'post',
    })
}

export async function delete_map(body) {
    return await request({
        url: api_urls.del_map_url,
        body: body,
        method: 'post',
    })
}

export async function get_map_list() {
    return await request({
        url: api_urls.get_map_list,
        params: {},
        method: 'get',
    })
}