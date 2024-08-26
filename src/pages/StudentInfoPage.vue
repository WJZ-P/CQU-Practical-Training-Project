<script setup>
import {ElMessage} from 'element-plus';
import {onBeforeMount, ref} from 'vue';
import axios from "axios";
import Header from "@/components/Header.vue";

// 存放页面左侧盒子用来展示学生信息
let eg = ref({
  name: "熊出模",
  email: "1849382749@qq.com",
  id: "522422199809235033",
  department: "计算机学院",
  major: "计算机科学与技术",
  classes: "2024001班",
  phoneNumber: "13158279351",
  nation: "汉族",
  address: "贵州省毕节市大方县三院乡",
  stuId: "20220491",
  stuPassword: "f38194817293",
  token: ""
})

// 右边盒子用来提交信息
let data = ref({
  id: "522422199809235033",
  department: "计算机学院",
  major: "计算机科学与技术",
  classes: "2024001班",
  phoneNumber: "13158279351",
  nation: "汉族",
  address: "贵州省毕节市大方县三院乡",
  stuId: "20220491",
  stuPassword: "f38194817293",
  token: "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMyIsImVtYWlsIjoiMTM2OTcyNzExOUBxcS5jb20iLCJleHAiOjE3MjQ2NzcxODR9.j1Vh3ZTpR4EvkmZC5wQkHx7ejl7gz3CptbsSdqVrcms"
})

// 通过jwt获取个人信息
async function getPersonInfo(jwt) {
  try {
    const response = await axios.post(`http://127.0.0.1:8080/accountCompletion?jwt=eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMyIsImVtYWlsIjoiMTM2OTcyNzExOUBxcS5jb20iLCJleHAiOjE3MjQ2MzA0NTZ9.kVLnGCPjPriVpkvdeK-bxq92Atiq6VzDMWfNT2tegSc`);
    return response.data;
  } catch (error) {
    console.error('获取个人信息失败:', error);
    ElMessage.error("获取个人信息失败，请检查您的网络连接或稍后再试。");
  }
}

async function submit(jwt) {
  try {
    const formData = this.data;

    const response = await axios.post(`http://127.0.0.1:8080/accountCompletion?jwt=eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMyIsImVtYWlsIjoiMTM2OTcyNzExOUBxcS5jb20iLCJleHAiOjE3MjQ2MzA0NTZ9.kVLnGCPjPriVpkvdeK-bxq92Atiq6VzDMWfNT2tegSc`, {formData});
    console.log('数据已提交成功:', response);
    ElMessage.success("提交成功");
  } catch (error) {
    console.error('提交失败:', error);
    ElMessage.error("提交失败，请检查您的网络连接或稍后再试。");
  }
}

async function chooseImage() {
  uni.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      const tempFilePaths = res.tempFilePaths;
      this.uploadImage(tempFilePaths[0]);
    },
    fail: (err) => {
      console.log('选择图片失败', err);
    }
  });
}

async function uploadImage(imagePath) {
  uni.uploadFile({
    url: 'http://127.0.0.1:8080/file/upload',
    filePath: imagePath,
    name: 'file',
    formData: {},
    success: (uploadFileRes) => {
      console.log('图片上传成功', uploadFileRes);
    },
    fail: (uploadFileErr) => {
      console.log('图片上传失败', uploadFileErr);
    }
  });
}

onBeforeMount(async () => {
  eg.value = await getPersonInfo();
})
</script>

<template>
  <!--调用统一头部组件-->
  <Header title="学生信息管理界面"/>
  <!--页面最大容器-->
  <div class="container">

    <!--左右各两个盒子，类容相似，左边盒子用作示例，右边盒子用于提交以及展示自己的信息 -->
    <div class="inf-box">
      <img class="stu-img" :src="eg.image"
           style="width: 40%; height: 150px;margin-top: 40px" alt="学生证件照" @click="chooseImage()"></img>
      <text class="stu-info">学生信息</text>
      <!--循环展示列表-->

      <!--每一行所有元素所在的盒子-->
      <div class="content-box">
        <text class="attribute">姓名</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.name }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">邮箱</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.email }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">身份证号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.id }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">学院</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.department }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">专业</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.major }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">班级</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.classes }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">电话号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.phoneNumber }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">民族</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.nation }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">家庭住址</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.address }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">学号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.stuId }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">密码</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.stuPassword }}</text>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">token</text>
        <text class="colon">:</text>
        <div class="line-box">
          <text class="attribute-content">{{ eg.token }}</text>
        </div>
      </div>

    </div>

    <div class="inf-box">
      <img class="stu-img" src="" @click="chooseImage"
           style="width: 40%; height: 150px; margin-top: 40px; cursor: pointer;" alt="学生证件照"></img>
      <text class="stu-info">学生信息</text>

      <!--待提交内容-->
      <div class="content-box">
        <text class="attribute">身份证号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.id"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">学院</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.department"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">专业</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.major"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">班级</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.classes"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">电话号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.phoneNumber"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">民族</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.nation"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">家庭住址</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.address"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">学号</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.stuId"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">密码</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.stuPassword"/>
        </div>
      </div>

      <div class="content-box">
        <text class="attribute">token</text>
        <text class="colon">:</text>
        <div class="line-box">
          <input type="text" class="attribute-content" v-model="data.token"/>
        </div>
      </div>


      <button class="submit" @click="submit()">提交</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.inf-box {
  width: 45%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 4%;
  border: solid gray 1px;
  box-shadow: 1px 1px 5px 5px rgba(151, 151, 151, 0.4);
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 20px;
}

.stu-info {
  font-size: 3vw;
  color: #979797;
}

.content-box {
  width: 90%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
}

.line-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72%;
  height: 100%;
  border-bottom: gray 1px solid;
  margin-left: 2%;
}

.attribute {
  margin-top: 3%;
  width: 23%;
  color: gray;
  font-size: 2vw;
  text-align: justify;
  text-align-last: justify;
}

.colon {
  margin-top: 3%;
  margin-left: 1%;
  color: gray;
  font-size: 2vw;
}

.attribute-content {
  font-size: 1.5vw;
  width: 100%;
  text-align: center;
  margin-top: 5%;
  overflow: auto;
}

input {
  /* 隐藏输入框，增强美观性 */
  background-color: transparent;
  border: none;
}

.submit {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 4%;
  width: 20%;
  height: 4vw;
  background-color: #4796ee;
  border-radius: 60px;
  border: none;
  font-size: 1vw;
  color: white;
  transition: 0.2s ease;
}

.submit:hover {
  background-color: #4040d3;
}

.submit:active {
  scale: 1.05;
}
</style>