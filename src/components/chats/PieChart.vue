<script setup>
// import echarts from "@vitejs/plugin-vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import * as echarts from 'echarts';
import {debounce} from "@/Utils/debounce.js";


let chart = undefined
let zoomRatio = 0.4

function initChart() {
  chart = echarts.init(document.getElementById('pie-chart'));

  const option = {
    title: {
      text: '学校报到情况',
      left: 'center',
      textStyle: {
        color: '#ffffff', // 设置标题的颜色为红色
        font: 30 // 设置标题字体大小
      }
    },
    tooltip: {
      trigger: 'item'
    },
    label: {
      show: true,
      formatter: '{b}: {d}%', // 显示百分比
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: '#ffffff', // 设置图例的颜色为红色
        font: 30 // 设置图例字体大小
      }
    },
    series: [
      {
        name: '数据',
        type: 'pie',
        radius: '80%',
        data: [
          {value: 1314, name: '已报道', itemStyle: {color: '#1593ec'}},
          {value: 1686, name: '未报道', itemStyle: {color: '#7bc0ef'}}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        center: ['50%', '55%']
      }
    ]
  };

  chart.setOption(option);//应用图画设置
}


let windowWidth = ref(Math.round(window.innerWidth * zoomRatio) + 'px')
let windowHeight = ref('1080px')//高度不需要自适应，由css决定，此处无用


//重新渲染饼图
function resizeChart() {
  debounce(chart.resize, 100, 'pie-chart')
}

const listener = () => {
  windowWidth.value = Math.round(window.innerWidth * zoomRatio) + 'px';
  windowHeight.value = window.innerHeight + 'px'
  resizeChart()//重新渲染饼图
}

onMounted(() => {
  initChart();//此处调用后会渲染饼图
  window.addEventListener('resize', listener)
})


onBeforeUnmount(() => {
  window.removeEventListener('resize', listener);
})

</script>

<template>
  <div class="pie-chart-div">
    <div>
      <div id="pie-chart" ref="chart"></div>
    </div>
  </div>
</template>

<style>
.pie-chart-div {
  display: flex !important;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px;
}

#pie-chart {
  height: 300px;
  width: v-bind(windowWidth);
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 5px;
  margin-right: 20px;
}
</style>