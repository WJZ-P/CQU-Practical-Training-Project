<script setup>
import Section from "@/components/UtilsComponnet/Section.vue";
import {onBeforeMount, ref} from "vue";
import {Check, Edit, Key, Location, Phone, School, UploadFilled, User} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus"
import {useRouter} from "vue-router";
import axios from "axios";
import UploadComp from "@/components/uploadComp.vue";

const router = useRouter()

const formData = ref({
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
  token: "",        //学校方面的token
  imgString: ''       //图片
})

const formRef = ref(null)//保存用户存入的数据
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
  }],
  stuId: [{
    required: true,
    message: '请输入学号',
    trigger: 'blur'
  }],
  department: [{
    required: true,
    message: '请输入学院',
    trigger: 'blur'
  }],
  major: [{
    required: true,
    message: '请输入专业',
    trigger: 'blur'
  }],
  classes: [{
    required: true,
    message: '请输入班级',
    trigger: 'blur'
  }, {
    type: 'string',
    pattern: /^[0-9]+$/,
    message: '只允许输入数字'
  }],
  id: [{
    required: true,
    message: '请输入身份证号',
    trigger: 'blur'
  }, {
    type: 'string',
    pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    message: '请输入正确的身份证号格式！'
  }],
  nation: [{
    required: true,
    message: '请输入民族',
    trigger: 'blur'
  }],
  address: [{
    required: true,
    message: '请输入家庭住址',
    trigger: 'blur'
  }],
  phoneNumber: [{
    required: true,
    message: '请输入电话号码',
    trigger: 'blur'
  }],
  email: [{
    required: true,
    message: '请输入邮箱',
    trigger: 'blur'
  }],
  stuPassword: [{
    required: false,
    message: '请输入学生密码',
    trigger: 'blur'
  }],
  token: [{
    required: false,
    message: '请输入token',
    trigger: 'blur'
  }],
}

//表单提交方法
function submitForm() {
  //表单校验
  formRef.value.validate(async (valid) => {
    if (valid) {//valid了说明表单校验通过
      console.log('表单校验通过！下面是即将提交的信息')
      console.log(formData.value)


      axios.post('http://127.0.0.1:8080/accountCompletion', formData.value, {
        headers: {
          "Authorization": localStorage.getItem('cqu-jwt')
        }
      }).then((response) => {
        console.log(response)
        if (response.data?.msg === 'success') {
          ElMessage.success('修改成功！')
          router.push('/StudentMenu')//注册成功跳转到学生端主页
        }
      })
    }
  })
}

function setup() {
  const selectedFile = ref(null);  // 存储选择的文件
  const imgUrl = ref('');  // 用于存储上传后的图片URL

  // 处理文件选择
  const onFileChange = (event) => {
    selectedFile.value = event.target.files[0]; // 获取选择的文件
  };


  const service = axios.create({
    baseURL: "/image"
  })

  service.interceptors.response.use(response => {
    const code = response.data.code || 200
    if (code === 200) {
      return response.data.data
    }

    let msg = response.data.code + " " + response.data.msg
    ElMessage.error(msg)

    return Promise.reject('上传图片失败：' + msg)
  })
}

function uploadImage(file, progress) {
  console.log(file, progress)
  const binaryData = file.raw   //二进制数据
  if (binaryData) {
        fileToBase64(binaryData).then(base64 => {
            console.log(base64); // 输出 Base64 编码字符串
            ElMessage.success('图片上传成功！')
            formData.value.imgString=base64
        }).catch(error => {
            console.error("文件转换出错：", error);
        });
    }
}

//图片转base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      // `result` 是包含文件内容的 Base64 编码字符串
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    // 读取文件为 Data URL（Base64 编码）
    reader.readAsDataURL(file);
  });
}

onBeforeMount(() => {
  const myConfig = {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }
  axios.get('http://127.0.0.1:8080/queryAccount', myConfig).then(res => {//查询账户信息
    console.log(res.data.data)
    formData.value = res.data.data
  })
})


