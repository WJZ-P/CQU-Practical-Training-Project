<template>
  <TeacherHeader title="选择您的宿舍"/>
  <!--  最外层容器-->
  <div class="container">
    <!--创建四个容器各自存放梅兰竹菊四个园区-->
    <!--梅园-->
    <div class="plum">
      <div class="overlay">
        <RouterLink to="./Accommodate/DormPlum" style="margin-left: 40%;margin-bottom: 10%">
          <text class="dorm-name animate__animated animate__backInDown">梅园</text>
        </RouterLink>
      </div>
    </div>
    <!--兰园-->
    <div class="orchid">
      <div class="overlay">
        <RouterLink to="./Accommodate/DormOrchid" style="margin-left: 40%;margin-bottom: 10%">
          <text class="dorm-name animate__animated animate__backInDown">兰园</text>
        </RouterLink>
      </div>
    </div>
    <!--竹园-->
    <div class="bamboo">
      <div class="overlay">
        <RouterLink to="./Accommodate/DormBamboo" style="margin-left: 40%;margin-bottom: 10%">
          <text class="dorm-name animate__animated animate__backInDown">竹园</text>
        </RouterLink>
      </div>
    </div>
    <!--菊园-->
    <div class="chrys">
      <div class="overlay">
        <RouterLink to="./Accommodate/DormChrys" style="margin-left: 40%;margin-bottom: 10%">
          <text class="dorm-name animate__animated animate__backInDown">菊园</text>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.plum, .orchid, .bamboo, .chrys {
  position: relative;
  width: 50%;
  height: 50%;
  overflow: hidden;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

RouterLink {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plum {
  background-image: url("plum.png");
}

.orchid {
  background-image: url("orchid.png");
}

.bamboo {
  background-image: url("bamboo.png");
}

.chrys {
  background-image: url("chrys.png");
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
  align-items: center;
  display: flex;
}

.plum:hover .overlay {
  background-color: rgba(255, 193, 7, 0.6); /* 梅园渐变颜色 */
}

.orchid:hover .overlay {
  background-color: rgba(75, 192, 192, 0.6); /* 兰园渐变颜色 */
}

.bamboo:hover .overlay {
  background-color: rgba(40, 167, 69, 0.6); /* 竹园渐变颜色 */
}

.chrys:hover .overlay {
  background-color: rgba(255, 102, 0, 0.6); /* 菊园渐变颜色 */
}

.dorm-name {
  font-family: "FangSong", "仿宋", sans-serif;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
  user-select: none;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    scale: 1.05;
  }
}


</style>
<script setup lang="ts">
</script>