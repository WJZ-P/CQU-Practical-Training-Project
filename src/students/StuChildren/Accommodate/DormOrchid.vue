<script setup>
import TeacherHeader from "@/components/Header.vue";
import {onMounted, ref} from "vue";
import axios from "axios"
import {ElMessage} from "element-plus";

const selRoom=ref(["兰园一栋","1楼","101"])
// 创建示例数据
let plumBuildings = ref(null)

const submitDorm = async () => {
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
  try {
    const config = {
      headers: {
        'Authorization': localStorage.getItem('cqu-jwt')
      }
    }
    axios.post(`http://127.0.0.1:8080/queryDorm`, {category:"A"}, config)
    .then(response => {
      console.log(response.data.data);
      plumBuildings.value = response.data.data;
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
  <TeacherHeader title="兰园介绍" />
  <!--  最外部容器-->
  <div class="container">
    <div class="dorm-intro">
      <h2>兰园宿舍简介</h2>
      <br/>
      <p>
      木桌，圆窗，白墙，花束，绿植，灯光，沙发，靠枕，以及层层叠叠的书籍——2020年11月11日，由虎溪管委会装修，
      图书馆负责运营的兰园书屋“蕙风斋”正式开放了。它位于兰园三栋一层，室内面积约150平方米，可容纳50余人就坐
      开放时间为周一至周日9:00—22：00，周四下午12：00—18：00闭馆。
      </p><br/><p>
      驻足于其外，已然能窥得其建筑之美。欧式半圆落地窗整齐排列，屋内布置被白色窗帘掩映着，若在夜晚望去，还有明
      亮的灯光浮动沁出，驱散了寒冬的暗。
      </p><br/>
      步入书屋内，扑面而来的是温润书香，以及浓厚的读书氛围。蕙风斋目前藏书4700余册，藏书类型以文学、哲学、历史、
      地理类为主，还配有自助借还书系统。层层书本放置于木质书架上，书架镶于拱形镂空的白墙之中，白墙沿着深灰色阶梯
      错落有致地排开。书屋整体风格简约大气，“下晚自习之后来逛了一下，进去之后就呆住了，感觉像在宫殿里！”2020级化
      工学院的周同学这样形容。
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