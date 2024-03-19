/**
 * Mutations业务层数据提交
 */
import storage from './../utils/storage'

export default {
    // 主要是这个东西没办法一个页面展示，看起来不是很舒服，所以saveUserInfo这个命名需要注意
    saveUserInfo(state, userInfo){
        state.userInfo = userInfo;

        storage.setItem('userInfo', userInfo)
    }
}
