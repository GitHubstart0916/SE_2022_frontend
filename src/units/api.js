import axios from 'axios'
import Vue from 'vue'
import store from '@/store/store'

axios.defaults.baseURL = 'api'

//@ request options need:
//     url
//     method
//     params
//     body

export async function request(options) {
    let response
    let Token = store.getters.TokenStored
    try {
        response = await axios(options.url, {
            method: options.method,
            params: options.params,
            data: options.body,
            onUploadProgress: options.onUploadProgress,
            headers: {
                Token: Token
            },
            validateStatus: () => true
        });
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
    if (response.status != 200) {
        console.log('has error')
        switch(response.status){
            case 400:
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

const errorHandler = (error, vm, info) => {
    console.log('error handler')
    console.log(error)
}

function handleException(response) {
    console.log('<<<' + response.status + '>>>' + response.statusText)
    throw new Error(response.data)
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)

