<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {reactive, ref} from "vue";
import {DocumentChecked, Key, Message, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus"
import {useRouter} from "vue-router";

const router=useRouter()

const backEndCaptcha = ref('')//后端返回的验证码

const formData = reactive({
  emailAddress: '',
  userName: '',
  passWord: '',
  reConfirmPwd: '',
  captcha: '',
})

const formRef=ref(null)


const rules = {
  emailAddress: [{
    required: true,
    message: '请输入邮箱',
    trigger: 'blur'//失去焦点触发
  }, {
    type: 'email',
    message: '请输入正确的邮箱格式',
    trigger: 'blur'
  }],
  userName: [{
    required: true,
    message: '请输入昵称',
    trigger: 'blur'
  }],
  passWord: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }],
  reConfirmPwd: [{
    required: true,
    message: '请输入确认密码',
    trigger: 'blur'
  }, {
    validator: (rule, value, callback) => {
      if (value !== formData.passWord) {
        callback(new Error('两次密码输入不一致！'))
      } else callback()
    },
    trigger: 'blur'
  }],
  captcha: [{
    required: true,
    message: '请输入验证码',
    trigger: 'blur'
  }]
}

//表单提交方法
function submitForm() {
  //表单校验
  formRef.value.validate((valid) => {
    if (valid) {//valid了说明表单校验通过
      console.log('表单校验通过！')
      const encryptedPwd=CryptoJS.MD5(formData.passWord).toString()
      //调用后端接口校验验证码

      if (formData.captcha === backEndCaptcha.value) {
        //调用后端接口注册用户,等待实现
        //axios.post('/register', formData).then(res => {

        ElMessage.success('注册成功！')
        router.push('/StudentMenu')//注册成功跳转到学生主页面
      }
    }
  })
}

function sendEmail() {
  //调用后端接口发送邮箱验证码
  ElMessage.success('一封注册邮件已发送至您的邮箱，请输入邮箱内的验证码！')
}
</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="register-div">
        <Section class="register-section animate__animated animate__bounceIn">
          <h1 class="register-text">重大新生报道网站</h1>
          <br>
          <h2>账号注册</h2>
          <br>
          <div class="form-class">
            <el-form :model="formData" ref="formRef" :rules="rules">
              <el-form-item label="请输入邮箱" label-position="top" prop="emailAddress">
                <el-input v-model="formData.emailAddress" placeholder="邮箱" size="large">
                  <template #prefix>
                    <el-icon size="large">
                      <Message/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入昵称" label-position="top" size="large" prop="userName">
                <el-input v-model="formData.userName" placeholder="昵称">
                  <template #prefix>
                    <el-icon size="large">
                      <User/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入密码" label-position="top" size="large" prop="passWord">
                <el-input v-model="formData.passWord" placeholder="密码" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="再次输入以确认密码" label-position="top" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.reConfirmPwd" placeholder="确认密码" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <!--              输入邮箱内提供的验证码-->

              <el-form-item label="请输入邮箱验证码" label-position="top" size="large" prop="captcha">
                <el-input v-model="formData.captcha" placeholder="验证码" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
                  </template>
                  <template #append>
                    <el-button type="primary" @click="sendEmail" size="large" plain text>发送验证码</el-button>
                  </template>
                </el-input>
              </el-form-item>

              <br>
              <br>
            </el-form>
          </div>
          <el-button type="primary" class="register-button" @click="submitForm">
            <el-icon>
              <User/>
            </el-icon>
            立即注册
          </el-button>
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
  width: 35%;
  height: 50%;
  align-items: center;
}

.register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 0.95 !important;
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

.form-class {
  width: 80%;
  height: 40%;
}

.register-button {
  width: 30%;
  font-size: 20px;
  padding: 15px;
  height: 50px;
}

.login-page {
  height: 100%;
  background-image: url("https://www.cqu.edu.cn/images/23/10/11/1ucry5xfsw/%E8%99%8E%E6%BA%AA%E5%90%AF%E5%85%B9%E4%BA%AD.jpg");
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  align-content: center;
}


</style>