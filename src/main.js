import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createRouter, createWebHistory} from "vue-router";
import MainMenu from "@/Mobile/MainMenu.vue";
import MainPage from "@/Mobile/MainPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import TeacherMenu from "@/pages/TeacherMenu.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import FindPwdPage from "@/pages/FindPwdPage.vue";
import CQU_student from "@/students/CQU_student.vue";
import PersonalMsg from "@/students/StuChildren/PersonalMsg/PersonalMsg.vue";
import Accommodate from "@/students/StuChildren/Accommodate/Accommodate.vue";
import MsgQuery from "@/students/StuChildren/MsgQuery/MsgQuery.vue";
import CourseQuery from "@/students/StuChildren/CourseQuery/CourseQuery.vue";
import Consult from "@/students/StuChildren/Consult/Consult.vue";

async function checkLogin() {
    //向后端发送请求查看当前用户是否登录
    //如果登录，则返回true，否则返回false
    //return await axios.get('http://localhost:8080/checkLogin')
    return true
}

const routes = [
    {path: '/', component: LoginPage},
    {path: '/TeacherMenu', component: TeacherMenu},//教师端主页
    {path: '/StudentMenu', component: CQU_student},//学生端主页
    {path: '/Register', component: RegisterPage},   //注册页面
    {path: '/FindPassword', component: FindPwdPage},   //找回密码页面
    {
        path: '/AndroidApp',
        children: [
            {path: '', component: LoginPage},
            {path: 'students/PersonalMsg', component: PersonalMsg},
            {path: 'students/Accommodate', component: Accommodate},
            {path: 'students/MsgQuery', component: MsgQuery},
            {path: 'students/CourseQuery', component: CourseQuery},
            {path: 'students/CourseRegister', component: CourseQuery},
            {path: "students/Consult", component: Consult},
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
    if (to.name === '') return true;//如果访问的是空白页面，则直接放行


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
