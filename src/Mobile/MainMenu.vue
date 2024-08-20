<script setup>





import Section from "@/components/UtilsComponnet/Section.vue";
</script>

<template>
<img src="https://www.cqu.edu.cn/images/z-ban3.jpg" alt="风景图">
  <div class="main-menu">
    <Section class="main-section">

    </Section>
  </div>
</template>

<style scoped>
img{
  width: 100%;
  height: 30%;
}

.main-menu{
  width: 100%;
  height: 69%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-section{
  width: 99%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
</style>