<script setup>
import {View} from "@element-plus/icons-vue";
</script>
<template>

  <div class="header">
    <div class="logo">
      <Header title="重庆大学课程查询中心"/>
    </div>

    <div class="select">
      <div class="juti">
        <text class="point1">课程名称:</text>
        <!--第一个模块 课程名称-->
        <div class="dropdown-container">
          <div class="dropdown">
            <input
                type="text"
                v-model="searchQuery1"
                @input="filterOptions"
                placeholder="输入内容"
                class="input-box"
            />
          </div>
        </div>
        <!--  第二个模块：课程代码-->
        <text class="point2">课程代码:</text>
        <div class="dropdown-container">
          <div class="dropdown">
            <input
                type="text"
                v-model="searchQuery2"
                @input="filterOptions"
                placeholder="输入内容"
                class="input-box"
            />
          </div>

        </div>

        <!--       第三个模块开设部门-->
        <text class="point3">开设部门:</text>
        <div class="dropdown-container">
          <div class="dropdown">
            <!--                -->
            <!--          <input-->
            <!--              type="text"-->
            <!--              v-model="searchQuery3"-->
            <!--              @input="filterOptions('third')"-->
            <!--              @focus="showDropdown('third')"-->
            <!--              placeholder="输入内容"-->
            <!--              class="input-box"-->
            <!--          />-->
            <!--          <div class="dropdown-menu" v-if="dropdownVisible && filteredOptions.length">-->
            <!--            <div-->
            <!--                v-for="option in filteredOptions"-->
            <!--                :key="option"-->
            <!--                class="menu-item"-->
            <!--                @click="selectOption(option)"-->
            <!--            >-->
            <!--              {{ option }}-->
            <!--            </div>-->
            <!--          </div>-->
            <div>
              <comment/>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div class="buttons">
      <button class="search-button" @click="search()">搜索</button>
      <button class="reset-button" @click="reset()">重置</button>

    </div>

    <el-table :data="unLimitedCourseList" stripe style="width: 100%">
      <el-table-column fixed prop="id" label="课程id" width="200"/>
      <el-table-column prop="name" label="课程名" width="300"/>
      <el-table-column prop="departmentName" label="开课部门" width="200"/>
      <el-table-column prop="selectionArea" label="课程类型" width="300"/>
      <el-table-column prop="credit" label="学分" width="300"/>
      <el-table-column prop="programType" label="修读类型"/>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000"/>

  </div>
</template>


<script>
import axios from "axios";
import {reactive} from "vue";

