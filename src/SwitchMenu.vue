<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {useRouter} from "vue-router";
import {Avatar, Lock} from "@element-plus/icons-vue";
import {ref} from "vue";

const router = useRouter()

const IDCode = ref('')
const passWord = ref('')


//登录验证
function checkin(){
  if(IDCode.value==='1' && passWord.value ==="1")
  {
    router.
  }
}

</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="login-div">
        <Section class="login-section-left">
          <h1 style="text-align: center">重庆大学统一登录平台</h1>
          <br>
          <div class="logo-div">
            <img class="logo" src="https://sso.cqu.edu.cn/linkid/api/image/download/1650350700631phonelogo172172.png"
                 alt="校徽"/>
          </div>
          <br>

          <div class="left-content">
            <h4>1、欢迎来到重庆大学统一登录平台！</h4>
            <br>
            <h4>2、用户名为统一身份认证号或者身份证件号。</h4>
            <br>
            <h4>3、忘记账号，请点击“找回密码”。</h4>
            <br>
            <h4>4、请不要向任何人透露自己的账号密码！</h4>
            <br>
            <h4>5、祝您使用愉快！</h4>
            <br>
          </div>
        </Section>

        <!--        右侧的登陆界面-->
        <Section class="login-section-right">
          <h2 style="text-align: left;color: #004791;width: 100%">统一身份认证</h2>
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
            <div style="width: 100%;display: flex;justify-content: center">
              <button class="custom-button" style="width: 55%;height: 60%">登录</button>
            </div>
          </div>
        </Section>
      </div>
    </Section>

  </div>
  <Section>
    <div class="button-div">
      <RouterLink to="/PCAPP">
        <button class="custom-button">点我跳转到网页端</button>
      </RouterLink>

      <RouterLink to="/AndroidApp">
        <button class="custom-button">点我跳转到移动端</button>
      </RouterLink>
    </div>
  </Section>
</template>


<style scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.logo-div {
  width: min(300px, 80%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 50%;
  margin-bottom: 10px;
  transition: 0.2s;
  &:hover{
    scale: 1.2;
  }
}

.login-page {
  height: 100%;
  background-image: url("https://www.cqu.edu.cn/images/23/10/11/1ucry5xfsw/%E8%99%8E%E6%BA%AA%E4%BA%91%E6%B9%96%E6%B0%B4%E5%BD%B1.jpg");
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  align-content: center;
}

.left-content {
  font-family: "FangSong", "仿宋", sans-serif;
  font-weight: normal;
}

.login-div {
  height: 60%;
  width: 80%;
  display: flex;
  align-items: center;
}

/*左侧的提示框 */
.login-section-left {
  margin-right: 50px;
  height: fit-content;
  opacity: 0.8;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
}

/*右侧的提示框 */
.login-section-right {
  opacity: 0.85;
  height: 60%;
  width: 60%;
  margin: 5px 5px 5px 110px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px;
  border-radius: 20px;
}

.button-div {
  display: flex;
  justify-content: center;
  align-content: center;
}

.custom-button {
  width: fit-content;
  height: 100px;
  font-size: 30px;
  color: #ffffff;
  background-color: #2167b0;
  transition: 0.2s ease-in-out;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: #1a538a;
    scale: 1.05;
    box-shadow: 0 0 10px #1a538a;
    animation: doudong 0.3s;
  }
}

.input-div-wrapper {
  display: flex;
  width: 100%;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  height: fit-content;
}

.input-div {
  width: min(450px, 80%);
  height: min(60px, 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 10px;
}

.input {
  width: 100%;
  height: 100%;
  border: none !important;
  outline: none !important;
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
