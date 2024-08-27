<script setup>

import Header from "@/components/Header.vue";
import Section from "@/components/UtilsComponnet/Section.vue";

const courseContent = [
  {
    "engName": "Loads & Design Method of Structures",
    "trainingProgramDetail": null,
    "id": "10000019038",
    "courseStatus": "已启用",
    "name": "荷载与结构设计方法（英）",
    "verIndId": "3c9dfd77-cf4d-4ccb-975c-40060032c9d3",
    "code": "*CE21119",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003130",
        "name": "韩军",
        "code": "31404",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "副教授",
        "courseVerIntId": "3c9dfd77-cf4d-4ccb-975c-40060032c9d3"
      }
    ],
    "totalHours": "34",
    "credit": "2",
    "moduleId": null,
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Basics of Concrete Structure (I)",
    "trainingProgramDetail": null,
    "id": "10000019040",
    "courseStatus": "已启用",
    "name": "混凝土结构基本原理（I）(英）",
    "verIndId": "bc92c1f3-e5a6-48ab-8a08-1ebc98dc23e6",
    "code": "*CE30105",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003209",
        "name": "刘宝",
        "code": "20103",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "讲师",
        "courseVerIntId": "bc92c1f3-e5a6-48ab-8a08-1ebc98dc23e6"
      }
    ],
    "totalHours": "64",
    "credit": "4",
    "moduleId": "1004",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Baic Principle of Steel Structure",
    "trainingProgramDetail": null,
    "id": "10000019192",
    "courseStatus": "已启用",
    "name": "钢结构基本原理（I）(英）",
    "verIndId": "79b143f1-97dc-402f-b250-2a668936a445",
    "code": "*CE30110",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003167",
        "name": "熊刚",
        "code": "10480",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "79b143f1-97dc-402f-b250-2a668936a445"
      }
    ],
    "totalHours": "40",
    "credit": "2.5",
    "moduleId": "1004",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Foundation Engineering",
    "trainingProgramDetail": null,
    "id": "10000035833",
    "courseStatus": "已启用",
    "name": "基础工程(英）",
    "verIndId": "89b4ff37-aec5-4ab3-9b37-de6d34bff411",
    "code": "*CE30195",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "100000019",
        "name": "周航",
        "code": "32381",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "89b4ff37-aec5-4ab3-9b37-de6d34bff411"
      }
    ],
    "totalHours": "40",
    "credit": "2.5",
    "moduleId": null,
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "3",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Building Steel Structures",
    "trainingProgramDetail": null,
    "id": "10000019133",
    "courseStatus": "已启用",
    "name": "建筑钢结构(英）",
    "verIndId": "12e19fed-e93a-42ac-8c7f-dd3622d68612",
    "code": "*CE30225",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003187",
        "name": "程睿",
        "code": "30183",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "副教授",
        "courseVerIntId": "12e19fed-e93a-42ac-8c7f-dd3622d68612"
      }
    ],
    "totalHours": "40",
    "credit": "2.5",
    "moduleId": "1002",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Tunnel Engineering",
    "trainingProgramDetail": null,
    "id": "10000035322",
    "courseStatus": "已启用",
    "name": "隧道工程（英）",
    "verIndId": "56a7df46-bc92-4a2f-991c-6babd21b2a51",
    "code": "*CE30316",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003233",
        "name": "靳晓光",
        "code": "30147",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "56a7df46-bc92-4a2f-991c-6babd21b2a51"
      }
    ],
    "totalHours": "32",
    "credit": "2",
    "moduleId": "1002",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Soil Mechanics",
    "trainingProgramDetail": null,
    "id": "10000019041",
    "courseStatus": "已启用",
    "name": "土力学(英）",
    "verIndId": "ab163c9d-b7a1-4bf9-8d96-9e61590d100d",
    "code": "*CE31100",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003129",
        "name": "卢谅",
        "code": "31624",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "ab163c9d-b7a1-4bf9-8d96-9e61590d100d"
      }
    ],
    "totalHours": "44",
    "credit": "2.5",
    "moduleId": "1004",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "3",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Rock Mass Mechanics",
    "trainingProgramDetail": null,
    "id": "10000047864",
    "courseStatus": "已启用",
    "name": "岩体力学（英）",
    "verIndId": "982a8b07-a666-4e23-8a41-94c9325d554b",
    "code": "*CE31110",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003186",
        "name": "许明",
        "code": "30260",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "982a8b07-a666-4e23-8a41-94c9325d554b"
      }
    ],
    "totalHours": "34",
    "credit": "2.0",
    "moduleId": "1004",
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": [
      "1022",
      "1000"
    ],
    "courseTagNameList": [
      "MOOC课程",
      "全英文授课"
    ],
    "fileFlag": "Y"
  },
  {
    "engName": "Structural Dynamics and Anti-Seismic & Wind Design of Building Structures",
    "trainingProgramDetail": null,
    "id": "10000019043",
    "courseStatus": "已启用",
    "name": "结构动力学与抗震抗风设计（英）",
    "verIndId": "ce66d5c6-1644-45f0-8278-391433a1658c",
    "code": "*CE31210",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "10003219",
        "name": "杨溥",
        "code": "10530",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "ce66d5c6-1644-45f0-8278-391433a1658c"
      }
    ],
    "totalHours": "42",
    "credit": "2.5",
    "moduleId": null,
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  },
  {
    "engName": "Big Data and Reliability of Geotechnical Engineering",
    "trainingProgramDetail": null,
    "id": "10000035253",
    "courseStatus": "已启用",
    "name": "岩土工程大数据及可靠度（英）",
    "verIndId": "6e083681-e206-4206-94ef-8fb6b3042d16",
    "code": "*CE40138",
    "deptId": "114819092",
    "deptName": "土木工程学院",
    "degree": "本科",
    "courseOutline": "已完善",
    "courseInstructorInfo": [
      {
        "id": "100012898",
        "name": "覃长兵",
        "code": "32619",
        "deptId": "114819092",
        "deptName": "土木工程学院",
        "position": "教授",
        "courseVerIntId": "6e083681-e206-4206-94ef-8fb6b3042d16"
      }
    ],
    "totalHours": "24",
    "credit": "1.5",
    "moduleId": null,
    "functionName": null,
    "enDescriptionRaw": null,
    "descriptionRaw": null,
    "descriptionFlag": "Y",
    "trainingProgram": "3",
    "hasUpdateApply": false,
    "hasStoppingApply": false,
    "editFlag": false,
    "courseTagIdList": null,
    "courseTagNameList": null,
    "fileFlag": "Y"
  }
]

