<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import PCAPP from "@/PCAPP.vue";
import {useRouter} from "vue-router";
import PCLogin from "@/components/Login/PCLogin.vue";

const router = useRouter()
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
          <h3 style="text-align: left;color: #004791;width: 100%">统一身份认证</h3>
          <PCLogin/>
        </Section>
      </div>
    </Section>

  </div>
  <Section>
    <div class="button-div">
      <RouterLink to="/PCAPP">
        <button>点我跳转到网页端</button>
      </RouterLink>

      <RouterLink to="/AndroidApp">
        <button>点我跳转到移动端</button>
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
  width: min(300px,80%);
  display: flex;
justify-content: center;
  align-items: center;
}
.logo {
  width: 50%;
  margin-bottom: 10px;
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
  opacity: 0.7;
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

button {
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
