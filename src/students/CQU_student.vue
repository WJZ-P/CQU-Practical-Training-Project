<script setup>
import calendar from '@/students/StuChildren/calendar.vue'; // 导入日历组件
import imgurl1 from "@/students/StuChildren/picture/个人信息.svg";
import imgurl2 from "@/students/StuChildren/picture/住宿安排.svg";
import imgurl3 from "@/students/StuChildren/picture/信息查询.svg";
import imgurl4 from "@/students/StuChildren/picture/课程查询.svg";
import imgurl5 from "@/students/StuChildren/picture/课程注册.svg";
import imgurl6 from "@/students/StuChildren/picture/在线咨询.svg";
import pessi from "@/students/StuChildren/picture/证件照.jpg";
import {useRouter} from "vue-router";
import "animate.css"
import Header from "@/components/Header.vue";

const router = useRouter()


function goToPersonalMsg() {
  router.push('/StudentMenu/studentInfo')
}

function goToAccommodation() {
  router.push('/StudentMenu/Accommodate')
}
//信息查询
function goToMsgQuery() {
  router.push('/StudentMenu/searchTeacherInfo')
}

function goToCourseQuery() {
  router.push('/StudentMenu/SearchCourse')
}

function goToCourseRegister() {
  router.push('/StudentMenu/selectCourse')
}

function goToConsult() {
  router.push('/StudentMenu/Consult')
}

</script>
<template>
  <div class="container" style="overflow: hidden">
    <Header title="学生首页"/>
    <div class="first_line">
      <div class="card animate__animated animate__backInLeft animate__fast">
        <div class="Top_Bar">
          <p>用户名片</p>
        </div>
        <hr/>
        <div class="picture" style="font-size: 5vmin;  font-weight: bold;  align-items: center;justify-content: space-between;padding: 10px">
          <!--要和后端连接，根据上传照片与否决定是否显示，不显示就放个人形图-->
          <img :src="pessi" alt="证件照">
          <p>同学你好!</p>
        </div>
        <div class="post">
          <!--要和后端连接，判断是否有邮件进行显示，从这里还要求实现跳转到邮箱界面-->
        </div>
      </div>
      <div class="card animate__animated animate__backInDown animate__fast">
        <div class="Top_Bar">
          <p>功能集成</p>
        </div>
        <hr/>
        <div class="function">
          <div class="function_split" style="background-color: #DE868F" @click="goToPersonalMsg">
            <img :src="imgurl1" alt="个人信息图片"/>
            <p>个人信息</p>
          </div>
          <div class="function_split" style="background-color:#E99D42" @click="goToAccommodation">
            <img :src="imgurl2" alt="个人信息图片"/>
            <p>住宿安排</p>
          </div>
          <div class="function_split" style="background-color:#CCF783" @click="goToMsgQuery">
            <img :src="imgurl3" alt="个人信息图片"/>
            <p>信息查询</p>
          </div>
          <div class="function_split" style="background-color:#75F9FD; border-bottom-left-radius: 1vw"
               @click="goToCourseQuery">
            <img :src="imgurl4" alt="个人信息图片"/>
            <p>课程查询</p>
          </div>
          <div class="function_split" style="background-color:#CBA43F" @click="goToCourseRegister">
            <img :src="imgurl5" alt="个人信息图片"/>
            <p>课程注册</p>
          </div>
          <div class="function_split" style="background-color:#377F7F;border-bottom-right-radius: 1vw"
               @click="goToConsult">
            <img :src="imgurl6" alt="个人信息图片"/>
            <p>在线咨询</p>
          </div>
        </div>
      </div>
      <div class="card animate__animated animate__backInRight animate__fast">
        <div class="Top_Bar">
          <p>我的待办</p>
        </div>
        <hr/>
        <!--和后端连接，根据该同学有哪些东西还没完成，填到待办区，没有就写您没有待办事项(图片)-->
        <div>
          您没有待办
        </div>
      </div>
    </div>
    <div class="Bottom_line">
      <div class="Bottom_card1 animate__animated animate__backInLeft animate__fast">
        <div class="Bottom_Bar">
          <p>重大新闻</p>
        </div>
        <!--能导入真正的新闻页面最好-->
      </div>
      <div class="Bottom_card2 animate__animated animate__backInUp animate__fast">
        <div class="Bottom_Bar">
          <p>日程安排</p>
        </div>
        <hr/>
        <calendar/> <!-- 使用日历组件 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  /* 添加背景图片 */
  background-image: url('https://file.moyublog.com/d/file/2021-08-20/kn5pwulk50b.jpg');
  /* 设置背景图片的其他属性，如需要 */
  background-size: cover; /* 调整图片大小以覆盖整个容器 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 图片不重复 */
}

