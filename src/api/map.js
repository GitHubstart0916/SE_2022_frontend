import {request} from "@/units/api";

const api_urls = {
    get_map_url: '/map/open-map',
    get_map_list: '/map/get-map-list',
}


export async function get_map_list() {
    return await request({
        url: api_urls.get_map_list,
        params: {},
        method: 'get',
    })
}

export async function get_map_url(body) {
    return await request({
        url: api_urls.get_map_url,
        body: body,
        method: 'post',
    })
}

