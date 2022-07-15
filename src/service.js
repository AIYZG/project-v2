import axios from 'axios'
import { getToken } from '@/utils/setToken.js'
// import { Promise } from 'core-js'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: '/api', //baseURL会自动加在请求地址上
    timeout: 3000  //请求时间限制，超过时间请求会中断
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
    // 在发起请求之前做的事(如获取并设置token)
    config.headers['token'] = getToken('token')     //在每次请求之前携带token
    return config
}, (error) => {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
    //对响应数据做些什么
    let { status,message } = response.data
    if(status !== 200) {
        Message({message: message || 'error', type: 'warning'})
    }
    return response
}, (error) => {
    return Promise.reject(error)
})

export default service