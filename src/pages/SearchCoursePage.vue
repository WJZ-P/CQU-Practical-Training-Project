<script setup>

import Header from "@/components/Header.vue";
import Section from "@/components/UtilsComponnet/Section.vue";
import {ArrowDown, Search} from "@element-plus/icons-vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";


const courseContent =ref([])
const searchParams = ref({
  currentPage: 1,
  pageSize: 10,
  selectRange: '全校',
  courseStatus: '',
  courseNameOrCode: '',
  deptId: '',
})

const paginationInfo = ref({
  totalElements: 100,
  totalPages: 100,
  currentPage: 1,
})


const exampleData=ref({
  "id": "10000019038",
  "name": "荷载与结构设计方法（英）",
  "courseEnglishName": "Loads & Design Method of Structures",
  "credit": "2",
  "degree": "本科",
  "subject": "*CE",
  "number": "21119",
  "codeR": "*CE21119",
  "courseOutlineCategory": "理论类",
  "practiceTypeId": null,
  "departmentId": "114819092",
  "departmentName": null,
  "description": "<p>荷载与结构设计方法是土木工程专业学生必修的一门重要的专业基础课程，是学习后续课程钢筋混凝土基本原理、钢结构设计基本原理、结构动力学与抗震抗风设计、建筑钢结构、混凝土建筑结构、桥梁工程等专业课程及完成课程设计和毕业设计的基础。在培养学生利用可靠度设计理论进行结构和构件的设计方面占有重要的地位。本课程主要讲授结构可靠度设计基本原理、设计方法以及工程结构可能承受的各种作用产生的背景及其计算方法。通过本课程的课堂教学和实验教学环节，培养学生工程结构可靠度设计思想，能解释各类荷载产生的机理及影响因素，掌握荷载不同代表值的确定方法及结构可靠度设计方法，具备运用所学基本知识，确定复杂工程结构的荷载作用、判断和评价实际工程结构构件的安全性、耐久性、适用性和进行基于可靠度的结构构件设计的能力，支撑毕业要求中的相应指标点。<br/></p>",
  "englishDescription": "<p>The course\nof Load and Structural Design Methods is an important foundational course for\ncivil engineering students. It is a prerequisite for studying subsequent\ncourses such as the basic principles of reinforced concrete, steel structure\ndesign, seismic design principles, building steel structures, concrete building\nstructures, bridge engineering, as well as completing course projects and\ngraduation designs. It plays a crucial role in training students to utilize\nreliability design theory for structural and component design.This course mainly covers the basic principles and\ndesign methods of structural reliability design, as well as the background and\ncalculation methods for various actions that engineering structures may bear.\nThrough classroom teaching and experimental instruction, this course aims to\ncultivate students' thinking in engineering structural reliability design. It\nenables students to explain the mechanisms and influencing factors behind\nvarious types of loads, grasp the methods for determining representative values\nof loads and the design methods for structural reliability, and possess the\nability to apply the acquired knowledge to determine the load effects of\ncomplex engineering structures, assess the safety, durability, and\napplicability of actual structural components, and perform reliability-based\nstructural component design. These abilities support the corresponding\nindicators in the graduation requirements.</p>",
  "verOrder": null,
  "verIndId": "3c9dfd77-cf4d-4ccb-975c-40060032c9d3",
  "courseStatus": "已启用",
  "teachObjectivesTaskReq": null,
  "courseFormatVOList": [
    {
      "courseFormatCategoryId": "1000",
      "courseFormatCateName": "理论为主课程",
      "courseActivityList": [
        {
          "id": "97644",
          "parentId": null,
          "courseFormatId": "80643",
          "activityTypeId": "17",
          "activityTypeName": null,
          "durationTypeId": "1002",
          "durationTypeName": null,
          "durationLength": 30,
          "predictPersonCount": null,
          "practiceTypeId": null,
          "practiceTypeName": null,
          "mainActivityFlag": "Y",
          "activityOrder": "1",
          "showOrder": "理论",
          "courseActivityChildList": [
            {
              "id": "97645",
              "parentId": "97644",
              "courseFormatId": "80643",
              "activityTypeId": "23",
              "activityTypeName": null,
              "durationTypeId": "1002",
              "durationTypeName": null,
              "durationLength": 4,
              "predictPersonCount": null,
              "practiceTypeId": null,
              "practiceTypeName": null,
              "mainActivityFlag": "N",
              "activityOrder": "1-1",
              "showOrder": "实验",
              "courseActivityChildList": null
            }
          ]
        }
      ]
    }
  ],
  "courseTeacherIdList": [],
  "subjectCateName": null,
  "moduleId": null,
  "courseTagIdList": [],
  "teachingMaterial": "待定",
  "bibliography": null,
  "teachingContent": null,
  "teachingMethod": null,
  "learningOutcomes": null,
  "loToGraduate": null,
  "loToEvaluate": null,
  "courseContentTimeAllow": null,
  "faceSchoolAllMajorFlag": "Y",
  "faceMajorIdList": [],
  "faceMajorVOList": [],
  "politicalElement": null,
  "prereqCourseIdList": [],
  "reviewWay": null,
  "assessmentsType": null,
  "assessmentsTypeNote": null,
  "courseSemester": null,
  "feeDescription": null,
  "courseConstructRecordList": [],
  "authorIdList": [
    "20171161037"
  ],
  "applyId": "12413",
  "applyType": "课程新建",
  "statusFlag": "通过",
  "workFlowStatusId": "1003",
  "workFlowStatus": "通过",
  "applyContent": null,
  "szFileList": [],
  "otherFileList": [
    {
      "id": "116075",
      "containerId": "10000019038",
      "containerType": "CourseSupportingDocument",
      "fileName": "荷载与结构设计方法（英）课程大纲 2021版ok (1).docx",
      "fileSize": 47730,
      "description": null,
      "authorId": "20171161037",
      "uploadTime": "2024-04-01T14:35:05",
      "downloadCount": 28,
      "nameSpace": "KR_CM",
      "containerObjId": "b94b9d14-d065-4b02-b5e0-71aaf039d27b",
      "objId": "977fcf84-ddea-49b7-92ff-d28e31d9f7de",
      "previewAttachmentUrl": "http://172.20.216.42:9000/cpm/CourseSupportingDocument%2Fb94b9d14-d065-4b02-b5e0-71aaf039d27b.docx"
    }
  ],
  "editFlag": false
})
//从学校官网获取课程信息
function getCourseList() {
  const config = {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }
  try{
  axios.post('http://127.0.0.1:8080/course/search', {
    currentPage: searchParams.value.currentPage,
    pageSize: searchParams.value.pageSize,
    selectRange: searchParams.value.selectRange,
    courseStatus: searchParams.value.courseStatus,
    courseNameOrCode: searchParams.value.courseNameOrCode
  }, config).then((response) => {

    const data = (JSON.parse(response.data.data)).data
    console.log('下面为新获取的课程数据')
    console.log(data)
    if(!data){
      return ElMessage.error('您的token已过期！请重新录入！')
    }

    //先修改下面翻页栏的相应信息
    paginationInfo.value.totalElements = data.totalElements
    paginationInfo.value.totalPages=data.totalPages

    //再修改课程列表信息
    courseContent.value=data.content
    ElMessage.success('数据加载成功！')
  })
    }catch (e){
    console.log(e)
    ElMessage.error('token已过期，请重新录入！')
  }
}

