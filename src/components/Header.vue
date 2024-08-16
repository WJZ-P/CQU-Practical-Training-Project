<script setup>
import DateTime from "@/components/DateTime.vue";
</script>

<template>
  <div class="header">
    <div class="logo">
      <img src="https://my.cqu.edu.cn/workspace/static/img/logo-workspace.1d5ca1b8.png" alt="重大校徽">
    </div>
    <p style="color: white;align-content: center;align-self: center">重庆大学新生报到可视化平台</p>
    <DateTime class="date-time-component"/>
  </div>
</template>


<style scoped>
.header {
  height: 60px;
  width: 98%;
  background-color: #0052a8;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  margin: 10px 5px 10px 5px;
  padding: 0 10px;

  &:hover {
    background-color: #4087d2;
    scale: 1.01;
    text-shadow: 0 0 10px #383636;
  }
}

p{
    color: white;
    align-content: center;
    justify-self: center;
  font-size: 28px;
}

.date-time-component {
    padding-right: 80px;
    align-content: center;
}

.logo {
    height: 60px;
    line-height: 10px;
    align-content: center;
  width: 300px;
  img{
    height: 80%;
  }
}

</style>