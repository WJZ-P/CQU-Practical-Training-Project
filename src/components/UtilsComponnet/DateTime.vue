<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const nowTime=ref('');//设置现在的时间

function timeComplement(time){
  return time<10 ? '0'+time : time;
}

function formatedDate(){
   const time = new Date()
    const year = time.getFullYear()
    const month = timeComplement(time.getMonth() + 1)
    const day = timeComplement(time.getDate())
    const hour = timeComplement(time.getHours())
    const minute = timeComplement(time.getMinutes())
    const second = timeComplement(time.getSeconds())
    const week = '星期' + '日一二三四五六'.charAt(time.getDay());
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`
}

let timer = null
onMounted(() => {
  timer=setInterval(() => {nowTime.value=formatedDate()}, 1000)
})

onBeforeUnmount(() => {clearInterval(timer)})
</script>

<template>
  <span style="color: white;font-size: 20px">当前时间：{{nowTime}}</span>
</template>

<style scoped>

</style>