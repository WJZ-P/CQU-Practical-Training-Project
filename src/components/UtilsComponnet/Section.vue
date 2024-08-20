<script setup>

</script>

<template>
  <div class="section">
    <slot></slot>
  </div>
</template>

<style scoped>
.section{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;
}
</style>