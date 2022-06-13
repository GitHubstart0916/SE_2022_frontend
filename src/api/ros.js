import {request} from "@/units/api";

const api_urls = {
    begin_mark: '/ros/begin-mark',
    add_node: '/ros/add-node',
    finish_mark: '/ros/finish-mark',
    creat_map: '/ros/creat-map',
    save_map: '/ros/save-map',
    trans: '/ros/trans',
    get_all_node: '/ros/get-all-node',
    goto: '/ros/goto',
    get_it: '/ros/get-it',
    finish_serve: '/ros/finish-serve',
    begin_serve: '/ros/begin-serve',
}

//
export async function begin_mark(body) {
    return await request({
        url: api_urls.begin_mark,
        body: body,
        method: 'post',
    })
}

export async function add_node(body) {
    return await request({
        url: api_urls.add_node,
        body: body,
        method: 'post',
    })
}

export async function finish_mark(body) {
    return await request({
        url: api_urls.finish_mark,
        body: body,
        method: 'post',
    })
}

export async function creat_map() {
    return await request({
        url: api_urls.creat_map,
        param: {},
        method: 'get',
    })
}

export async function save_map(body) {
    return await request({
        url: api_urls.save_map,
        body: body,
        method: 'post',
    })
}

export async function trans(body) {
    return await request({
        url: api_urls.trans,
        body: body,
        method: 'post',
    })
}

export async function get_all_node(body) {
    return await request({
        url: api_urls.get_all_node,
        body: body,
        method: 'post',
    })
}


export async function begin_serve(body) {
    return await request({
        url: api_urls.begin_serve,
        body: body,
        method: 'post',
    })
}


export async function goto(body) {
    return await request({
        url: api_urls.goto,
        body: body,
        method: 'post',
    })
}

export async function get_it(body) {
    return await request({
        url: api_urls.get_it,
        body: body,
        method: 'post',
    })
}

export async function finish_serve() {
    return await request({
        url: api_urls.finish_serve,
        body: {},
        method: 'post',
    })
}
