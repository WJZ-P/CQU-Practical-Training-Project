<script setup>
import {onBeforeMount, ref} from "vue";
import Section from "@/components/UtilsComponnet/Section.vue";
import axios from "axios";
import {ElMessage} from "element-plus";
import "animate.css"
import Header from "@/components/Header.vue";

let selectedList = ref({major: [], commonSense: [], unLimited: []});//主修，通识，非限
let obtainedOfficialCourseList = ref()
const majorCourseList = ref([])
const commonSenseCourseList = ref([])
const unLimitedCourseList = ref([])

const selectedCourseInfo = ref({
  count: 0,
  credit: 0,
})

let allCourseList = ref([])//所有课程的列表，存储正在选择的所有课程信息

let obtainedCourseList = ref([])//存储从后台中获取到的，已选择并且成功提交的所有课程信息
let obtainedCourseInfo = ref([])//存储从后台中获取到的，已选择并且成功提交的所有课程的学分信息

//在勾选新的课程的时候，统计对应的总门数和总学分数,并且修改allCourseList
function courseChangeListener() {
  let newCourseList = []
  let newcredit = 0;
  let count = 0;
  for (let kind in selectedList.value) {//遍历所有的课程
    for (let everyClass of selectedList.value[kind]) {
      newcredit += Number(everyClass.credit);
      count++;
      newCourseList.push(everyClass)
      //allCourseList.value.push(everyClass)
    }
  }
  selectedCourseInfo.value.count = count
  selectedCourseInfo.value.credit = newcredit
  allCourseList.value = newCourseList
}


//计算已经从后台获得的所有课程数据的学分综合
async function obtainedCourseCount() {
  let newcredit = 0;
  let count = 0;
  for (let kind in obtainedCourseList.value) {//遍历所有的课程
    newcredit += parseFloat(obtainedCourseList.value[kind].courseCredit);
    count++;
  }
  obtainedCourseInfo.value.count = count
  obtainedCourseInfo.value.credit = newcredit
}

function handleMajorSelectChange(value) {
  console.log('下面在这里打印出value')
  console.log(value)
  selectedList.value.major = value//把多选的结果存入到selectedList内，供后续使用
  console.log('下面是selectedList')
  console.log(selectedList.value)
  courseChangeListener()
}

function handleMinorSelectChange(value) {

  console.log(value)
  selectedList.value.minor = value//把多选的结果存入到selectedList内，供后续使用
  console.log(selectedList.value)
  courseChangeListener()
}

function handleUnLimitedSelectChange(value) {

  console.log(value)
  selectedList.value.unLimited = value//把多选的结果存入到selectedList内，供后续使用
  console.log(selectedList.value)
  courseChangeListener()
}

async function submit(credit, jwt) {
  // 如果学分超出上限
  if (credit > 28) {
    ElMessage.error("所选课程超出学分上限（28分）")
  }
  // 若学分未超出上限，则进行正常提交流程
  else {
    ElMessage.success("选课申请提交成功")
  }
}

//每次加载页面时自动执行获取后台学生已经选择的课程信息
//jwt暂时是写死的，需要修改为动态的
onBeforeMount(async () => {
  console.log("从重庆大学官网获取选课数据中");
  ElMessage.success('正在拉取课程信息，请稍候')
  await getOfficialCourseInfo(localStorage.getItem('cqu-jwt'));

  console.log("从后台获取个人选课数据中");
  await getCourseInfo(localStorage.getItem('cqu-jwt'));

  console.log("调用计算学分的功能");
  await obtainedCourseCount();
})

//通过jwt获取学生已经选择的课程信息
async function getCourseInfo(jwt) {
  try {
    const config = {
      headers: {
        'Authorization': jwt
      }
    }
    const response = await axios.post(`http://127.0.0.1:8080/course`, {}, config);
    obtainedCourseList.value = JSON.parse(response.data.data)
    obtainedCourseList.value = obtainedCourseList.value.alreadySelectCourseListVOs;
    console.log('成功获取个人个人选课数据:');
    ElMessage.success("成功获取个人个人选课数据");
  } catch (error) {
    console.error('获取个人个人选课数据失败:', error);
    ElMessage.error("获取个人个人选课数据失败，可能是您尚未选课，或者请检查您的网络连接或稍后再试。");
  }
}

