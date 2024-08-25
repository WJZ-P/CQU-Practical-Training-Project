<script setup>
import TeacherHeader from "@/components/TeacherHeader.vue";
import {onMounted, ref} from "vue";
import axios from "axios"
import {ElMessage} from "element-plus";

const selRoom=ref(["梅园一栋","1楼","101"])
// 创建示例数据
let plumBuildings = ref([
  {
    value: "梅园一栋",
    label: "梅园一栋",
    children: [
        // 1楼
      {
        value: '1楼',
        label: '1楼',
        children: [
          {
            value:101,
            label:101
          },
          {
            value:102,
            label:102
          },
          {
            value:103,
            label:103
          }
        ]
      },

      {
        value: '2楼',
        label: '2楼',
        children: [
          {
            value:201,
            label:201
          },
          {
            value:202,
            label:202
          },
          {
            value:203,
            label:203
          }
        ]
      },

      {
        value: '3楼',
        label: '3楼',
        children: [
          {
            value:301,
            label:301
          },
          {
            value:302,
            label:302
          },
          {
            value:303,
            label:303
          }
        ]

      }
    ]
  },
  {
    value: "梅园二栋",
    label: "梅园二栋",
    children: [
      // 1楼
      {
        value: '1楼',
        label: '1楼',
        children: [
          {
            value:101,
            label:101
          },
          {
            value:102,
            label:102
          },
          {
            value:103,
            label:103
          }
        ]
      },

      {
        value: '2楼',
        label: '2楼',
        children: [
          {
            value:201,
            label:201
          },
          {
            value:202,
            label:202
          },
          {
            value:203,
            label:203
          }
        ]
      },

      {
        value: '3楼',
        label: '3楼',
        children: [
          {
            value:301,
            label:301
          },
          {
            value:302,
            label:302
          },
          {
            value:303,
            label:303
          }
        ]

      }
    ]
  }
  // 其他宿舍楼...
]
)

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
  axios.post('http://127.0.0.1:8080/queryDorm',{category:"A"})
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
  <TeacherHeader title="梅园介绍" />
<!--  最外部容器-->
  <div class="container">
    <div class="dorm-intro">
      <h2>梅园宿舍简介</h2>
      <br/>
      <p>
            梅园作为校园中的一处静谧之地，坐落在学校东北角，其地理位置得天独厚，不仅紧邻图书馆和教学楼，方便学生在学习与生活之间自由切换，
        而且周围环境优雅宁静，为学子们提供了一个理想的学习生活环境。梅园宿舍楼共六层，每一层都设计了独立的公共休息室和自习区，这不仅
        有助于同学们在紧张的学习之余放松身心，还能促进同学间的交流与合作。
        </p><br/>
      <p>
        梅园的建筑设计充分考虑了学生的实际需求，宿舍内部设施齐全，每间宿舍均配备了基本的生活设施，如床铺、书桌、衣柜等，并且有良好的
        采光和通风条件。为了让学生们能够拥有更好的居住体验，每层楼还特别设置了洗衣机和烘干机，方便大家日常洗衣。此外，公共休息室内配
        备了舒适的沙发、茶几以及电视等娱乐设施，使得学生们可以在闲暇时刻放松心情，观看喜爱的节目或与室友一起玩桌游。
    </p><br/>
      <p>
        而自习区则布置得井然有序，配备了足够的电源插座和无线网络覆盖，确保每位同学都能享受到高效的学习时光。同时，这里也是小组讨论的
        好去处，促进了学术上的交流与思想碰撞。宿舍楼内还设有自动售货机和微波炉等便捷设施，满足了学生们的日常生活需求。
      </p><br/><p>
        值得一提的是，梅园周边绿化丰富，种植了许多梅花树，每当冬春之交，梅花盛开，整个园区被一片花香包围，成为校园里一道亮丽的风景线。
        这样的环境不仅有利于提升学生的生活品质，也有助于培养他们对自然美的欣赏能力。此外，梅园与图书馆、教学楼的距离适中，步行即可轻
        松到达，这无疑大大提高了学生们的时间利用效率，让他们可以更加专注于学业和个人发展。
    </p><br/><p>
        总体来说，梅园以其优越的地理位置、完善的配套设施以及温馨的居住环境，成为了校园内最受学生欢迎的住宿选择之一。
      </p>
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
<!--      此处的submit是提交的函数而非类名-->
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