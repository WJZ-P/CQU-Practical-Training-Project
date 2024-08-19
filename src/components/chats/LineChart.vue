<script setup>
// import echarts from "@vitejs/plugin-vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import * as echarts from 'echarts';
import {debounce} from "@/Utils/debounce.js";

let chart = undefined
let zoomRatio = 0.9

function initChart() {
  chart = echarts.init(document.getElementById('line-chart'));

  const option = {
    title: {
      text: '新生报道人数趋势图',
      subtext: '线上注册和线下注册',
      left: 'center',
      textStyle: {
        color: '#ffffff',
        fontSize: 30
      },
      subtextStyle: {
        color: '#ffffff',
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#ffffff'
        }
      }
    },
    legend: {
      data: ['线下注册人数', '线上注册人数'],
      left: 'right',
      textStyle: {
        color: '#ffffff', // 设置图例的颜色为红色
        font: 30 // 设置图例字体大小
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2024-08-09', '2024-08-10', '2024-08-11', '2024-08-12', '2024-08-13', '2024-08-14'],
      axisLabel: {
        color: '#ffffff'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#ffffff'
      }
    },
    series: [
      {
        name: '线下注册人数',
        type: 'line',
        stack: 'Total',
        data: [50, 41, 42, 32, 15, 60],
        itemStyle: {
          color: '#409EFF' // 设置现场报名折线颜色
        },
        areaStyle: {
          color: '#3eb0e3',
          opacity: 0.3
        }
      },
      {
        name: '线上注册人数',
        type: 'line',
        stack: 'Total',
        data: [15, 25, 35, 45, 55, 65],
        itemStyle: {
          color: '#1fd8e8' // 设置线上报名折线颜色
        },
        areaStyle: {
          color: '#2ee3dc',
          opacity: 0.3
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
  debounce(chart.resize, 100, 'line-chart')
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
  <div class="line-chart-div">
    <div>
      <div id="line-chart" ref="chart"></div>
    </div>
  </div>
</template>

<style>
.line-chart-div {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
}

#line-chart {
  height: 300px;
  width: v-bind(windowWidth);
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 15px 0 0 0;
}
</style>