</script>

<template>
  <Header title="重庆大学查课中心"/>
  <div class="main">
    <Section class="main-section">
      <Section class="search-section">
        <ElButton>嘻嘻哈哈</ElButton>
      </Section>

      <Section class="content-section">
        <div class="course-table">
          <el-table :data="courseContent" stripe size="large"
                    max-height="1000" table-layout="auto" border style="width: 100%">

            <el-table-column  class-name="first-col" label="课程名称" prop="name" width="300"/>
            <el-table-column  class-name="second-col" label="课程英文名称" prop="engName" width="400"/>
            <el-table-column  class-name="third-col" label="课程代码" prop="code" width="140"/>
            <el-table-column  class-name="common-col" label="部门" prop="deptName" width="200"/>
            <el-table-column  class-name="common-col" label="层次" prop="degree" width="80"/>
            <el-table-column  class-name="common-col" label="课程负责人" prop="courseInstructorInfo[0].name" width="130"/>
            <el-table-column  class-name="common-col" label="总学时" prop="totalHours" width="90"/>
            <el-table-column  class-name="common-col" label="学分" prop="credit" width="100"/>
            <el-table-column  class-name="common-col" label="培养方案引用" prop="trainingProgram" width="150"/>
            <el-table-column  class-name="common-col" label="状态" prop="courseStatus" width="150"/>

          </el-table>
        </div>
      </Section>

    </Section>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
}

.main-section {

}

.search-section {
  height: 100px;
  background-color: #dce1ea;
}

.content-section {
  margin-top: 10px;
}

.course-table{
 box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* 浅蓝色阴影 */
  width: 100%;
}

.first-col {
  color: #188ffd;
  font-size: large;
}

.common-col{
  font-size: large;
}

</style>