export default {

  data() {
    return {
      unLimitedCourseList: [
        {
          "id": "10000013232",
          "name": "现代仪器分析创新实践",
          "codeR": "IDUE260",
          "departmentId": "100011",
          "departmentName": "分析测试中心",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "59K7oATBpdULfqr6iZpCow==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000036918",
          "name": "人工智能基础及应用",
          "codeR": "IDUE349",
          "departmentId": "114819089",
          "departmentName": "自动化学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "DecC55ZaRqUF0aPItQt6VQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046043",
          "name": "西方近现代哲学",
          "codeR": "IDUE381",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOntZOqqmEKfpJA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000044701",
          "name": "大学生安全文化",
          "codeR": "IDUE058",
          "departmentId": "114819096",
          "departmentName": "资源与安全学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "cEw5FOYYbN3eRbVxK/N6EA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043974",
          "name": "高分子化学",
          "codeR": "IDUE336",
          "departmentId": "114819108",
          "departmentName": "药学院(创新药物研究中心)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU29fvyPLyI52w==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000004765",
          "name": "现代检测技术（Ⅱ）",
          "codeR": "IDUE022",
          "departmentId": "114819084",
          "departmentName": "光电工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "avNdVjl7ZjXJkQMCbR5TPg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000011052",
          "name": "留学素养英语--雅思听力",
          "codeR": "IDUE234",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "Hcl10JK6b9d9bpaRSSr6mA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000014283",
          "name": "现代生物工程进展",
          "codeR": "IDUE007",
          "departmentId": "114819095",
          "departmentName": "生物工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "wJJT5a/C//lmGAQGZNrdTA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000003677",
          "name": "交通运输工程导论",
          "codeR": "IDUE084",
          "departmentId": "114819089",
          "departmentName": "自动化学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "FIR3G9GPCI4X/1bm/wxaKQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000007100",
          "name": "电力工程基础",
          "codeR": "IDUE081",
          "departmentId": "114819087",
          "departmentName": "电气工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "u0zZMi8C9VGeLQ@2BZxlTUng==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000010994",
          "name": "通用流体机械",
          "codeR": "IDUE048",
          "departmentId": "114819086",
          "departmentName": "能源与动力工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "R1RBK6WysmLe7XUY02pk5g==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000013980",
          "name": "留学素养英语--托福阅读",
          "codeR": "IDUE239",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "59K7oATBpdWNJh4rWSraZg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000010997",
          "name": "可再生能源及其利用技术",
          "codeR": "IDUE051",
          "departmentId": "114819086",
          "departmentName": "能源与动力工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "R1RBK6WysmKTz@2BvXMCrxug==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043200",
          "name": "纳米材料基础",
          "codeR": "IDUE209",
          "departmentId": "114819108",
          "departmentName": "药学院(创新药物研究中心)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU2yOj7jyWENSw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000013973",
          "name": "智能故障诊断技术与应用",
          "codeR": "IDUE204",
          "departmentId": "114819089",
          "departmentName": "自动化学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "59K7oATBpdWKH@2BHHXl7eXg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000044394",
          "name": "新药研发的故事",
          "codeR": "IDUE266",
          "departmentId": "114819108",
          "departmentName": "药学院(创新药物研究中心)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "cEw5FOYYbN2e3iA1FNuBxg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000020241",
          "name": "室内环境与装饰艺术",
          "codeR": "IDUE077",
          "departmentId": "114819085",
          "departmentName": "材料科学与工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "wqfvq401tJmBlFpeaOUQoQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000037353",
          "name": "美术鉴赏与艺术体验",
          "codeR": "IDUE409",
          "departmentId": "114819077",
          "departmentName": "艺术学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "HfYsDkPCY4JR8bpb0lWTzQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000002432",
          "name": "电工生态与生物医学",
          "codeR": "IDUE082",
          "departmentId": "114819087",
          "departmentName": "电气工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "5W@2BfoidQTfdWT5x6OYeozA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000002433",
          "name": "建筑智能化系统",
          "codeR": "IDUE083",
          "departmentId": "114819087",
          "departmentName": "电气工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.5",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "5W@2BfoidQTffaHWWHaeOEgg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000040018",
          "name": "人工智能与数智人文实践基础",
          "codeR": "IDUE350",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "7f4pPO58lzwic5hBAx97Zw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000011016",
          "name": "生物力学基础",
          "codeR": "IDUE006",
          "departmentId": "114819095",
          "departmentName": "生物工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "Hcl10JK6b9fo3a8X@2BxuNgw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000040017",
          "name": "以诗歌阅读人生",
          "codeR": "IDUE351",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "7f4pPO58lzxDV/cTWP1DWw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000038972",
          "name": "留学素养英语--雅思写作",
          "codeR": "IDUE235",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "Xepw2FK9z42JxjVm86qXkQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000008642",
          "name": "城市声景观",
          "codeR": "IDUE053",
          "departmentId": "114819091",
          "departmentName": "建筑城规学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "Tda1judiay5w9Ty9jpPMkg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "B区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000009852",
          "name": "基础俄语（1）",
          "codeR": "IDUE191",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "4",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "JxbQRHqcJ7xVJkXflnfXPQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000014407",
          "name": "智能控制基础",
          "codeR": "IDUE259",
          "departmentId": "114819089",
          "departmentName": "自动化学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "wJJT5a/C//nAb7fyw2@2B0RQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000041593",
          "name": "民法基础",
          "codeR": "IDUE0316",
          "departmentId": "114819074",
          "departmentName": "经济与工商管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "sRa/ZH0mxJwqEO5adb5kng==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000017594",
          "name": "纳米材料与技术",
          "codeR": "IDUE225",
          "departmentId": "114819094",
          "departmentName": "化学化工学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "h@2Bvi6DVNKjCxMrHIjC49xA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000020375",
          "name": "生物化学基础",
          "codeR": "IDUE210",
          "departmentId": "114819108",
          "departmentName": "药学院(创新药物研究中心)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "wqfvq401tJlxAuaGb0jfYw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000002421",
          "name": "经济学原理",
          "codeR": "IDUE071",
          "departmentId": "114819073",
          "departmentName": "公共管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "5W@2BfoidQTff7ByE0yrHylw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000019092",
          "name": "材料分析测试方法",
          "codeR": "IDUE220",
          "departmentId": "114819094",
          "departmentName": "化学化工学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "CaccnHTs9HT3zvVXomzj3g==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000004965",
          "name": "航空航天复合材料II",
          "codeR": "IDUE029",
          "departmentId": "114819149",
          "departmentName": "航空航天学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "avNdVjl7ZjX1wIdswZk7qQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000040703",
          "name": "城市 地下空间概论",
          "codeR": "IDUE038",
          "departmentId": "114819092",
          "departmentName": "土木工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1.5",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "7f4pPO58lzypZnIGbVILIQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000011124",
          "name": "留学素养英语--托福口语",
          "codeR": "IDUE240",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "Hcl10JK6b9dlcOCNV/Sydw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000013666",
          "name": "史记",
          "codeR": "IDUE001",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "59K7oATBpdVL5bHTr7NQUw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000010557",
          "name": "税收",
          "codeR": "IDUE135",
          "departmentId": "114819074",
          "departmentName": "经济与工商管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "R1RBK6WysmK6/7rsrD/LMQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043485",
          "name": "生物多样性及其保护",
          "codeR": "IDUE263",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU0i53I0UwuSRg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000044974",
          "name": "能源动力过程中的环境保护",
          "codeR": "IDUE047",
          "departmentId": "114819086",
          "departmentName": "能源与动力工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "cEw5FOYYbN29fvyPLyI52w==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000037822",
          "name": "东亚跨文化交际论",
          "codeR": "IDUE124",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "HfYsDkPCY4I8Z1szJoWdeA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000040556",
          "name": "医疗器械质量控制",
          "codeR": "IDUE012",
          "departmentId": "114819095",
          "departmentName": "生物工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "7f4pPO58lzyLaJTWESO82w==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000010780",
          "name": "法律英语",
          "codeR": "IDUE201",
          "departmentId": "114819080",
          "departmentName": "法学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "R1RBK6WysmK0NaFKtFuAgQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "B区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000013658",
          "name": "鲁迅精读",
          "codeR": "IDUE003",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "59K7oATBpdWOoJ0OxjENyA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000011757",
          "name": "机器学习基础及应用",
          "codeR": "IDUE227",
          "departmentId": "114819089",
          "departmentName": "自动化学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "Hcl10JK6b9d2OBHj/TF6Qg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000019473",
          "name": "证券投资分析",
          "codeR": "IDUE317",
          "departmentId": "114819073",
          "departmentName": "公共管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "CaccnHTs9HQlt7zX325j1w==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046024",
          "name": "四书",
          "codeR": "IDUE369",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOnvcKti@2BceCSXQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000041893",
          "name": "药事管理学",
          "codeR": "IDUE289",
          "departmentId": "114819108",
          "departmentName": "药学院(创新药物研究中心)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "sRa/ZH0mxJw7kKb9NSUZLQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000011071",
          "name": "高阶英语阅读（学术）",
          "codeR": "IDUE244",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "Hcl10JK6b9cCjl1sksXrWw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000010134",
          "name": "心理援助与拓展训练",
          "codeR": "IDUE069",
          "departmentId": "114819073",
          "departmentName": "公共管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "R1RBK6WysmL6GiUm73JugA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000036623",
          "name": "基础法语（1）",
          "codeR": "IDUE192",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "4",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "DecC55ZaRqUfFD@2B5oYYyPw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000036624",
          "name": "基础法语（2）",
          "codeR": "IDUE241",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "4",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "DecC55ZaRqUvwL1Sx6JLXQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000012954",
          "name": "高阶英语译与写（通用）",
          "codeR": "IDUE251",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "BqFjqJeMsXV9@2BnbIjFtoWg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000012834",
          "name": "翻译技术实践",
          "codeR": "IDUE142",
          "departmentId": "114819076",
          "departmentName": "外国语学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "BqFjqJeMsXWagJiNdUXThA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000016593",
          "name": "动物生物学",
          "codeR": "IDUE005",
          "departmentId": "114819095",
          "departmentName": "生物工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "xoHAxMZHzQgqEO5adb5kng==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "B区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046018",
          "name": "文化研究导论",
          "codeR": "IDUE199",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOnsic5hBAx97Zw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043420",
          "name": "生态学导论",
          "codeR": "IDUE198",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU0ABn4HonuEsw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000044914",
          "name": "工程伦理学",
          "codeR": "IDUE052",
          "departmentId": "114819086",
          "departmentName": "能源与动力工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "cEw5FOYYbN1qqqM65Ug2Dw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "C区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000014047",
          "name": "建筑概论",
          "codeR": "IDUE248",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "wJJT5a/C//l4dQZl/p9gcw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046048",
          "name": "中国社会文化史",
          "codeR": "IDUE433",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOntTiE4ygff@2Big==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046045",
          "name": "中国现代文学",
          "codeR": "IDUE321",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOnvXRYx7IT@2BrPA==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043455",
          "name": "土壤生态学",
          "codeR": "IDUE339",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU0rdI3Ko9WGVQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000036353",
          "name": "国际商务与法律（双语）",
          "codeR": "IDUE337",
          "departmentId": "114819080",
          "departmentName": "法学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "DecC55ZaRqVR8bpb0lWTzQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000016851",
          "name": "建筑美学",
          "codeR": "IDUE315",
          "departmentId": "114819085",
          "departmentName": "材料科学与工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "xoHAxMZHzQincVs8KIJkZg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区",
            "B区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000016573",
          "name": "知识与创新思维",
          "codeR": "IDUE099",
          "departmentId": "114819083",
          "departmentName": "机械与运载工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "xoHAxMZHzQiH8Is49D76GQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000009593",
          "name": "钢结构设计原理",
          "codeR": "IDUE035",
          "departmentId": "114819092",
          "departmentName": "土木工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "JxbQRHqcJ7wqEO5adb5kng==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000016683",
          "name": "人类生态学",
          "codeR": "IDUE267",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "xoHAxMZHzQiKhBtrLeWwKw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000036890",
          "name": "入侵生态学原理与应用",
          "codeR": "IDUE338",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "DecC55ZaRqUj3/Cal@2Bt/8A==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000038852",
          "name": "竹木结构",
          "codeR": "IDUE283",
          "departmentId": "114819092",
          "departmentName": "土木工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "Xepw2FK9z41VJkXflnfXPQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000009699",
          "name": "混凝土结构设计原理",
          "codeR": "IDUE034",
          "departmentId": "114819092",
          "departmentName": "土木工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "JxbQRHqcJ7yCnjcIvzNwXg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000012900",
          "name": "海洋与法律",
          "codeR": "IDUE231",
          "departmentId": "114819080",
          "departmentName": "法学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "BqFjqJeMsXX70pk@2BTSBbwg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000018848",
          "name": "企业会计法律风险管理",
          "codeR": "IDUE136",
          "departmentId": "114819074",
          "departmentName": "经济与工商管理学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "xFa2zOErcjl/D/@2BFBwXCVQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000003874",
          "name": "智能网联汽车",
          "codeR": "IDUE020",
          "departmentId": "114819083",
          "departmentName": "机械与运载工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "1",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "FIR3G9GPCI6h6pl95z/hPw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "A区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000039793",
          "name": "生物化学（Ⅰ）",
          "codeR": "IDUE221",
          "departmentId": "114819094",
          "departmentName": "化学化工学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": null,
          "courseNature": "选修",
          "encryptedCourseId": "nP9kXsWJ50nUd/n0qhj41w==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000043405",
          "name": "市场营销学",
          "codeR": "IDUE306",
          "departmentId": "114819075",
          "departmentName": "管理科学与房地产学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "WCu52xU2vU25FgPDLiSAzw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000007825",
          "name": "人工智能导论",
          "codeR": "IDUE189",
          "departmentId": "114819081",
          "departmentName": "大数据与软件学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "u0zZMi8C9VFOoT7xjO0VFg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046022",
          "name": "社会契约论",
          "codeR": "IDUE159",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOns1ZEC2yij2aQ==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000014184",
          "name": "植物生态学",
          "codeR": "IDUE278",
          "departmentId": "114819093",
          "departmentName": "环境与生态学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "wJJT5a/C//nl0TYsBeJgxg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046015",
          "name": "中国政治思想史",
          "codeR": "IDUE156",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "3.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOnvSYC6MTO/Nyw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000046017",
          "name": "Big Questions",
          "codeR": "IDUE158",
          "departmentId": "114819106",
          "departmentName": "博雅学院(高研院)",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2.0",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "mawbRWnzOntDV/cTWP1DWw==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        },
        {
          "id": "10000044877",
          "name": "创新思维与职场能力",
          "codeR": "IDUE445",
          "departmentId": "114819083",
          "departmentName": "机械与运载工程学院",
          "courseCategory": "个性化模块",
          "selectionArea": "非限制选修课程",
          "credit": "2",
          "programType": "主修",
          "courseEnrollSign": "已选满",
          "courseNature": "选修",
          "encryptedCourseId": "cEw5FOYYbN1VTxQ8EYx1Rg==",
          "yearAndTerm": null,
          "score": null,
          "campusShortNameSet": [
            "D区"
          ],
          "replaceCourseInfoOrigin": null,
          "courseSetId": "1170",
          "courseSetName": "非限制选修课程集",
          "replaceCourseCodeOrigin": null,
          "gateCount": 0
        }
      ],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
        {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
        },
      ],
      //搜索条件
      searchQuery: {
        searchQuery1: '',
        searchQuery2: '',
        searchQuery3: '',

      },

      formData: {
        id: '',
        name: '',
        departmentName: '',
        selectionArea: '',
        credit: '',
        programType: '',
        currentPage: '1',
        pageSize: '10',
        selectRange: '全校',
        courseStatus: '已启用',
        courseNameOrCode: '',
        deptId: ''
      },


      selected: null,
      hoveredBox: null,
      img1: "../../assets/img1.png",
      /*下拉菜单的选项*/
      searchQuery3: '',
      options: [],
      filteredOptions: [],
    };
  },

  methods: {

    // select(option) {
    //   this.selected = option;
    // },
    // toggleDropdown() {
    //   this.dropdownVisible = !this.dropdownVisible;
    // },
    // filterOptions(inputbox) {
    //   if (inputbox == 'third') {
    //     // 检查输入框是否为空
    //     if (this.searchQuery3.trim() === '') {
    //       // 如果输入框为空，则将 filteredOptions 设置为所有选项，并显示下拉菜单
    //       this.filteredOptions = this.options;
    //     } else {
    //       // 如果输入框不为空，根据输入内容进行筛选
    //       this.filteredOptions = this.options.filter(option =>
    //           option.includes(this.searchQuery3)
    //       );
    //     }
    //
    //     // 控制下拉菜单的显示，如果有匹配的选项，显示下拉菜单；否则隐藏
    //     this.dropdownVisible = this.filteredOptions.length > 0;
    //   }
    // },
    // //只有第三个容器才会出现下拉菜单
    // showDropdown(inputbox) {
    //   if (inputbox == 'third') {
    //     this.dropdownVisible = true;
    //   }
    //
    // },
    // selectOption(option) {
    //   this.searchQuery3 = option;
    //   this.dropdownVisible = false;
    // },
    //
    // onContainerClick(event) {
    //   // 检查点击事件是否发生在下拉容器内
    //   if (!this.$el.contains(event.target)) {
    //     this.dropdownVisible = false;
    //   }
    // },
    /*重置按钮*/
    reset() {
      // 清空所有输入框的内容
      this.searchQuery1 = '';
      this.searchQuery2 = '';
      this.searchQuery3 = '';

    },
    search() {
      const myConfig = {
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMyIsImVtYWlsIjoiMTkwNDM3MDIwM0BxcS5jb20iLCJleHAiOjE3MjQ3ODYxMDd9.4zWKB8ikbmQx-TQmlbtpHU1AQJHy840vNlTOltUojVc'
        }
      }

      console.log(this.formData)

      axios.post('http://127.0.0.1:8080/course/search', {
        "currentPage": this.formData.currentPage,
        'pageSize': this.formData.pageSize,
        'selectRange': this.formData.selectRange,
        'courseStatus': this.formData.courseStatus,
        'courseNameOrCode': this.formData.courseNameOrCode,
        'deptId': this.formData.deptId,
      }, myConfig).then((response) => {
            console.log(response)
            if (response.data.msg == 'success') {
              console.log('23123123123123')
            }
            this.unLimitedCourseList = JSON.parse(response.data.data)
            console.log("下面是unlimited的数据")
            console.log(response.data.data)
          },
      )
    },
  },

};

