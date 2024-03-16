/**
 * api管理
 */
import request from './../utils/request';

export default {
    login(params) {
        request({
            url: '/user/login',
            data: params,
        })
    }
}