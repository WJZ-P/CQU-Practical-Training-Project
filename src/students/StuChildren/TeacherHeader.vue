<script setup>
import DateTime from "@/components/UtilsComponnet/DateTime.vue";
import ResponsiveEl from "@/components/UtilsComponnet/ResponsiveEl.vue";

const props=defineProps({title:String})
</script>

<template>
  <div class="header">
    <ResponsiveEl :min-width=1300>
      <div class="logo">
        <img src="https://my.cqu.edu.cn/workspace/static/img/logo-workspace.1d5ca1b8.png" alt="重大校徽">
      </div>
    </ResponsiveEl>
    <p style="color: white;align-content: center;align-self: center">{{props.title}}</p>
    <DateTime class="date-time-component"/>
  </div>
</template>


<style scoped>
.header {
  height: 7.777%;
  background-color: #0052a8;
  border-radius: 1vw;
  transition: all 0.3s ease-in-out;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.4vw 0.4vw 0 rgba(0, 0, 0, 0.2), 0 0.6vw 2vw 0 rgba(0, 0, 0, 0.19);
  display: flex;
  margin: 1vw 0.5vw 0.5vw 0.5vw;
  padding: 0 1vw;

  &:hover {
    background-color: #004793;
    scale: 1.01;
    text-shadow: 0 0 1vw #383636;
  }
}

p {
  color: white;
  align-content: center;
  justify-self: center;
  font-size: 6vmin;
}

.date-time-component {
  padding-right: 3vmin;
  align-content: center;
}

.logo {
  height: 10vmin;
  align-content: center;
  width: 30vmin;

  img {
    height: 80%;
  }
}

</style>