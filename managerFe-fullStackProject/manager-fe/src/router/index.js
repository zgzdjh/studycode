// 有这样一个说法HashHistory不需要nginx做配置，但是History需要但这里面的原理是什么呢
// 完全达不到面筋哥的印象
import { createRouter, createWebHashHistory } from "vue-router";
import home from "../components/home.vue";
import welcome from "../components/welcome.vue";
import login from "../components/login.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: home,
        meta: {
            title: '首页'
        },
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                path: '/welcome',
                component: welcome,
                meta: {
                    title: '欢迎页'
                },
            },
            {
                name: 'login',
                path: '/login',
                component: login,
                meta: {
                    title: '登录'
                },
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 写成什么module的形式行不行
export default router