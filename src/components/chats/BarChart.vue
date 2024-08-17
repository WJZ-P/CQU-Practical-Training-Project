<script setup>
// import echarts from "@vitejs/plugin-vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import * as echarts from 'echarts';
import {debounce} from "@/Utils/debounce.js";

let chart = undefined
let zoomRatio = 0.4

function initChart() {
  chart = echarts.init(document.getElementById('bar-chart'));

  const option = {
    title: {
      text: '宿舍入住情况',
      subtext: '2024年8月份',
      textStyle: {
        color: '#ffffff',
        fontSize: 18
      },
      subtextStyle: {
        color: '#e1efee',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['入住人数', '剩余床位'],
      textStyle: {
        color: '#ffffff',
        fontSize: 18
      }
    },
    xAxis: {
      data: ['一号楼', '二号楼', '三号楼', '四号楼', '五号楼'],
      axisLabel: {
        color: '#ffffff'
      }
    },
    yAxis: {
      axisLabel: {
        color: '#ffffff'
      }
    },
    series: [
      {
        name: '入住人数',
        type: 'bar',
        stack: '嘻嘻',
        data: [121, 202, 250, 195, 164],
        itemStyle: {
          color: '#87d3ff'
        },
        label: {
          show: true,
          position: 'inside',
          color: '#fff',
          fontSize: 15
        }
      },
      {
        name: '剩余床位',
        type: 'bar',
        stack: '哈哈',
        data: [100, 150, 101, 154, 138],
        itemStyle: {
          color: '#049aee' // 设置利润条形颜色
        },
        label: {
          show: true,
          position: 'inside',
          color: '#fff',
          fontSize: 15
        }
      }
    ]
  };

  chart.setOption(option);//应用图画设置
}


let windowWidth = ref(Math.round(window.innerWidth * zoomRatio) + 'px')
let windowHeight = ref('1080px')




//重新渲染条形统计图
function resizeChart() {
  debounce(chart.resize, 100, 'bar-chart')
}

const listener = () => {
  windowWidth.value = Math.round(window.innerWidth * zoomRatio) + 'px';
  windowHeight.value = window.innerHeight + 'px'
  resizeChart()//重新渲染条形统计图
}
onMounted(() => {
  initChart();
  window.addEventListener('resize', listener)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', listener);
})

</script>

<template>
  <div class="bar-chart-div">
    <div>
      <div id="bar-chart" ref="chart"></div>
    </div>
  </div>
</template>

<style>
.bar-chart-div {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
}

#bar-chart {
  height: 300px;
  width: v-bind(windowWidth);
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 15px 0 0 0;
}
</style>