<script setup>
import TeacherHeader from "@/components/Header.vue";
import {onMounted, ref} from "vue";
import axios from "axios"
import {ElMessage} from "element-plus";

const selRoom=ref(["竹园一栋","1楼","101"])
// 创建示例数据
let plumBuildings = ref(null)

const submitDorm = async () => {
  try {
    const config = {
      headers: {
        'Authorization': localStorage.getItem('cqu-jwt')
      }
    }
    const response = await axios.post('http://127.0.0.1:8080/selectDorm', {
      buildingId: selRoom.value[0],
      floor: selRoom.value[1],
      roomNum: selRoom.value[2]
    },config);
    console.log(response.data);
    ElMessage.success(response.data.msg);
  } catch (error) {
    console.error("提交失败:", error);
    ElMessage.error("提交失败，请检查您的网络连接或稍后再试。");
  }
}

// 在 created 生命周期钩子中获取数据
function created(){
  fetchData();
}
function fetchData(){
  try {
    const config = {
      headers: {
        'Authorization': localStorage.getItem('cqu-jwt')
      }
    }
    axios.post(`http://127.0.0.1:8080/queryDorm`, {category:"C"}, config)
    .then(response => {
      console.log(response.data.data);
      plumBuildings.value = response.data.data;
      ElMessage.success("成功获取宿舍空房间信息");
    })
  } catch(error) {
    console.error('获取数据失败:', error);
    ElMessage.error("获取数据失败，请检查您的网络连接或稍后再试。");
  }
}

// 进入组件时加载数据
onMounted(()=>{
  created()
})

</script>

<template>
  <TeacherHeader title="竹园介绍" />
  <!--  最外部容器-->
  <div class="container">
    <div class="dorm-intro">
      <h2>竹园宿舍简介</h2>
      <br/>
      <p>
        重庆大学虎溪校区竹园宿舍位于校园内，是本科生居住的主要宿舍区之一。竹园以其优雅的环境和完善的设施著称，宿舍区内的
        建筑布局合理，绿树环绕，营造出宁静舒适的居住氛围。宿舍楼提供标准的四人间住宿，每间宿舍均配备有独立的卫生间、空调、
        电扇以及热水器，保证了学生的日常生活需求。此外，宿舍内部还设有书桌、衣柜等基本家具，便于学生学习与存放个人物品。
      </p><br/><p>
      尽管从过往的信息中得知竹园曾有一些设施上的问题，比如衣柜的霉点、天花板的清洁度及卫生间的整洁情况等，但这些问题应
      该是局部的，并且随着时间的推移，学校方面应该会持续改善和维护宿舍的条件。重庆大学作为一个重视学生生活的高等学府，一
      直致力于提升住宿质量，因此竹园宿舍的整体状况应当是令人满意的。
    </p><br/><p>
      在竹园居住的学生们不仅能够享受到便利的生活设施，还能体验到丰富多彩的校园文化活动。宿舍区附近还有学生活动室，可供
      学生们休闲娱乐和组织各类活动。总之，竹园宿舍为重庆大学虎溪校区的学生提供了一个温馨舒适的学习生活环境。
    </p>
    </div>
    <!--存放选择楼栋数据的大盒子-->
    <div class="buildings">
      <!--设置级联菜单-->
      <el-cascader-panel :options="plumBuildings" v-model="selRoom"/>
    </div>
    <!--设置提交按钮以及当前所选寝室所在的盒子-->
    <div class = "submit-box">
      <p class="currRoom">当前已选宿舍：
        {{selRoom[0]+selRoom[1]+selRoom[2]}}
      </p>
      <!--此处的submit是提交的函数而非类名-->
      <button @click="submitDorm">提交申请</button>
    </div>
    <div>
    </div>
  </div>

</template>

<style scoped>
p {
  text-indent: 2em; /* 设置缩进距离为2个字母的宽度 */
  font-size: 1vw;
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
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  overflow: auto;
  overflow-x: hidden;
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

.submit-box{
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