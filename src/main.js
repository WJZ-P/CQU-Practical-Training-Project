import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/Mobile/LoginPage.vue";
import MainMenu from "@/Mobile/MainMenu.vue";
import MainPage from "@/Mobile/MainPage.vue";
import SwitchMenu from "@/SwitchMenu.vue";
import TeacherMenu from "@/TeacherMenu.vue";
import RegisterPage from "@/RegisterPage.vue";
import axios from "axios";

async function checkLogin() {
    //向后端发送请求查看当前用户是否登录
    //如果登录，则返回true，否则返回false
    //return await axios.get('http://localhost:8080/checkLogin')
    return true
}

const routes = [
    {path: '/', component: SwitchMenu},
    {path: '/TeacherMenu', component: TeacherMenu},//教师端主页
    {path: '/Register', component: RegisterPage},
    {
        path: '/AndroidApp',
        children: [
            {path: '', component: LoginPage},
            {
                path: 'MainPage', component: MainPage, children: [
                    {path: '', component: MainMenu}
                ]
            }
        ]
    }
]

const router = createRouter({//这里创建了一个路由
    history: createWebHistory(),
    routes,
})


//创建全局前置守卫
router.beforeEach(async (to, from) => {
    //return await checkLogin()
    const isAuthenticated = true//后面换成接口请求
    if (
        // 检查用户是否已登录
        !isAuthenticated &&
        // ❗️ 避免无限重定向
        to.name !== ''
    ) {
        // 将用户重定向到登录页面
        return {name: ''}
    }
})

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
