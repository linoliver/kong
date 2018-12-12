import request from '../utils/request';
const host=/localhost/.test(window.location.host)?'http://123.206.55.50:14000':''
export function list(){
    return request(`${host}/personalized`)
}
export function songs(){
    return request(`${host}/recommend/songs`)
}
export function search(keywords){
    return request(`${host}/search?keywords=${keywords}`)
}
export function songurl(id){
    return request(`${host}/song/url?id=${id}`)
}
export function getdetail(id){
    return request(`${host}/song/detail?ids=${id}`)
}

