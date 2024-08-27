import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus, {ElMessage} from 'element-plus'
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
import MsgQuery from "@/students/StuChildren/MsgQuery/MsgQuery.vue";
import CourseQuery from "@/students/StuChildren/CourseQuery/CourseQuery.vue";
import Consult from "@/students/StuChildren/Consult/Consult.vue";
import MobileLoginPage from "@/Mobile/MobileLoginPage.vue";
import Dorm from "@/students/StuChildren/Accommodate/Dorm.vue";
import DormPlum from "@/students/StuChildren/Accommodate/DormPlum.vue";
import DormBamboo from "@/students/StuChildren/Accommodate/DormBamboo.vue";
import DormChrys from "@/students/StuChildren/Accommodate/DormChrys.vue";
import DormOrchid from "@/students/StuChildren/Accommodate/DormOrchid.vue";
import axios from "axios";
import SelectCoursePage from "@/pages/SelectCoursePage.vue";
import StudentInfoPage from "@/pages/StudentInfoPage.vue";
import TestPage from "@/TestPage.vue";
import SearchCoursePage from "@/pages/SearchCoursePage.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const routes = [
    {path: '/', component: CQU_student},
    {path: '/TeacherMenu', component: TeacherMenu}, //教师端主页
    {path: '/Register', component: RegisterPage},   //注册页面
    {path: '/Login', component: LoginPage},          //登陆页面
    {path: '/FindPassword', component: FindPwdPage},//找回密码页面
    {path: '/testPage', component: TestPage},       //测试页面
    {
        path: '/StudentMenu',  //学生端主页
        children: [
            {path: "", component: CQU_student},
            {path: "selectCourse", component: SelectCoursePage},
            {path:'studentInfo',component: StudentInfoPage},
            {path:'SearchCourse',component: SearchCoursePage},
            {
                path: 'Accommodate',//转到宿舍页面
                children: [
                    {path: '', component: Dorm},
                    {path: 'DormPlum', component: DormPlum},
                    {path: 'DormBamboo', component: DormBamboo},
                    {path: 'DormChrys', component: DormChrys},
                    {path: 'DormOrchid', component: DormOrchid}
                ],
            },
        ]
    },
    {
        path: '/students',//学生端页面
        children: [
            {path: '', component: MobileLoginPage},
            {path: 'PersonalMsg', component: PersonalMsg},

            {path: 'MsgQuery', component: MsgQuery},
            {path: 'CourseQuery', component: CourseQuery},
            {path: 'CourseRegister', component: CourseQuery},
            {path: "Consult", component: Consult},
            {path: 'MainPage', component: MainPage, children: [{path: '', component: MainMenu}]}
        ]
    }]

const router = createRouter({//这里创建了一个路由
    history: createWebHistory(), routes,
})


//创建全局前置守卫
router.beforeEach(async (to, from) => {
    if (to.fullPath === '/Register' || to.fullPath === '/Login') {
        console.log('[路由导航]' + '访问的是注册页或登录页，直接允许跳转')
        return true
    }


    //下面开始进行JWT校验
    const jwt = localStorage.getItem('cqu-jwt')
    console.log(jwt)
    if (jwt == null) {
        ElMessage.error('你还未登录！请登录后再试！')
        return router.push('/Login')
    }//如果JWT为空，则重定向到登录页面

    try {
        const result = await axios.get(`http://localhost:8080/authJwt?jwt=${jwt}`)
        const isAuthed = result.data?.msg === `success`

        console.log('[路由导航jwt鉴权]' + '鉴权结果为' + isAuthed)
        // 将用户重定向到登录页面
        if (!isAuthed && to.fullPath !== '') {
            ElMessage.error('登录已过期！请重新登录！')
            return {fullPath: '/Login'}
        }
    } catch (error) {
        console.log(error)
        ElMessage.error('[路由导航] 服务器错误，请稍后再试')
        ElMessage.error('将为您跳转到登陆页面')
    }


})

const app = createApp(App)

app.use(ElementPlus,{locale:zhCn})
app.use(router)
app.mount('#app')
