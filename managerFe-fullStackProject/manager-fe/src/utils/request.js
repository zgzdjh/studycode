/**
 * axios二次封装
 */
import axios from 'axios'
import config from './../config'
import { ElMessage }from 'element-plus'
const TOKEN_INVALID = '认证失败，登录失效'
import router from '../router'
const NETWORK_ERROR = '网络异常，请稍后重试'

// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

// 请求拦截
service.interceptors.request.use((requestUse) => {
    const headers = requestUse.headers;
    if (!headers.Authorization) headers.Authorization =  'Jack'

    return requestUse
})

// 响应拦截
service.interceptors.response.use((responseUse) => {
    const { code, data, msg } = responseUse.data;
    if (code===200) {
        return data;
    } else if (code ===40001) {
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('./login')
        }, 3000)
        // 这个我目前只理解到官网上是这么写的，我也写一个这个
        return Promise.reject(TOKEN_INVALID)
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
    options.method = options.method || 'get'

    // 意义不明，这个options.params和options.data不一样嘛？
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    if (config.env ==='prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi

        return service(options)
    }
}

/**
 * 为 request 对象添加了五个方法：request.get()、request.post()、request.put()、request.delete() 和 request.patch()
 * 每个方法都可以方便地发送对应的 HTTP 请求，并将请求方法作为配置项传递给 request 函数
 */
['get','post','put','delete','patch'].forEach((item)=> {
    request[item] = ( url, data, options ) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request