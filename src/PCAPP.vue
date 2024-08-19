<script setup>
import Header from "@/components/Header.vue";
import Section from "@/components/Section.vue";
import Card from "@/components/UtilsComponnet/Card.vue"
import PieChart from "@/components/chats/PieChart.vue";
import TimeCountDown from "@/components/UtilsComponnet/TimeCountDown.vue";
import BarChart from "@/components/chats/BarChart.vue";
import LineChart from "@/components/chats/LineChart.vue";
import {onMounted} from "vue";
import {debounce} from "@/Utils/debounce.js";

const config = {
  reportedNumToday: 311,//已注册人数
  reportedNumAll: 114514,//未注册人数
  reportTimeLimited: "2024-09-01T12:30:00+08:00",//注册的最终时间设置
  numStayedAtSchool: 3048,//住校人数
  numBedTotal: 3145,//宿舍床位总数
  numBedRest: 111,//宿舍床位剩余
  numBedUsing: 3145 - 111,//宿舍床位使用
}

//监听窗口变化更改字体大小，用于Rem布局
const baseFont = 10;//基准字体大小
onMounted(() => {
  window.addEventListener('resize', () => {
    debounce(() => {
      const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      document.documentElement.style.fontStyle = Math.round(baseFont * scale) + 'px'
      //console.log(Math.round(baseFont * scale) + 'px')
    }, 100, 'font-changer')
  })
})

</script>

<template>
  <!--APP组件-->
  <div class="app">
    <Header/>
    <!--    第一部分-->
    <div style="display: flex">
      <!--        左半边-->
      <div class="part1">
        <Section>

          <Card>
            <div class="text-div">
              <h2>今日已报道</h2>
              <h1>1145人</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>当前批次已报道</h2>
              <h1>114514人</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>报道已开始</h2>
              <h1>4 天</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>报道截至剩余</h2>
              <TimeCountDown time-limit="2024-09-01T12:30:00+08:00"/>
            </div>
          </Card>

          <!--          导入饼状图-->
          <Card style="width: 100%;height: 350px;">
            <PieChart/>
          </Card>

        </Section>
      </div>
      <!--      右半边-->

      <div class="part2">
        <Section>
          <Card>
            <div class="text-div">
              <h2>住校人数</h2>
              <h1>{{ config.numStayedAtSchool }}人</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>宿舍床位入住</h2>
              <h1>{{ config.numBedUsing }}人</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>宿舍床位总数</h2>
              <h1>{{ config.numBedTotal }}床</h1>
            </div>
          </Card>

          <Card>
            <div class="text-div">
              <h2>宿舍床位剩余</h2>
              <h1>{{ config.numBedRest }}人</h1>
            </div>
          </Card>

          <Card style="width: 100%;height: 350px;">
            <BarChart/>
          </Card>
        </Section>
      </div>
    </div>

    <!--    下面是第二部分,一个大型的折线统计图-->
    <div class="part3">
      <Section>
        <Card style="width:100%; height: 400px">
          <LineChart/>
        </Card>
      </Section>
    </div>
  </div>
        <RouterLink to="/AndroidApp">
          <button>点我跳转到移动端</button>
        </RouterLink>
</template>

<style scoped>
.app {
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.part1 {
  display: flex;
  width: 50%;
  margin: 10px 5px 10px 10px;
}

.part2 {
  display: flex;
  width: 50%;
  margin: 10px 10px 10px 5px
}

.part3 {
  display: flex;
  flex-direction: column;
  margin: 10px
}

.text-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  padding: 0;
  margin: 0;
}
</style>