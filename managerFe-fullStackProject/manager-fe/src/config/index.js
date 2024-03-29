/**
 * 环境配置封装
 */
// 可能获取不到，这也许就是独立模块的意义吧
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApl: ''
    },
    fat: {
        baseApi: '',
        mockApl: ''
    },
    prod: {
        baseApi: '',
        mockApl: ''
    },
}
export default {
    env,
    mock: false,
    ...EnvConfig[env],
    namespace: 'manager'
}