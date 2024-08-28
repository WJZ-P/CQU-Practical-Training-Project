<script setup>

import Header from "@/components/Header.vue";
import Section from "@/components/UtilsComponnet/Section.vue";
import {ArrowDown, Search} from "@element-plus/icons-vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";


const courseContent = ref([])
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

const detailedData = ref({})//从学校官网获取课程信息
function getCourseList() {
  const config = {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }
  try {
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
      if (!data) {
        return ElMessage.error('您的token已过期！请重新录入！')
      }

      //先修改下面翻页栏的相应信息
      paginationInfo.value.totalElements = data.totalElements
      paginationInfo.value.totalPages = data.totalPages

      //再修改课程列表信息
      courseContent.value = data.content
      ElMessage.success('数据加载成功！')
    })
  } catch (e) {
    console.log(e)
    ElMessage.error('token已过期，请重新录入！')
  }
}

//转到新的页面
function changePage(currentPage) {
  console.log('目标页面的页数为', currentPage)
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

function handleExpandChange(expandedRows, expanded) {
  if (expanded.length === 0) {//为关闭行的展开
    detailedData.value = {}
    return;
  }//已经打开的长度是0，说明是关闭

  console.log(expandedRows)
  //否则执行更新详细内容
  axios.post('http://127.0.0.1:8080/courseDetail', {
    courseId: expandedRows.id
  }, {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }).then(res => {
    const newData = (JSON.parse(res.data.data)).data
    console.log(newData)
    detailedData.value = newData
  })

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
                    max-height="1050px" table-layout="auto"
                    align="center" border style="width: 100%" @expand-change="handleExpandChange">

            <el-table-column class-name="expand-col" lable="点击展开" width="50" fixed type="expand">

              <div class="detailed-info-class">
                <div class="single-row">
                  <h1 style="width: 150px">课程大类：</h1>
                  <h2 style="color: black">{{ detailedData.courseOutlineCategory }}</h2>
                </div>
                <div class="single-row">
                  <h1 style="width: 450px">课程描述：</h1>
                  <h3>
                    {{ detailedData?.description?.replace(/<[^>]*>/g, '') }}
                  </h3>
                </div>
                <div class="single-row">
                  <h1 style="width: 900px">课程英文描述：</h1>
                  <h3>
                    {{ detailedData?.englishDescription?.replace(/<[^>]*>/g, '') }}
                  </h3>
                </div>
                <div class="single-row">
                  <div style="display: flex;align-items: center">
                    <h1 style="width: 150px">课程模式：</h1>
                    <h2 style="text-align: start;color: #3583da;font-size: 25px">
                      {{ detailedData?.courseFormatVOList?.[0].courseFormatCateName }}
                    </h2>
                    <h2 style="margin-left: 40px">理论学时：</h2>
                    <h2>{{ detailedData?.courseFormatVOList?.[0].courseActivityList?.[0].durationLength }}&nbsp;小时</h2>
                    <h2 style="margin-left: 40px">实践学时：</h2>
                    <h2>
                      {{
                        detailedData?.courseFormatVOList?.[0]?.courseActivityList?.[0]?.courseActivityChildList?.[0]?.durationLength?
                        detailedData?.courseFormatVOList?.[0]?.courseActivityList?.[0]?.courseActivityChildList?.[0]?.durationLength:0
                      }}&nbsp;小时</h2>
                  </div>

                </div>
              </div>

            </el-table-column>

            <el-table-column class-name="first-col" label="课程名称" prop="name" width="400" fixed/>
            <el-table-column class-name="eng-col" label="课程英文名称" prop="engName" width="550"/>
            <el-table-column class-name="second-col" label="课程代码" prop="code" width="140"/>
            <el-table-column class-name="common-col" label="部门" prop="deptName" width="200"/>
            <el-table-column class-name="common-col" label="层次" prop="degree" width="100"/>
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

.detailed-info-class {
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 10px 15px;
}

.single-row {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 25px;
  margin-top: 15px;
}
</style>