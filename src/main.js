import './assets/main.css'
import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createRouter, createWebHistory} from "vue-router";
import PCAPP from "@/PCAPP.vue";
import LoginPage from "@/Mobile/LoginPage.vue";
import MainMenu from "@/Mobile/MainMenu.vue";
import MainPage from "@/Mobile/MainPage.vue";
import SwitchMenu from "@/SwitchMenu.vue";

const routes = [
    {path: '/', component: SwitchMenu},
    {path: '/PCAPP', component: PCAPP},
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

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
