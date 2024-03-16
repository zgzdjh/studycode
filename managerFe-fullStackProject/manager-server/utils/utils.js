/**
 * 通用工具函数
 */
const log4js = require('./log4js');
const CODE = {
    SUCCESS: 200,
    PARAM_ERR0R: 10001,//参数错误
    USER_ACC0UNT_ERR0R: 20001,//账号或密码错误
    USER_L0GIN_ERR0R: 30001,//用户未登录
    BUSINESS_ERR0R: 40001,//业务请求失败
    AUTH_ERR0R: 500001,//认证失败或T0KEN过期
}

module.exports = {
    /**
     * 分页结构封装
     * @param {number} pageNum
     * @param {number} pagesize
     */
    pager({pageNum=1,pagesize=10}){
        pageNum*=1;
        pageSize*=1;
        const skipIndex = (pageNum-1)*pagesize;
        return {
            page: {
                pageNum,
                pagesize
            }
        },
        skipIndex
    },
    success(data='',msg='',code=CODE.SUCCESS){
        log4js.debug(data)
        return {
            code,data,msg
        }
    },
    fail(msg='',data='',code=CODE.BUSINESS_ERR0R){
        log4js.debug(msg)
        return {
            code,data,msg
        }
    }

}