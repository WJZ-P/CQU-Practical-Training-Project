<script setup>
import TeacherHeader from "@/components/TeacherHeader.vue";
import {onMounted, ref} from "vue";
import axios from "axios"
import {ElMessage} from "element-plus";

const selRoom=ref(["菊园一栋","1楼","101"])
// 创建示例数据
let plumBuildings = ref(null)

const submit = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8080/selectDorm', {
      building_Id: selRoom.value[0],
      floor: selRoom.value[1],
      room_num: selRoom.value[2]
    });
    console.log(response.data);
    ElMessage.success("已提交申请");
  } catch (error) {
    console.error("提交失败:", error);
    if (error.response.status === 422) {
      ElMessage.error("提交失败，你已经有宿舍了。");
    }
    else{
      ElMessage.error("提交失败，请检查您的网络连接或稍后再试。");
    }
  }
}
// 在 created 生命周期钩子中获取数据
function created(){
  fetchData();
}
function fetchData(){
  axios.post('http://127.0.0.1:8080/queryDorm',{category:"D"})
      .then(response => {
        console.log(response.data.data);
        plumBuildings.value = response.data.data;
      })
      .catch(error => {
        console.error('获取数据失败:', error);
        ElMessage.error("获取数据失败，请检查您的网络连接或稍后再试。");
      });
}

// 进入组件时加载数据
onMounted(()=>{
  created()
})

</script>

<template>
  <TeacherHeader title="菊园介绍" />
  <!--  最外部容器-->
  <div class="container">
    <div class="dorm-intro">
      <h2>菊园宿舍简介</h2>
      <br/>
      <p>
        重庆大学虎溪校区的竹园宿舍区，专门为博士生提供了一个宁静而充满学术气息的居住环境。竹园宿舍坐落于风景优美的虎溪校区内，周围
        被郁郁葱葱的竹林所环绕，既体现了中国传统园林之美，又为学子们提供了一个远离喧嚣的理想居所。博士生宿舍的设计充分考虑到了研究
        生阶段的特点，旨在为学术研究创造最适宜的条件。
      </p><br/><p>
      宿舍楼内部采用现代化装修风格，每间宿舍都配备了先进的设施，如高速互联网接入、独立卫浴、空调系统等，确保了居住的舒适性。宽敞明
      亮的居住空间不仅适合日常休息，也为博士生们提供了良好的个人工作区域，便于他们进行学术研究和个人项目的开发。
    </p><br/>
      除了基本的生活设施外，竹园宿舍区还设有专门的学习交流空间，如小型研讨室、图书角等，鼓励博士生之间的学术交流与合作。此外，宿舍
      区内还配有健身房、洗衣房等生活设施，极大地便利了学生的日常生活。为了丰富博士生们的课余生活，竹园还定期举办各种文化活动和社会
      实践活动，促进了学生之间的互动与交流。
    </div>
    <!--存放选择楼栋数据的大盒子-->
    <div class="buildings">
      <!--设置级联菜单-->
      <el-cascader-panel :options="plumBuildings" v-model="selRoom"/>
    </div>
    <!--设置提交按钮以及当前所选寝室所在的盒子-->
    <div class = "submit">
      <p class="currRoom">当前已选宿舍：
        {{selRoom[0]+selRoom[1]+selRoom[2]}}
      </p>
      <!--此处的submit是提交的函数而非类名-->
      <button @click="submit">提交申请</button>
    </div>
    <div>
    </div>
  </div>

</template>

<style scoped>
p {
  text-indent: 2em; /* 设置缩进距离为2个字母的宽度 */
}

.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("PlumBG.jpg");
  background-size: cover;
}

.dorm-intro {
  clear: both;
  width: 60%;
  height: 50%;
  overflow: hidden;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
}

.buildings{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  width: fit-content;
  height: fit-content;
  opacity: 0.9;
  background-color: white;
  border-radius: 30px;
  border:none;
  padding:20px;
}

.submit{
  display: flex;
  flex-wrap: nowrap;
  margin-top: 2%;
  width: 30vw;
  height: fit-content;
  padding: 16px;
  background-color: white;
  opacity: 0.9;
  border-radius: 30px;
  border:none;
  align-items: center;
  justify-content: center;
}

button{
  margin-left: 5%;
  align-items: center;
  justify-content: center;
  width: 6vw;
  height: 2vw;
  background-color: #4796ee;
  border-radius: 20px;
  border:none;
  font-size:1vw;
  color:white;
  transition: 0.2s ease;
  cursor: pointer;
}

button:hover{
  background-color: #4040d3;
}

button:active{
  scale: 1.05;
}
</style>