import axios from 'axios'
import Vue from 'vue'
import store from '@/store/store'
import {toKey} from "core-js/internals/reflect-metadata";

axios.defaults.baseURL = 'api'

export async function request(options) {
    let response
    let Token = store.getters.TokenStored
    if (Token == null) {
        Token = ""
    }
    console.log(Token)
    try {
        response = await axios(options.url, {
            method: options.method,
            params: options.params,
            data: options.body,
            responseType: options.responseType,
            headers: {
                Token: Token
            },
        });
    } catch (e) {
        console.log('has error')
        console.log(e)
        throw new Error(e)
    }
    if (response.status !== 200) {
        console.log('has error')
        switch(response.status){
            case 404:
                handleException(response)
                break
            case 401:
                handleException(response)
                break
            case 500:
                handleException(response)
                break
            default:
                handleException(response)
        }
    }
    return response
}

const errorHandler = (error) => {
    console.log('error handler')
    console.log(error)
}

function handleException(response) {
    console.log('<<<' + response.status + '>>>' + response.statusText)
    throw new Error(response.data)
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)

