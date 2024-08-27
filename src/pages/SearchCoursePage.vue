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

//从学校官网获取课程信息
function getCourseList() {
  const config = {
    headers: {
      'Authorization': localStorage.getItem('cqu-jwt')
    }
  }
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

    //先修改下面翻页栏的相应信息
    paginationInfo.value.totalElements = data.totalElements
    paginationInfo.value.totalPages=data.totalPages

    //再修改课程列表信息
    courseContent.value=data.content
    ElMessage.success('数据加载成功！')
  })
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
      break
    }
    case '20': {
      searchParams.value.pageSize = 20
      break
    }
    case '50': {
      searchParams.value.pageSize = 50
      break
    }
    case '100': {
      searchParams.value.pageSize = 100
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