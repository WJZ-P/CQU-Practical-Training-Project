<script setup>

import {onBeforeUnmount, onMounted, ref} from "vue";
import {debounce} from "@/Utils/debounce.js";

let showElement = ref(true)//设置是否显示元素

const props = defineProps({minWidth: Number})

const listener = () => {
  debounce(() => {
    showElement.value = window.innerWidth >= props.minWidth;
  }, 10, 'responsiveEl')
}

//加入事件监听器
onMounted(() => {
  window.addEventListener('resize', listener)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', listener)
})


</script>

<template>
  <transition name="slide">
    <!--  只有当showElement为true才显示-->
    <slot v-if="showElement"></slot>
  </transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.2s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}
</style>