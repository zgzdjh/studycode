// 有这样一个说法HashHistory不需要nginx做配置，但是History需要但这里面的原理是什么呢
// 完全达不到面筋哥的印象
import { createRouter, createWebHashHistory } from "vue-router";
import home from "../components/home.vue";

const routeDataList = [
    // 上面这个就是父子路由，想要加载welcome必须加载父路由home，实现home写目录，welcome写内容
    {
        name: 'home',
        path: '/',
        component: home,
        // 用于面包屑和路由守卫中控制网页的标题
        meta: {
            title: '首页'
        },
        redirect: '/welcome',
        children: [
            {
                name: 'welcome',
                // 加上/就变成了一个绝对地址了
                path: '/welcome',
                component: ()=>import('./../views/welcome.vue'),
                meta: {
                    title: '欢迎页'
                },
            }
        ]
    },
    // 它外面就没有东西限制了
    {
        name: 'login',
        path: '/login',
        component: ()=>import('./../views/login.vue'),
        meta: {
            title: '登录'
        },
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes : routeDataList
})

// 写成什么module的形式行不行,这样一个能控制浏览器跳转的router对象就创建出来了
export default router