<script setup>
import Section from "@/components/Section.vue";
import PCAPP from "@/PCAPP.vue";
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <div class="main">
    <!--  <PCAPP/>-->
    <!--  编写跳转-->
    <Section>
      <div class="button-div">
        <RouterLink to="/PCAPP">
          <button>点我跳转到网页端</button>
        </RouterLink>

        <RouterLink to="/AndroidApp">
          <button>点我跳转到移动端</button>
        </RouterLink>
      </div>
    </Section>
  </div>
</template>


<style scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  align-items: center;
}

.button-div {
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  width: fit-content;
  height: 100px;
  font-size: 30px;
  color: #ffffff;
  background-color: #2167b0;
  transition: 0.2s ease-in-out;
  border-radius: 10px;
  margin: 15px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: #1a538a;
    scale: 1.05;
    box-shadow: 0 0 10px #1a538a;
    animation: doudong 0.3s;
  }
}

@keyframes doudong {
  0% {
    transform: rotate(0deg);
  }
  12.5% {
    transform: rotate(3deg);
  }
  25% {
    transform: rotate(5deg);
  }
  37.5% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(0deg);
  }
  62.5% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  87.5% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
