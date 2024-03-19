import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'
import storage from './utils/storage'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

console.log('环境变量', import.meta.env)

const app = createApp(App)
// 但是这里request和storage真的要全局引入嘛？
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.use(router).use(store).use(ElementPlus).mount('#app')
// 导入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}