//转到新的页面
function changePage(currentPage) {
  console.log('目标页面的页数为',currentPage)
  searchParams.value.currentPage = currentPage
  paginationInfo.value.currentPage = currentPage
  getCourseList()
}

function handleCommand(command) {
  switch (command) {
    case '全校': {
      searchParams.value.selectRange = '全校'
      break
    }
    case '我的学院': {
      searchParams.value.selectRange = '我的学院'
      break
    }
    case '已启用': {
      searchParams.value.courseStatus = '已启用'
      break
    }
    case '停用': {
      searchParams.value.courseStatus = '停用'
      break
    }
    case '10': {
      searchParams.value.pageSize = 10
      getCourseList()
      break
    }
    case '20': {
      searchParams.value.pageSize = 20
      getCourseList()
      break
    }
    case '50': {
      searchParams.value.pageSize = 50
      getCourseList()
      break
    }
    case '100': {
      searchParams.value.pageSize = 100
      getCourseList()
      break
    }
  }

}

onBeforeMount(() => {
  getCourseList()
})
</script>

<template>
  <Header title="重庆大学查课中心"/>
  <div class="main">
    <Section class="main-section">
      <Section class="search-section">
        <div class="select-div">
          <h3 style="margin-right: 15px">查询范围</h3>
          <el-dropdown @command="handleCommand">
            <el-button type="primary" plain size="large" style="font-size: 20px">{{ searchParams.selectRange }}
              <el-icon size="large">
                <arrow-down/>
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="全校">全校</el-dropdown-item>
                <el-dropdown-item command="我的学院">我的学院</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="select-div">
          <h3 style="margin-right: 15px">课程状态</h3>
          <el-dropdown @command="handleCommand">
            <el-button type="primary" plain size="large" style="font-size: 20px">{{ searchParams.courseStatus }}
              <el-icon size="large">
                <arrow-down/>
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="已启用">已启用</el-dropdown-item>
                <el-dropdown-item command="停用">停用</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="input-div">
          <h3>课程名称或代码：</h3>
          <el-input v-model="searchParams.courseNameOrCode" size="large"
                    clearable placeholder="名称或代码" autosize style="width: 200px"/>
        </div>
        <div class="select-div">
          <h3>搜索条数：</h3>
          <el-dropdown @command="handleCommand">
            <el-button type="primary" plain size="large" style="font-size: 20px">{{ searchParams.pageSize }}条/页
              <el-icon size="large">
                <arrow-down/>
              </el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="10">10条/页</el-dropdown-item>
                <el-dropdown-item command="20">20条/页</el-dropdown-item>
                <el-dropdown-item command="50">50条/页</el-dropdown-item>
                <el-dropdown-item command="100">100条/页</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>

        </div>
        <div class="select-div">
          <el-button type="primary" size="large" @click="getCourseList">
            <el-icon size="20">
              <Search/>
            </el-icon>
            <h2>搜索</h2>
          </el-button>
        </div>
      </Section>

      <Section class="content-section">
        <div class="course-table">
          <el-table :data="courseContent" stripe size="large"
                    max-height="900" table-layout="auto" border style="width: 100%">

            <el-table-column class-name="first-col" label="课程名称" prop="name" width="300" fixed/>
            <el-table-column class-name="eng-col" label="课程英文名称" prop="engName" width="400"/>
            <el-table-column class-name="second-col" label="课程代码" prop="code" width="140"/>
            <el-table-column class-name="common-col" label="部门" prop="deptName" width="200"/>
            <el-table-column class-name="common-col" label="层次" prop="degree" width="80"/>
            <el-table-column class-name="common-col" label="课程负责人" prop="courseInstructorInfo[0].name"
                             width="130"/>
            <el-table-column class-name="common-col" label="总学时" prop="totalHours" width="90"/>
            <el-table-column class-name="common-col" label="学分" prop="credit" width="100"/>
            <el-table-column class-name="common-col" label="培养方案引用" prop="trainingProgram" width="150"/>
            <el-table-column class-name="common-col" label="状态" prop="courseStatus"/>

          </el-table>
        </div>
      </Section>
      <!--      分页组件-->
      <div class="pagination-div">
        <Section class="pagination">
          <el-pagination
              v-model:current-page="paginationInfo.currentPage"
              :page-size="searchParams.pageSize"
              :size="'large'"
              :background="true"
              layout="total, prev, pager, next, jumper"
              :total="paginationInfo.totalElements"
              @current-change="changePage"
          />
        </Section>
      </div>
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
  justify-content: start;
}

.search-section {
  padding: 15px;
  background-color: #dce1ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-section {
  margin-top: 10px;
}

.course-table {
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* 浅蓝色阴影 */
  width: 100%;
}

.select-div {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-div {
  display: flex;
  align-items: center;
  width: fit-content;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.pagination {
  width: fit-content;
  padding: 10px;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  border: 1px solid #e4e4e4;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* 浅蓝色阴影 */
  transition: 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(5, 116, 234, 0.3); /* 浅蓝色阴影 */
    scale: 1.05;
  }
}

.pagination-div {
  width: 100%;
  justify-content: center;
  display: flex;
}
</style>