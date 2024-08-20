<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import "animate.css"
import Login from "@/Mobile/Components/APPLogin.vue";

</script>

<template>
  <div class="android-app">
    <Section>
      <div class="main">
        <div class="login-top-part">
          <div class="logo-div animate__animated animate__bounce">
            <img class="logo" src="https://sso.cqu.edu.cn/linkid/api/image/download/1650350700631phonelogo172172.png"
                 alt="校徽"/>
            <img class="logo-font" src="https://sso.cqu.edu.cn/linkid/api/image/download/1650348448496phonename54.png"
                 alt="校字"/>
          </div>
        </div>
        <div class="login-bottom-part" style="color: rgb(128,128,128)">
          <div class="title-div">
            <Section style="background-color:#efefef;margin: 10px;">
              <h1>欢迎登录重大校园</h1>
            </Section>
          </div>
          <div class="login-part">
            <Section style="background-color: #e5e5e5">
              <login/>
            </Section>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.android-app {
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.login-top-part {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 100%;
  background-image: url("http://huxi.cqu.edu.cn/static/upfiles/202312/20231212155339636.jpg");
  background-repeat: no-repeat;
  background-size: 120% 120%;
  background-position: -50px 0;
  border-radius: 10px;

}

.login-bottom-part {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 20px;
}

.logo-div {
  height: 300px;
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    scale: 1.05;
    animation: doudong 0.3s ease-in-out infinite;
  }

  &:active {
    animation: doudong 1s ease-in-out;
  }
}

.logo {
  width: 100%;
  margin-top: -80px;
}

.logo-font {
  width: 120%;
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

.title-div{
  display: flex;
  width: 100%;
  height: fit-content;
  margin-top: -15px;
  transition: 0.3s ease-in-out;
  &:hover{
    cursor: pointer;
    scale: 1.02;
  }
}

/*输入账号密码界面*/
.login-part{
  display: flex;
  flex-direction: column;
  padding: 0 10px 0 10px;
}
</style>