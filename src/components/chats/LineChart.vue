<script setup>
// import echarts from "@vitejs/plugin-vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import * as echarts from 'echarts';
import {debounce} from "@/Utils/debounce.js";

let chart = undefined
let zoomRatio=0.9

function initChart() {
  chart = echarts.init(document.getElementById('line-chart'));

  const option = {
    title: {
      text: 'New Student Registration Trend',
      subtext: 'On-site and Online Registration',
      left: 'center',
      textStyle: {
        color: '#333',
        fontSize: 18
      },
      subtextStyle: {
        color: '#666',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['On-site Registration', 'Online Registration'],
      left: 'right'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2022-05-29', '2022-05-30', '2022-05-31', '2022-06-01', '2022-06-02', '2022-06-03'],
      axisLabel: {
        color: '#333'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#333'
      }
    },
    series: [
      {
        name: 'On-site Registration',
        type: 'line',
        stack: 'Total',
        data: [10, 20, 30, 40, 50, 60],
        itemStyle: {
          color: '#409EFF' // 设置现场报名折线颜色
        },
        areaStyle: {
          color: '#409EFF',
          opacity: 0.3
        }
      },
      {
        name: 'Online Registration',
        type: 'line',
        stack: 'Total',
        data: [15, 25, 35, 45, 55, 65],
        itemStyle: {
          color: '#67C23A' // 设置线上报名折线颜色
        },
        areaStyle: {
          color: '#67C23A',
          opacity: 0.3
        }
      }
    ]
  };

  chart.setOption(option);//应用图画设置
}




let windowWidth = ref(Math.round(window.innerWidth * zoomRatio) + 'px')
let windowHeight = ref('1080px')

window.addEventListener('resize', function () {
  windowWidth.value = Math.round(window.innerWidth * zoomRatio) + 'px';
  windowHeight.value = window.innerHeight + 'px'
  resizeChart()//重新渲染条形统计图
})


//重新渲染条形统计图
function resizeChart() {
  debounce(chart.resize, 100)
}


onMounted(() => {
  initChart();
})


onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);
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