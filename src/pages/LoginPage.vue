<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {useRouter} from "vue-router";
import {Avatar, Lock} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import axios from "axios";


const router = useRouter()

const emailAddress = ref('')
const passWord = ref('')

//选择老师端登入或是学生端登入
const selectValue = ref('')//值为1 or 2
const options = [
  {label: '学生端', value: '1'},
  {label: '老师端', value: '2'}]

//登录验证
function checkin() {
  if (selectValue.value === '') return ElMessage.error('请选择老师端或学生端！')
  if (emailAddress.value === '') return ElMessage.error('请输入邮箱！')
  if (passWord.value === '') return ElMessage.error('请输入密码！')


  //下面开始请求接口做登录校验
  try {
    console.log('正在请求登录接口')
    axios.post('http://127.0.0.1:8080/login', {
      "email": emailAddress.value,
      "password": passWord.value,
    }).then((response) => {
          if (response.data?.msg === 'login success') {
            //登录成功后,把返回的jwt存到本地
            console.log('[登录接口]' + '收到的jwt为' + response.data.data)
            localStorage.setItem('cqu-jwt', response.data.data)


            //登录成功，现在默认跳转到学生端
            if (selectValue.value === '1') {
              ElMessage.success('登陆成功！')
              return router.push('/StudentMenu')
            }
            if (selectValue.value === '2') {
              ElMessage.success('登陆成功！')
              return router.push('/TeacherMenu')
            }


          }

          if (response.data?.msg === 'email not exist') {
            return ElMessage.error('邮箱错误！未注册请跳转到注册页面')
          }

          if (response.data?.msg === 'password error') {
            passWord.value = ''//密码改为空
            return ElMessage.error('密码错误！请重试！')
          }

          return ElMessage.error('出现错误，请重试')
        }
    )
  } catch (e) {
    console.log(e)
    ElMessage.error('出现错误，请重试')
  }
}

</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="login-div">
        <Section class=" animate__animated animate__backInLeft login-section-left animate__fast">
          <h1 style="text-align: center">重庆大学新生报道平台</h1>
          <br>
          <div class="logo-div">
            <img class="logo" src="https://sso.cqu.edu.cn/linkid/api/image/download/1650350700631phonelogo172172.png"
                 alt="校徽"/>
          </div>
          <br>

          <div class="left-content">
            <h3>1、欢迎来到重庆大学新生报道平台！</h3>
            <br>
            <h3>2、新用户请点击右侧立即注册以注册账号。</h3>
            <br>
            <h3>3、忘记账号，请点击“找回密码”。</h3>
            <br>
            <h3>4、安全起见，请不要向任何人透露自己的账号密码！</h3>
            <br>
            <h3>5、祝您使用愉快！</h3>
            <br>
          </div>
        </Section>

        <!--        右侧的登陆界面-->
        <Section class="login-section-right animate__animated animate__backInRight animate__fast">
          <h2 style="text-align: left;color: #004791;width: 100%">登录</h2>
          <div class="input-div-wrapper">
            <div class="input-div">
              <el-icon size="35px">
                <Avatar/>
              </el-icon>
              <el-input class="input" v-model="emailAddress" placeholder="请输入邮箱" clearable size="large"></el-input>
            </div>
            <div class="input-div">
              <el-icon size="35px">
                <Lock/>
              </el-icon>
              <el-input class="input" v-model="passWord" placeholder="请输入密码" clearable type="password"
                        size="large"></el-input>
            </div>
            <div style="width: 100%;display: flex;justify-content: center">
              <!--              下拉选择栏-->
              <el-select
                  v-model="selectValue"
                  placeholder="请选择老师端或学生端"
                  size="large"
                  style="width: min(60%,400px)"
              >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
              </el-select>
            </div>
            <div style="width: 100%;display: flex;justify-content: center">
              <button class="custom-button" style="width: 55%;height: 60%;" @click="checkin">登录</button>
            </div>
            <div style="width: 100%;display: flex;justify-content: space-between;font-size: 18px;">
              <RouterLink to="/Register" class="routelink">立即注册</RouterLink>
              <RouterLink to="/FindPassword" class="routelink">找回密码
              </RouterLink>
            </div>
          </div>
        </Section>
      </div>
    </Section>

  </div>
  <!--  <Section>-->
  <!--    <div class="button-div">-->
  <!--      <RouterLink to="/TeacherMenu">-->
  <!--        <button class="custom-button">点我跳转到网页端</button>-->
  <!--      </RouterLink>-->

  <!--      <RouterLink to="/AndroidApp">-->
  <!--        <button class="custom-button">点我跳转到移动端</button>-->
  <!--      </RouterLink>-->
  <!--    </div>-->
  <!--  </Section>-->
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

  &:hover {
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
  opacity: 0.8 !important;
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
  opacity: 0.9 !important;
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

.input-div {
  width: min(450px, 80%);
  height: min(50px, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid #d9d9d9;
  border-radius: 5px;
  margin: 10px;
  padding: 0;
}

.routelink {
  text-decoration: none;
  color: rgb(128, 128, 128);
  transition: 0.2s;

  &:hover {
    color: #2167b0;
    scale: 1.2;
  }
}

.input {
  width: 100%;
  height: 100%;
  margin-right: 5px;
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