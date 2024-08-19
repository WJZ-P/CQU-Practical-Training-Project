<script setup>

import TopBar from "@/Mobile/Components/TopBar.vue";
import ButtonBar from "@/Mobile/Components/ButtonBar.vue";
</script>

<template>
  <div class="mobile-main">
    <!--    顶部导航栏-->
    <TopBar/>

    <!--    放主要内容-->
    <div class="mobile-view">
      <router-view/>
    </div>

    <!--    底部导航栏-->
    <ButtonBar/>
  </div>
</template>

<style scoped>
.mobile-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.mobile-view {
  height: 100%;
}
</style>