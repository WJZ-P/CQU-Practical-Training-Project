<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

function handleSuccess(res, file) {

}
</script>

<template>
  <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽照片到这里 <em>点击手动上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
      </div>
    </template>
  </el-upload>
</template>


<style>
.el-upload__text{
  font-size: 20px;
}
.el-icon--upload{
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
}
.el-upload-dragger{
  width: 100%;
  height: 10px;
}

.el-form-item__content{
  display: flex;
  justify-content: center;
}
</style>