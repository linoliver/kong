import request from '../utils/request';
export * from './discover'
const host=/localhost/.test(window.location.host)?'http://123.206.55.50:14000':''
export function login(params){
    return request(`${host}/login/cellphone?phone=${params.user}&password=${params.password}`)
}