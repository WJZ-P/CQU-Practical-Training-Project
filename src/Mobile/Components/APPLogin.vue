<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {ref} from "vue";
import {Avatar, Lock} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

//设置统一身份认证号
let IDCode = ref('')
let passWord = ref("")

const router=useRouter()

function checkIn() {
  //将来和后端结合
  if(IDCode.value==="1" && passWord.value==="1"){
    //执行路由跳转
    router.push('/AndroidApp/MainPage')
  }
  else window.alert('账号或密码错误')
}
</script>

<template>
  <div class="login-div">
    <Section style="height: 400px">
      <div class="input-div-wrapper">
        <div class="input-div">
          <el-icon size="40px">
            <Avatar/>
          </el-icon>
          <el-input class="input" v-model="IDCode" placeholder="统一身份认证号" clearable></el-input>
        </div>
        <div class="input-div">
          <el-icon size="40px">
            <Lock/>
          </el-icon>
          <el-input class="input" v-model="passWord" placeholder="请输入密码" clearable type="password"></el-input>
        </div>

      </div>
      <button class="login-button" @click="checkIn">登录</button>

    </Section>
  </div>

</template>

<style scoped>
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 15px;
  height: fit-content;

}

.input-div-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 10%;
}

.input-div {
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 10px
}

.input {
  width: 100%;
  height: 100%;
  border: none !important;
  outline: none !important;
}

.login-button {
  width: 50%;
  height: 15%;
  font-size: 30px;
  color: #ffffff;
  background-color: #2167b0;
  transition: 0.2s ease-in-out;
  margin-top: -100px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #1a538a;
    scale: 1.05;
    box-shadow: 0 0 10px #1a538a;
    animation: doudong 0.3s;
  }
}

@keyframes doudong {
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(3deg);
  }
  25% {
    transform: rotate(5deg);
  }
  37.5% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(0deg);
  }
  62.5% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  87.5% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>