//通过jwt获取重庆大学官网上的所有课程信息
async function getOfficialCourseInfo(jwt) {
  try {
    const config = {
      headers: {
        'Authorization': jwt
      }
    }
    const response = await axios.put(`http://127.0.0.1:8080/course`, {}, config);
    console.log('[获取官网选课信息]')
    console.log(response)
    // 两层获取data层级以获取到以字符串格式存储的数据,此时获取到的内容是字符串，需要进行转换，转换之后再获取data就是需要的数据
    console.log((JSON.parse(response.data.data))?.error_description)
    if((JSON.parse(response.data.data))?.error_description!==undefined) return ElMessage.error('获取官网选课信息失败，请更新token后再试！');

    obtainedOfficialCourseList.value = JSON.parse(response.data.data);
    obtainedOfficialCourseList.value = obtainedOfficialCourseList.value.data;
    // 获取专业课
    majorCourseList.value = obtainedOfficialCourseList.value[0];
    majorCourseList.value = majorCourseList.value.courseVOList;
    // 获取通识课
    commonSenseCourseList.value = obtainedOfficialCourseList.value[1];
    commonSenseCourseList.value = commonSenseCourseList.value.courseVOList;
    // 获取非限课
    unLimitedCourseList.value = obtainedOfficialCourseList.value[2];
    unLimitedCourseList.value = unLimitedCourseList.value.courseVOList;
    ElMessage.success("成功获取选课列表");
  } catch (error) {
    console.error('获取选课列表失败:', error);
    ElMessage.error("获取选课列表失败，请检查您的网络连接或稍后再试。");
  }
}


</script>

<template>
  <div style="display: flex;flex-direction: column;background-color: #e6effa;width: 100%;height: 100%">
    <Header title="重庆大学在线选课系统"/>
    <div style="display: flex;justify-content: center;">
      <Section class="main-section">
        <div class="simulate-select-div">
          <div class="table-class">
            <div class="box-div">
              <h3>主修专业课程</h3>
              <el-table :data="majorCourseList" stripe
                        @selection-change="handleMajorSelectChange" size="large"
                        max-height="500" table-layout="auto" border class-name="class-table" style="width: 100%">
                <el-table-column class="table-column" class-name="first-col" label="课程名字" prop="name" width="200"/>
                <el-table-column class="table-column" class-name="second-col" label="课程代码" prop="codeR"
                                 width="140"/>
                <el-table-column class="table-column" class-name="common-col" label="学分" prop="credit" width="100"/>
                <el-table-column class="table-column" class-name="common-col" label="校区" prop="campusShortNameSet"
                                 width="150"/>
                <el-table-column class="table-column" class-name="common-col" label="课程类别" prop="courseCategory"
                                 width="180"/>
                <el-table-column class="table-column" class-name="common-col" label="课程性质" prop="courseNature"
                                 width="120"/>
                <el-table-column class="table-column" class-name="common-col" label="所属学院" prop="departmentName"/>
                <el-table-column class="table-column" class-name="common-col" fixed="right" type="selection"/>
              </el-table>
            </div>
            <div class="box-div">
              <h3>通识教育课程</h3>
              <el-table :data="commonSenseCourseList" stripe
                        @selection-change="handleMinorSelectChange" size="large"
                        max-height="700" table-layout="auto" border>
                <el-table-column class="table-column" class-name="first-col" label="课程名字" prop="name" width="200"/>
                <el-table-column class="table-column" class-name="second-col" label="课程代码" prop="codeR"
                                 width="120"/>
                <el-table-column class="table-column" class-name="common-col" label="学分" prop="credit" width="100"/>
                <el-table-column class="table-column" class-name="common-col" label="校区" prop="campusShortNameSet"
                                 width="150"/>
                <el-table-column class="table-column" class-name="common-col" label="课程类别" prop="courseCategory"
                                 width="180"/>
                <el-table-column class="table-column" class-name="common-col" label="课程性质" prop="courseNature"
                                 width="120"/>
                <el-table-column class="table-column" class-name="common-col" label="所属学院" prop="departmentName"/>
                <el-table-column class="table-column" class-name="common-col" fixed="right" type="selection"/>
              </el-table>
            </div>
            <div class="box-div">
              <h3>非限制选修课程</h3>
              <el-table :data="unLimitedCourseList" stripe
                        @selection-change="handleUnLimitedSelectChange" size="large"
                        max-height="1000" table-layout="auto" border>
                <el-table-column class-name="first-col" label="课程名字" prop="name" width="200"/>
                <el-table-column class-name="second-col" label="课程代码" prop="codeR"
                                 width="120"/>
                <el-table-column class-name="common-col" label="学分" prop="credit" width="100"/>
                <el-table-column class-name="common-col" label="校区" prop="campusShortNameSet"
                                 width="150"/>
                <el-table-column class-name="common-col" label="课程类别" prop="courseCategory"
                                 width="180"/>
                <el-table-column class-name="common-col" label="课程性质" prop="courseNature"
                                 width="120"/>
                <el-table-column class-name="common-col" label="所属学院" prop="departmentName"/>
                <el-table-column class-name="common-col" fixed="right" type="selection"/>
              </el-table>
            </div>
          </div>
        </div>
        <!--整个页面右边部分的盒子-->
        <div class="show-box">
          <!--展示左边选择的课程-->
          <div class="show-selected-div">
            <Section style="background-color: #abc6e1;width: 100%;height: fit-content;margin-top: 10px">
              <h2 style="font-size: 2vw">当前选择课程&nbsp;</h2>
              <h2 style="color: #52c41a;font-size: 2vw">{{ selectedCourseInfo.count }}&nbsp;</h2>
              <h2 style="font-size: 2vw">门</h2>
              <h2 style="color: #52c41a;font-size: 2vw">&nbsp;{{ selectedCourseInfo.credit }}&nbsp;</h2>
              <h2 style="font-size: 2vw">学分</h2>
            </Section>
            <Section class="show-selected-section">
              <li v-for="item in allCourseList" :key="item.name">
                <Section class="course-section animate__animated animate__backInRight">
                  <h3 v-if="item.courseNature==='必修'" class="course-nature">{{ item.courseNature }}</h3>
                  <h3 v-if="item.courseNature==='选修'" class="course-nature" style="color:gray">
                    {{ item.courseNature }}</h3>
                  <p class="course-name">{{ item.name }}</p>
                  <h4>{{ item.credit }}&nbsp;学分</h4>
                </Section>
              </li>
              <button v-if="allCourseList.length===0" style="background-color: transparent;border: none"></button>
              <button v-else-if="selectedCourseInfo.credit<=28"
                      @click="submit(selectedCourseInfo.credit,'jwt')"
                      class="submit animate__animated animate__backInUp">选课
              </button>
              <button v-else @click="submit(selectedCourseInfo.credit,'jwt')"
                      class="submit" style="background-color: gray">选课
              </button>
            </Section>
          </div>

          <!--展示已选择的课程-->
          <div class="show-selected-div">
            <Section style="background-color: #abc6e1;width: 100%;height: fit-content;margin-top: 10px">
              <h2 style="font-size: 2vw">已选择课程&nbsp;</h2>
              <h2 style="color: #52c41a;font-size: 2vw">{{ obtainedCourseInfo.count }}&nbsp;</h2>
              <h2 style="font-size: 2vw">门</h2>
              <h2 style="color: #52c41a;font-size: 2vw">&nbsp;{{ obtainedCourseInfo.credit }}&nbsp;</h2>
              <h2 style="font-size: 2vw">学分</h2>
            </Section>
            <Section class="show-selected-section">
              <li v-for="item in obtainedCourseList" :key="item.name">
                <Section class="course-section animate__animated animate__backInRight">
                  <h3 v-if="item.courseNature==='必修'" class="course-nature">{{ item.courseNature }}</h3>
                  <h3 v-if="item.courseNature==='选修'" class="course-nature" style="color:gray">{{
                      item.courseNature
                    }}</h3>
                  <p class="course-name">{{ item.courseName }}</p>
                  <h4>{{ item.courseCredit }}&nbsp;学分</h4>
                </Section>
              </li>
            </Section>
          </div>

        </div>
      </Section>
    </div>
  </div>
