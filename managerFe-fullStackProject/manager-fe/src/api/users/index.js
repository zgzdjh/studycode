/**
 * api管理
 */
import request from './../../utils/request';

export function login(data) {
    return request({
        url: '/users/login',
        method: 'post',
        data
    })
}

export function noticeCount() {
    return request({
        url: '/leave/count',
        method: 'get',
        data: {}
    })
}

export function getMenuList() {
    return request({
        url: '/menu/list',
        method: 'get',
        data: {}
    })
}

export default { login, noticeCount, getMenuList }