</script>

<style>
.university {
  width: 100%;
  height: 70px;
  background: #0052A8 100%;
}

.logo {
  left: 12px;
  margin-top: 8px;
  width: 187px;
  height: 58px;
  background-color: rgba(229, 229, 229, 1);
}

.juti {
  width: 100%;
  height: 40px;
}

.select {
  margin-top: 20px;
  margin-left: 40px;
}

.point1 {
  font-size: 20px;
}

/*课程代码的部分*/
.point2 {
  font-size: 20px;
  margin-left: 50px;
}

.point3 {
  font-size: 20px;
  margin-left: 50px;
}

.dropdown-container {
  margin-left: 10px;
  display: inline-block;
  flex-wrap: nowrap;
//position: relative; width: 350px;
}

.dropdown {

  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
}


.input-box {
  flex-wrap: nowrap;
  display: inline-block;
  width: 100%;
  border: none;
  padding: 8px;
  box-sizing: border-box;
}

.dropdown-menu {

  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  background-color: white;
  z-index: 1000;
  max-height: 150px;
  overflow-y: auto;
}

.buttons {
  float: right;
  margin-right: 100px;
  margin-top: 10px;
}

.search-button {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 30px;
}

.reset-button {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.reset-button:hover {
  background-color: #f0f0f0;
}

/* 如果需要调整padding使表格内容变厚实一点 */
.el-table th, .el-table td {
  padding: 12px 8px; /* 调整padding的大小，增大表格内容的厚度感 */
}
</style>