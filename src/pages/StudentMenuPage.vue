<script setup>
import calendar from '@/components/calendar.vue';     // 导入日历组件
import imgurl1 from "@/students/StuChildren/picture/个人信息.svg";
import imgurl2 from "@/students/StuChildren/picture/住宿安排.svg";
import imgurl3 from "@/students/StuChildren/picture/信息查询.svg";
import imgurl4 from "@/students/StuChildren/picture/课程查询.svg";
import imgurl5 from "@/students/StuChildren/picture/课程注册.svg";
import imgurl6 from "@/students/StuChildren/picture/在线咨询.svg";
import pessi from "@/students/StuChildren/picture/证件照.jpg";
import {useRouter} from "vue-router";
import Header from "@/components/Header.vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

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
  router.push('/StudentMenu/consult')
}


const rotation = [
  {
    link: 'https://news.cqu.edu.cn/archives/xynews/content/2023/11/23/e653a09e206cfd1601ac727b79fa6844cd3d167f.html',
    image: '/src/students/StuChildren/picture/材料学院.jpg',
    date: '11/23',
    content: '2023年11月23日下午，材料学院在材料楼212报告厅举行了“材料强国·薪火相传”国家奖学金获得者经验分享会。本次交流会邀请到学院五位国家奖学金获得者给本科生进行学习经验分享。本次分享会由兼职辅导员姜涛主持。',
    linkContent: '材料学院开展“材料强国·薪火相传”国家奖学金获得者经验分享会'
  },
  {
    link: 'https://news.cqu.edu.cn/archives/xynews/content/2023/11/19/9ce2a3c90e4f2447b8bada1e3e57ae020bb89e31.html',
    image: '/src/students/StuChildren/picture/运动会.jpg',
    date: '11/19',
    content: '11月19日下午重庆大学第九届研究生趣味运动会在虎溪校区大足球场举行，来自重庆大学二十八个学院的研究生团体参加了这次活动。本次趣味运动会以“青春之约，趣动研途”为主题，通过新颖有趣的运动项目，旨在激发广大研究生参与体育活动的热情，尽情地享受校园生活。最终化学化工学院总积分排名第二，获得二等奖。',
    linkContent: '化学化工学院在重庆大学第九届研究生趣味运动会中荣获二等奖'
  },
  {
    link: 'https://news.cqu.edu.cn/archives/xynews/content/2023/11/19/ae54178d8a9d822cb7b6688abc94d97620496082.html',
    image: '/src/students/StuChildren/picture/法学院.jpg',
    date: '11/19',
    content: '11月19日上午，法学院联合虎溪校区管委会舍区教育公民意识培养项目组举办了主题为“法进虎溪，援梦未来”的特色普法活动。本次活动由法学院本科第三党支部、法学院法援中心红岩党支部、重庆大学学生法律援助中心、学生模拟法庭协会共同承办，共有20余名法学院志愿者参加了活动。',
    linkContent: '法学院开展“法进虎溪，援梦未来”专题普法活动'
  },
  {
    link: 'https://news.cqu.edu.cn/archives/xynews/content/2023/11/18/8e49e2b525de8f293ce9bf7116d6ba370646d861.html',
    image: 'https://news.cqu.edu.cn/uploadfile/2023/1120/20231120093851565.png',
    date: '11/18',
    content: '2023年11月18日下午，经管创客谈第29期保研分享会在A5204教室举行。本次分享会邀请了曹昕瑶、陈鹤和杨静三位保研“学霸”。',
    linkContent: '经管创客谈第29期保研分享会举行'
  }
  // 其他项类似...
]

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

const warnings = ref({
  dorm: '',
  course: '',
  account: ''
});

const fetchTaskData = async () => {
  try {
    const config = {
      headers: {
        'Authorization': localStorage.getItem('cqu-jwt')
      }
    };
    const response = await axios.get(`http://127.0.0.1:8080/menu`, config);
    const data = response.data.data;
    warnings.value.dorm = data.selectDorm ? null : '您还没有选择宿舍';
    warnings.value.course = data.selectCourse ? null : '您还没有注册课程';
    warnings.value.account = data.suppleAccount ? null : '您还没有补充信息';

    console.log("任务状态获取成功:", data);
    ElMessage.success("成功获取任务状态信息");
  } catch (error) {
    console.error('获取任务状态失败:', error);
    ElMessage.error("获取任务状态失败，请检查您的网络连接或稍后再试。");
  }
};


onBeforeMount(() => {
  fetchTaskData();//获取待办事项
  const myConfig = {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }
  axios.get('http://127.0.0.1:8080/queryAccount', myConfig).then(res => {
    console.log(res.data.data)
    formData.value = res.data.data


  })
})
</script>