</template>


<style>

.main-section {
  width: 100%;
  margin: 15px;
  padding: 15px;
  display: flex;
  justify-content: start;
  align-items: start;
}

/*装载所有table的div */
.table-class {
  margin-right: 30px;
  width: 100%;
}

.simulate-select-div {
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 70%;
}

.box-div {
  width: 100%;
  border: 1px solid #e6effa;
  box-shadow: 0 0 10px #e6effa;
  padding: 10px;
  margin: 10px 5px 10px 0;
}

.show-box {
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.show-selected-div {
  width: 100%;
  display: flex;
  justify-content: start;
  height: 550px;
  flex-direction: column;
  overflow: scroll;
}

.show-selected-section {
  background-color: #e4e9ee;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
  box-shadow: 0 0 10px #e6effa;
}

.course-section {
  margin: 5px 0 5px 0;
  height: 50px;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
  padding: 0 10px 0 10px;
  transition: 0.2s ease-in-out;
  background-color: #f9fcfc;
  box-shadow: 0 0 15px #e6effa;

  &:hover {
    scale: 1.03;
    box-shadow: 0 0 10px #e6effa;
  }
}

.course-name {
  font-size: 1.3vw;
  font-weight: bold;
  color: #188ffd;
}

li {
  list-style: none;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 20px;
}

.course-nature {
  color: #51c21a;
  font-size: 1vw;
}

.first-col {
  color: #188ffd;
  font-size: large;
}

.second-col {
  color: #bbbbbb;
  font-size: large;
}

.eng-col {
  font-size: 18px;
}

.common-col {
  font-size: large;
  justify-content: center;
  align-items: center;
}

.class-table {
  width: 100%;
}

.submit {
  margin-left: 35%;
  width: 30%;
  height: 2vw;
  border-radius: 10px;
  background-color: #51c21a;
  color: white;
  font-size: 1vw;
  transition: 0.2s ease;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
}
</style>