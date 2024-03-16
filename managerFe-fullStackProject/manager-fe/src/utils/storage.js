/**
 * Storage二次封装
 * @author JackBean
 */
import config from "../config";

export default {
    setItem(k, v) {
        let storage = this.getstroage();
        storage[k] = val;
        // 这个东西应该不是新增吧，那不是后面的将前面的覆盖了？
        window.localStorage.setItem(config.namespace,JSON.stringify(storage))
    },
    getItem(k) {
        return this.getstroage()[k]
    },
    getstroage(){
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
    },
    clearItem(k) {
        let storage = this.getstroage()
        delete storage[k]
        window.localStorage.setItem('manager',JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.clear()
    }
}