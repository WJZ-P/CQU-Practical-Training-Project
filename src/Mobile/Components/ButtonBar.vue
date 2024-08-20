<script setup>

import {ChatLineSquare, House} from "@element-plus/icons-vue";
</script>

<template>
  <div class="buttom-bar">

    <div class="icon-class">
      <el-icon size="20px">
        <House/>
      </el-icon>
      首页
    </div>

    <div class="icon-class">
      <el-icon size="20px">
        <ChatLineSquare />
      </el-icon>
      消息
    </div>
      <div class="icon-class">
      <el-icon size="20px">
        <ChatLineSquare />
      </el-icon>
      我的
    </div>

  </div>
</template>

<style scoped>
.buttom-bar {
  height: 8%;
  background-color: #f7f7f7;
  display: flex;
  align-content: center;
  align-items: center;
  font-family: "Microsoft YaHei", sans-serif;
  font-size: 14px;
  margin-bottom: 0;
  justify-content: space-around;
}

.icon-class{
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  &:active{
    color:  #409eff;
  }
}
</style>