<script setup>
import {ref} from "vue";
import Section from "@/components/UtilsComponnet/Section.vue";

let selectedList = null;
const courseList = [
  {
    "id": "10000045134",
    "name": "大数据架构与技术",
    "codeR": "CST31214",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/j6GiUm73JugA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045016",
    "name": "软件工程",
    "codeR": "CST31108",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/jo3a8X@2BxuNgw==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045151",
    "name": "移动应用软件开发",
    "codeR": "CST31222",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选满",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/joWt7kUZoa2g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045153",
    "name": "JAVA企业级应用",
    "codeR": "CST31215",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "选修",
    "encryptedCourseId": "Qn5oyyyHD/iCk90wgF4A2g==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000044986",
    "name": "计算机网络",
    "codeR": "CST31119",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3.5",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "cEw5FOYYbN1GOQiuAQOGeQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045024",
    "name": "操作系统",
    "codeR": "CST31115",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "专业课程",
    "selectionArea": "主修专业课程",
    "credit": "3.5",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/jcKti@2BceCSXQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000045173",
    "name": "专业基本能力测试",
    "codeR": "CST43101",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "个性化模块",
    "selectionArea": "主修专业课程",
    "credit": "2",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "Qn5oyyyHD/ixx6l5fSVcmQ==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000004867",
    "name": "形势与政策5",
    "codeR": "MT80005",
    "departmentId": "56",
    "departmentName": "马克思主义学院",
    "courseCategory": "公共基础课程",
    "selectionArea": "主修专业课程",
    "credit": "0",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "avNdVjl7ZjVdg18CFihyGg==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": "1177",
    "courseSetName": "形势与政策",
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  },
  {
    "id": "10000004631",
    "name": "硬件综合设计",
    "codeR": "CST33101",
    "departmentId": "114819090",
    "departmentName": "计算机学院",
    "courseCategory": "实践环节",
    "selectionArea": "主修专业课程",
    "credit": "3",
    "programType": "主修",
    "courseEnrollSign": "已选",
    "courseNature": "必修",
    "encryptedCourseId": "avNdVjl7ZjXnTRncX4IcKA==",
    "yearAndTerm": null,
    "score": null,
    "campusShortNameSet": [
      "D区"
    ],
    "replaceCourseInfoOrigin": null,
    "courseSetId": null,
    "courseSetName": null,
    "replaceCourseCodeOrigin": null,
    "gateCount": null
  }
]

function handleSelectChange(value) {
  selectedList = value//把多选的结果存入到selectedList内，供后续使用
  console.log(selectedList)
}
</script>

<template>
  <div style="width: 100%;height: 100%;display: flex;justify-content: center;background-color: #e6effa">
    <Section class="main-section">
        <div class="major-div">
          <el-table ref="courseList" :data="courseList" stripe
                    @selection-change="handleSelectChange" size="large" max-height="500">
            <el-table-column class="table-column" label="课程名字" prop="name" width="180"/>
            <el-table-column class="table-column" label="课程代码" prop="codeR" width="125"/>
            <el-table-column class="table-column" label="学分" prop="credit" width="100"/>
            <el-table-column class="table-column" label="校区" prop="campusShortNameSet" width="125"/>
            <el-table-column class="table-column" label="课程类别" prop="courseCategory" width="200"/>
            <el-table-column class="table-column" label="课程性质" prop="courseNature"/>
            <el-table-column class="table-column" label="所属学院" prop="departmentName"/>
            <el-table-column class="table-column" fixed="right" type="selection" width="55"/>
          </el-table>
        </div>
    </Section>
  </div>
</template>


<style scoped>
.major-div{
  width: 98%;
}
.main-section {
  width: 99%;
  margin: 15px;
  padding: 15px;
}

</style>