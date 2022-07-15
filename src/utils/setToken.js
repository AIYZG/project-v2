//token封装
//存,设置
export function setToken(tokenKey, token) {
    return localStorage.setItem(tokenKey,token)
}

//取
export function getToken(tokenKey) {
    return localStorage.getItem(tokenKey)
}

//移除
export function removeToken(tokenKey) {
    return localStorage.removeItem(tokenKey)
}