.first_line {
  width: 100%;
  height: 43%;
  justify-content: space-between;
  display: flex;
}

.Top_Bar {
  width: 100%;
  height: 13%;
  background-color: #4e7cd3;
  border-radius: 1vw 1vw 0 0;
}

.card {
  width: 30%;
  height: 100%;
  background-color: whitesmoke;
  margin: 0 1vw 1vw 1vw;
  border-radius: 1vw 1vw 1vw 1vw;
  opacity: 0.95 !important;
  transition: 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 10px #4e7cd3;
  }
}

.Bottom_line {
  margin-top: 1vw;
  width: 100%;
  height: 43%;
  display: flex;
  justify-content: space-between;
}

.Bottom_Bar {
  width: 100%;
  height: 13%;
  margin: 0 1vw 0 0;
  background-color: #4e7cd3;
  border-radius: 1vw 1vw 0 0;
}

.Bottom_card1 {
  width: 64%;
  height: 100%;
  background-color: whitesmoke;
  margin: 0 1vw 1vw 1vw;
  border-radius: 1vw 1vw 1vw 1vw;
  transition: 0.2s ease-in-out;
  opacity: 0.95 !important;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 10px #4e7cd3;
  }
}

.Bottom_card2 {
  width: 30%;
  height: 100%;
  background-color: whitesmoke;
  margin: 0 1vw 1vw 1vw;
  border-radius: 1vw 1vw 1vw 1vw;
  transition: 0.2s ease-in-out;
  opacity: 0.95 !important;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 10px #4e7cd3;
  }
}

/* 修改 .Top_Bar 内的 p 样式 */
.Top_Bar p,
.Bottom_card1 p,
.Bottom_card2 p {
  color: black;
  font-family: 'Noto Sans SC', sans-serif; /* 使用圆体字体 */
  font-weight: bold; /* 设置字体为黑体 */
  font-size: 4vmin;
  padding-left: 0.9vmin;
}


p {
  transition: 0.25s ease-in-out; /* 添加过渡效果 */
  text-shadow: 2px 2px 4px #a1d3e3; /* 添加阴影 */
}

/* 添加悬停效果 */
p:hover {
  color: white; /* 鼠标悬停时文本颜色变为白色 */
}

.picture {
  height: 46%;
  width: 93%;
  background-color: #409eff;
  border-radius: 2vmin;
  margin: 1vmin 2vmin 1vmin 2vmin;
  display: flex; /* 使用 flex 布局 */
}

.picture img {
  width: 35%; /* 图片最大宽度为容器宽度 */
  height: 90%; /* 图片最大高度为容器高度 */
  margin: 1vmin 0 1vmin 1vmin;
}

.post {
  height: 33%;
  width: 93%;
  background-color: #23C3A6;
  border-radius: 2vmin;
  margin: 1vmin 2vmin 1vmin 2vmin;
  text-align: center;
  font-size: 4vmin;
}

.function {
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  justify-content: space-between; /* 子元素之间留有空间 */
  align-items: flex-start; /* 对齐方式 */
  border-radius: 5vw;

}

.function_split {
  height: 46%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1vmin solid #ccc; /* 添加边框 */
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px #4e7cd3;
    scale: 1.01;
  }
}

.function_split p {
  font-size: 3vmin;
}

/* 定义一个类来控制图片的大小 */
.function_split img {
  width: 60%; /* 图片宽度为父容器的50% */
  height: auto; /* 自动保持原始宽高比 */
}
</style>