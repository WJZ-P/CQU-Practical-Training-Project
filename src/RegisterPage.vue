<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {ref} from "vue";

const IDCode = ref('')//账号
const passWord = ref('')//密码
</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="register-div">
        <Section class="register-section">
          <h1 class="register-text">重大新生报道网站</h1>
          <br>
          <h2>账号注册</h2>
          <br>
          <div class="form-class">
            <el-form>
              <el-form-item label="请输入账号" label-position="top">
                <el-input v-model="IDCode" placeholder="账号"></el-input>
              </el-form-item>

              <el-form-item label="请输入密码" label-position="top">
                <el-input  v-model="passWord" placeholder="密码" show-password></el-input>
              </el-form-item>
            </el-form>
          </div>
        </Section>
      </div>
    </Section>

  </div>
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

.register-div {
  display: flex;
  width: 50%;
  height: 50%;
  align-items: center;
}

.register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 0.85;
}

.register-text {
  margin-bottom: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  color: #fffefe;
  text-shadow: 2px 2px 4px #000000;
}

.login-page {
  height: 100%;
  background: radial-gradient(circle, #50699f, #36adc4);
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
  width: fit-content;
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