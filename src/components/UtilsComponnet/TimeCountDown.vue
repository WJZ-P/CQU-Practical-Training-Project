<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const props = defineProps({
  timeLimit: String//这里传入的是ISO8601格式字符串，如'2023-10-01T12:34:56+08:00'
})

function countDown(endTime) {
  const beginDate = new Date();//设置开始时间，也就是当前时间
  const endDate = new Date(endTime);
  const diff = endDate.getTime() - beginDate.getTime();
  //这里计算如果是负数的处理
  const sec = diff < 0 ? (Math.abs(diff / 1000)) * -1 : diff / 1000;
  return formateTime(sec);
}

function formateTime(times) {
  let time = Math.abs(times);
  // 计算天数
  const days = parseInt(time / (24 * 3600));
  time %= (24 * 3600); // 剩余的时间
  // 计算小时
  const h = parseInt(time / 3600);
  time %= 3600; // 剩余的时间
  // 计算分钟
  const minute = parseInt(time / 60 % 60);
  // 计算秒
  const second = Math.ceil(time % 60);
  // 格式化时间
  const formatSecond = second > 59 ? 59 : second;
  const hours = h < 10 ? '0' + h : h;
  const minutes = minute < 10 ? '0' + minute : minute;
  const seconds = formatSecond < 10 ? '0' + formatSecond : formatSecond;

  // 构建最终的时间字符串
  let formattedTime = `${times < 0 ? '超时' : ''}`;
  if (days > 0) {formattedTime += `${days}天  `;}
  if (hours > 0 || days > 0) {formattedTime += `${hours}:`;} else {formattedTime += '00:';}
  formattedTime += `${minutes}:${seconds}`;
  return formattedTime;
}

const times = ref('')

let server = null

onMounted(() => {
  server = setInterval(updateTime, 1000)
})

function updateTime() {
  times.value = countDown(props.timeLimit)
}

onBeforeUnmount(() => clearInterval(server))

</script>

<template>
  <div :style="{ 'color': times.includes('超时') ? 'red' : '' }">
    <h2>{{ times }}</h2>
  </div>
</template>

<style scoped>

</style>