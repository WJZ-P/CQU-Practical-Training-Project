<script setup>
const props = defineProps({
  cardBackgroundColor: String//设置卡片的背景颜色
})
</script>

<template>
  <div class="card-container">
    <div class="card">
      <!--  放插槽的地方-->
      <slot>这是默认内容，请传入内容哦!</slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
//background-color: #f5f5f5;
  background-color: #2167b0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 10px;
  transition: 0.2s ease-in-out;
  color: white;
  width: 100%;
  border: 5px solid #f5f5f5;

  &:hover {
  //background-color: #e5e5e5;
    background-color: #215a9e;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    scale: 1.02;
  }
}

.card-container {
  width: 50%;
  height: 125px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
}

</style>