</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section class="login-page">
      <div class="register-div">
        <Section class="register-section animate__animated animate__zoomInDown animate__fast">
          <h1 class="register-text">个人信息修改页面</h1>
          <br>
          <div class="form-class">
            <el-form :model="formData" ref="formRef" :rules="rules"
                     status-icon label-width="auto">
              <el-form-item label="请上传图片" prop="imgString">
                <el-upload
                    class="upload-demo"
                    drag
                    action="none"
                    :on-change="uploadImage"
                >
                  <el-icon class="el-icon--upload">
                    <upload-filled/>
                  </el-icon>
                  <div class="el-upload__text">
                    拖拽照片到这里 <em>点击手动上传</em>
                  </div>
                  <template #tip>
                    <div class="el-upload__tip">
                    </div>
                  </template>
                </el-upload>
              </el-form-item>
              <el-form-item label="请输入姓名" prop="name">
                <el-input v-model="formData.name" placeholder="姓名">
                  <template #prefix>
                    <el-icon>
                      <User/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item label="请输入学号" prop="stuId">
                <el-input v-model="formData.stuId" placeholder="学号">
                  <template #prefix>
                    <el-icon size="large">
                      <Edit/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入学院" prop="department">
                <el-input v-model="formData.department" placeholder="学院">
                  <template #prefix>
                    <el-icon>
                      <School/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入专业" prop="major">
                <el-input v-model="formData.major" placeholder="专业">
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/school_24dp_5F6368_FILL0_wght200_GRAD-25_opsz40.svg" alt=""/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入班级" prop="classes">
                <el-input v-model="formData.classes" placeholder="班级">
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/stacks_24dp_A7A9B0_FILL0_wght200_GRAD-25_opsz24.svg" alt="">
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item label="请输入身份证号" prop="id">
                <el-input v-model="formData.id" placeholder="身份证号" show-password>
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/fingerprint_24dp_A7A9B0_FILL0_wght200_GRAD-25_opsz24.svg" alt="">
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入民族" prop="nation">
                <el-input v-model="formData.nation" placeholder="民族">
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/diversity_1_24dp_A7A9B0_FILL0_wght200_GRAD0_opsz24.svg" alt="">
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入家庭住址" prop="address">
                <el-input v-model="formData.address" placeholder="家庭住址">
                  <template #prefix>
                    <el-icon>
                      <Location/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入电话号码" prop="phoneNumber">
                <el-input v-model="formData.phoneNumber" placeholder="电话号码" show-password>
                  <template #prefix>
                    <el-icon>
                      <Phone/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入邮箱" prop="email">
                <el-input v-model="formData.email" placeholder="邮箱">
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/mail_24dp_A7A9B0_FILL0_wght200_GRAD0_opsz24.svg" alt="">
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="修改密码" prop="stuPassword">
                <el-input v-model="formData.stuPassword" placeholder="新密码" show-password>
                  <template #prefix>
                    <el-icon>
                      <Key/>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item label="请输入token" prop="token">
                <el-input v-model="formData.token" placeholder="填写学校官网获取的token" show-password>
                  <template #prefix>
                    <el-icon>
                      <img src="../assets/icons/encrypted_24dp_A7A9B0_FILL0_wght200_GRAD0_opsz24.svg" alt="">
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
          </div>
          <el-button type="primary" class="register-button" @click="submitForm">
            <el-icon :size="25">
              <Check/>
            </el-icon>
            确认修改
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
  width: 30%;
  height: 50%;
  align-items: center;

}

.register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  opacity: 0.95 !important;
  overflow: hidden;
}

.register-text {
  margin-bottom: 20px;
  line-height: 40px;
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  color: #4198f2;
  text-shadow: 2px 2px 4px #6cbfd2;
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


* {
  margin: 2px;
  box-sizing: border-box;
}
</style>

<style>
.el-upload__text {
  font-size: 20px;
}

.el-icon--upload {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
}

.el-upload-dragger {
  width: 100%;
  height: 10px;
}

.el-form-item__content {
  display: flex;
  justify-content: center;
}
</style>