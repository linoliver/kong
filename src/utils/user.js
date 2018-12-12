import cookie from "js-cookie";
export function getToken() {
    return cookie.get('author')
    
}
export function setToken(val) {
    return cookie.set('author',val)
}