<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {reactive, ref} from "vue";
import {DocumentChecked, Key, Message, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus"
import {useRouter} from "vue-router";
import axios from "axios";
import CryptoJS from "crypto-js";

const router = useRouter()

const formData = reactive({
  name: "",         //姓名
  stuId: "",        //学号
  department: "",   //学院
  major: "",        //专业
  classes: "",      //班级
  id: "",           //身份证号
  nation: "",       //民族
  address: "",      //家庭住址
  phoneNumber: "",  //电话号码
  email: "",        //邮箱，自动传入，不应该修改
  stuPassword: "",  //账号的密码
  token: ""         //学校方面的token
})

const formRef = ref(null)
// {
//     type: 'string',
//     required: true,
//     message: '格式不对哦！',
//     pattern: 这里写正则表达式
//   }
const rules = {
  name: [{
    required: true,
    message: '请输入姓名',
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
  formRef.value.validate(async (valid) => {
    if (valid) {//valid了说明表单校验通过
      console.log('表单校验通过！')

      axios.post('http://127.0.0.1:8080/register', {
        "email": formData.emailAddress,
        "username": formData.userName,
        "password": formData.passWord,//后端已经实现MD5加密，不需要前端加
        "captcha": formData.captcha,//用户输入的验证码
      }).then((response) => {
        console.log(response)
        if (response.data?.msg === 'success') {
          ElMessage.success('注册成功！')
          router.push('/')//注册成功跳转到登陆页面
        }
      })

    }
  })
}

</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="register-div">
        <Section class="register-section animate__animated animate__bounceIn">
          <h1 class="register-text">个人信息修改页面</h1>
          <br>
          <h2>请勿泄露任何个人信息！</h2>
          <br>
          <div class="form-class">
            <el-form :model="formData" ref="formRef" :rules="rules"
            status-icon label-width="auto">
              <el-form-item label="请输入姓名" prop="emailAddress">
                <el-input v-model="formData.name" placeholder="姓名" size="large">
                  <template #prefix>
                    <el-icon size="large">
                      <Message/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入学号"  size="large" prop="userName">
                <el-input v-model="formData.stuId" placeholder="学号">
                  <template #prefix>
                    <el-icon size="large">
                      <User/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入学院"  size="large" prop="passWord">
                <el-input v-model="formData.department" placeholder="学院" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入专业" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.major" placeholder="专业" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入班级" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.classes" placeholder="班级" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入专业" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.major" placeholder="专业" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入身份证号" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.id" placeholder="身份证号" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入专业" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.major" placeholder="专业" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入民族" size="large" prop="reConfirmPwd">
                <el-input v-model="formData.nation" placeholder="民族" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入家庭住址" size="large" prop="captcha">
                <el-input v-model="formData.address" placeholder="家庭住址" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入电话号码" size="large" prop="captcha">
                <el-input v-model="formData.phoneNumber" placeholder="电话号码" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入邮箱" size="large" prop="captcha">
                <el-input v-model="formData.email" placeholder="邮箱" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入密码" size="large" prop="captcha">
                <el-input v-model="formData.stuPassword" placeholder="密码" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入token" size="large" prop="captcha">
                <el-input v-model="formData.token" placeholder="token" show-password>
                  <template #prefix>
                    <el-icon size="large">
                      <DocumentChecked/>
                    </el-icon>
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