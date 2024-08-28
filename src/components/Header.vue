<script setup>
import DateTime from "@/components/UtilsComponnet/DateTime.vue";
import ResponsiveEl from "@/components/UtilsComponnet/ResponsiveEl.vue";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";
const router=useRouter()
const props = defineProps({title: String})

//实现退出登录功能
function quitLogin(){
localStorage.removeItem('cqu-jwt')
  ElMessage.success('退出成功，已为您跳转到登陆页面')
  router.push('/Login')
}
</script>

<template>
  <div class="header animate__animated animate__bounceInDown animate__fast">
    <ResponsiveEl :min-width=1300>
      <div class="logo">
        <img src="https://my.cqu.edu.cn/workspace/static/img/logo-workspace.1d5ca1b8.png" alt="重大校徽">
      </div>
    </ResponsiveEl>
    <p style="color: white;align-content: center;align-self: center;font-size: 4vmin">{{ props.title }}</p>
    <div>
      <DateTime class="date-time-component"/>
      <el-button class="quit-button" type="primary" plain @click="quitLogin" size="large">退出登录</el-button>
    </div>
  </div>
</template>


<style scoped>
.header {
  height: 60px;
  background-color: #0052a8;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  margin: 10px 5px 5px 5px;
  padding: 0 10px;

  &:hover {
    background-color: #004793;
    scale: 1.01;
    text-shadow: 0 0 10px #383636;
  }
}

p {
  color: white;
  align-content: center;
  justify-self: center;
  font-size: 30px;
}

.date-time-component {
  padding-right: 80px;
  align-content: center;
}

.logo {
  height: 60px;
  line-height: 10px;
  align-content: center;
  width: 300px;

  img {
    height: 80%;
  }
}

.quit-button{
  margin-left: -60px;
  font-size: 20px;
}

</style>