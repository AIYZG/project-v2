//一般项目中会把对应的接口请求封装成api来统一调用
import service from "../service.js";

//登录接口
export function login(data) {
    return service({
        method: 'post',
        url:'/login',
        data
    })
}

//学生列表查询接口
export function students(params) {
    return service({
        method: 'get',
        url:'/students',
        params
    })
}