<template>
  <div class="container">
    <Header title="学生首页"/>
    <div class="first_line animate__animated animate__backInDown">
      <div class="card">
        <div class="Top_Bar">
          <p>用户名片</p>
        </div>
        <hr/>
        <div class="picture" style="font-size: 5vmin;  font-weight: bold;  align-items: center">
          <!--要和后端连接，根据上传照片与否决定是否显示，不显示就放个人形图-->
          <img :src="formData.imgString" alt="证件照"/>
          <div style="display: flex">
            <h5 style="text-align: center">{{ formData.name }}同学<br>你好！</h5>
          </div>
        </div>
        <div class="post">
          <p style="font-size: 2.5vmin;text-align: left">基本信息：</p>
          <div>
            <p style="font-size: 3vmin;text-align: center">学院：{{ formData.department }}</p>
            <p style="font-size: 3vmin;text-align: center">学号：{{ formData.stuId }}</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="Top_Bar">
          <RouterLink to="/StudentMenu/msgQuery" style="text-decoration: none;color: black">
            <p>功能集成</p>
          </RouterLink>
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
            <p>教师查询</p>
          </div>
          <div class="function_split" style="background-color:#75F9FD;border-bottom-left-radius: 1vw"
               @click="goToCourseQuery">
            <img :src="imgurl4" alt="个人信息图片"/>
            <p>课程查询</p>
          </div>
          <div class="function_split" style="background-color:#CBA43F;" @click="goToCourseRegister">
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
      <div class="card">
        <div class="Top_Bar">
          <p>我的待办</p>
        </div>
        <hr/>
        <!--和后端连接，根据该同学有哪些东西还没完成，填到待办区，没有就写您没有待办事项(图片)-->
        <div class="task-reminders">
          <div class="reminder-box" v-if="warnings.dorm">
            <p>{{ warnings.dorm }}</p>
          </div>
          <div class="reminder-box" v-if="warnings.course">
            <p>{{ warnings.course }}</p>
          </div>
          <div class="reminder-box" v-if="warnings.account">
            <p>{{ warnings.account }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="Bottom_line animate__animated animate__backInUp">
      <div class="Bottom_card1">

        <div class="Bottom_Bar">
          <p>校园新闻</p>
        </div>
        <el-carousel trigger="click" height="40vmin" :arrow="always" style="width:100%">
          <el-carousel-item v-for="item in rotation" :key="item.id">
            <div class="item">
              <div class="media">
                <img class="news-img" :src="item.image" alt="描述文字">
              </div>
              <div class="content">
                <div class="rdate">
                  {{ item.date }}
                </div>
                <div class="title">
                  <a :href="item.link">{{ item.linkContent }}</a>
                </div>
                <div class="abstract">
                  {{ item.content }}
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </el-carousel-item>
        </el-carousel>

      </div>

      <div class="Bottom_card2">
        <RouterLink to="/StudentMenu/academicCalendar" style="text-decoration: none;color: black">
          <div class="Bottom_Bar">
            <p>日程安排</p>
          </div>
          <hr/>
          <calendar/> <!-- 使用日历组件 -->

        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  /* 添加背景图片 */
  background-image: url('/src/students/StuChildren/picture/kn5pwulk50b.webp');
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
  background-color: cornflowerblue;
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
  justify-content: center;
  align-items: center;

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
  flex-wrap: wrap;
}

.Bottom_Bar {
  width: 100%;
  height: 13%;
  margin: 0 1vw 0 0;
  background-color: cornflowerblue;
  border-radius: 1vw 1vw 0 0;
}

.Bottom_card1 {
  width: 64%;
  height: 100%;
  background-color: powderblue;
  margin: 0 1vw 1vw 1vw;
  border-radius: 1vw 1vw 1vw 1vw;
  transition: 0.2s ease-in-out;
  opacity: 0.95 !important;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 10px #4e7cd3;
  }
}

.item {
  display: flex;
  align-items: flex-start;
  /* 使用 gap 来控制子元素之间的间距 */
  gap: 1rem;
  width: 100%;
}

.media {
  width: 60%;
  height: 40%
}

.media img {
  /* 设置图片宽度以适应容器 */
  width: 90%;
  /* 高度自动调整以保持比例 */
  height: 90%;
  border-radius: 0 0 0 1vmin;
}

.content {
  /* 如果需要文字部分的宽度固定 */
  flex: 12;
  /* 控制文字部分的内边距 */
  padding: 0.5rem;
}

.rdate {
  width: fit-content;
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 2.5vmin;
  border: 5px solid #2c5d9f;
  padding: 5px;
  border-radius: 10px;
}

.title,
.abstract {
  /* 控制文字部分的行高和间距 */
  margin-top: 1vmin;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-size: 2vmin;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.Bottom_card2 {
  width: 30%;
  height: 100%;
  background-color: whitesmoke;
  margin: 0 1vw 1vw 1vw;
  border-radius: 1vw 1vw 1vw 1vw;
  display: flex;
  flex-direction: column;
  opacity: 0.95 !important;
  transition: 0.2s ease-in-out;

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
  font-size: 3.5vmin;
  padding-left: 0.9vmin;
  opacity: 0.95 !important;
  transition: 0.2s ease-in-out;

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 10px #4e7cd3;
  }
}

/* 添加悬停效果 */
p:hover {
  transition: 0.2s ease-in-out;
  color: white; /* 鼠标悬停时文本颜色变为白色 */
}

.picture {
  height: 46%;
  background-color: #409eff;
  border-radius: 2vmin;
  margin: 1vmin 2vmin 1vmin 2vmin;
  display: flex; /* 使用 flex 布局 */
  justify-content: space-around;
}

.picture img {
  width: 35%; /* 图片最大宽度为容器宽度 */
  height: 90%; /* 图片最大高度为容器高度 */
  margin: 1vmin 0 1vmin 1vmin;
}

.post {
  height: 33%;
  background-color: #23C3A6;
  border-radius: 2vmin;
  margin: 1vmin 2vmin 1vmin 2vmin;
  text-align: center;
  font-size: 4vmin;
  padding: 15px;
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

/*待办*/
.task-reminders {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.reminder-box {
  display: flex;
  justify-content: center;
  border: 3px solid #84d5e0;
  font-size: 3.3vmin;
  padding: 1vmin;
  margin: 2vmin;
  width: 90%;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 1vmin;
  box-shadow: 0 0 5px #56cbd0;
}

a {
  text-decoration: none;
}

.news-img{
  width: 100%!important;
  height: 100%;
}
</style>