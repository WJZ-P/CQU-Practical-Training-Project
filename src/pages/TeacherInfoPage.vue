<script setup>

import Header from "@/components/Header.vue";
import Section from "@/components/UtilsComponnet/Section.vue";
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import {ArrowDown, Search} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
import "animate.css"
const myTeacherData = ref([
  {
    "uid": 13432,
    "teacherId": 13310,
    "name": "田羽锋",
    "tipName": "田羽锋",
    "showName": "田羽锋",
    "teacherName": "田羽锋",
    "tspraisecount": 0,
    "url": "http://faculty.cqu.edu.cn/YufengTian/zh_CN/index.htm",
    "ename": "Yufeng Tian",
    "profile": "",
    "sex": "男",
    "prorank": "",
    "gtutor": "",
    "doctorTutor": "",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/10/rBTYGGbJeeaASIVDAAFhlVrMeQs913.png?randomid=1724750551749",
    "picId": "u_u9_13310pic",
    "clickTimes": 162,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 162
  },
  {
    "uid": 12595,
    "teacherId": 12583,
    "name": "姜慧",
    "tipName": "姜慧",
    "showName": "姜慧",
    "teacherName": "姜慧",
    "tspraisecount": 10,
    "url": "http://faculty.cqu.edu.cn/HuiJiang/zh_CN/index.htm",
    "ename": "Hui Jiang",
    "profile": "2015年毕业于中国科学院电工研究所，获工学博士学位，后进入重庆大学电...",
    "sex": "女",
    "prorank": "副教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/10/rBTYGGbMHLOAfktgAAGazgLDaF4696.png?randomid=1724750551761",
    "picId": "u_u9_12583pic",
    "clickTimes": 4112,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 4112
  },
  {
    "uid": 10570,
    "teacherId": 10558,
    "name": "李寒宇",
    "tipName": "李寒宇",
    "showName": "李寒宇",
    "teacherName": "李寒宇",
    "tspraisecount": 58,
    "url": "http://faculty.cqu.edu.cn/HanyuLi/zh_CN/index.htm",
    "ename": "Hanyu Li",
    "profile": "基本信息\n博士，教授，博士生导师  \n教育背景\n2005/09--2009/06，重庆大...",
    "sex": "男",
    "prorank": "教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/07/rBTYGWJedK6AZ3DJAAHv5ohChHk880.png?randomid=1724750551775",
    "picId": "u_u9_10558pic",
    "clickTimes": 12573,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 12573
  },
  {
    "uid": 13528,
    "teacherId": 13407,
    "name": "邱越",
    "tipName": "邱越",
    "showName": "邱越",
    "teacherName": "邱越",
    "tspraisecount": 664,
    "url": "http://faculty.cqu.edu.cn/qiuyue/zh_CN/index.htm",
    "ename": "",
    "profile": "邱越，代尔夫特理工大学计算数学博士，中国工业与应用数学学会（CSIAM）...",
    "sex": "男",
    "prorank": "副教授",
    "gtutor": "研究生导师",
    "doctorTutor": "",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/0C/rBTYGWRBIBeAFBtVAAG1V2Soofw202.png?randomid=1724750551790",
    "picId": "u_u9_13407pic",
    "clickTimes": 22155,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 22155
  },
  {
    "uid": 12567,
    "teacherId": 12555,
    "name": "李艳涛",
    "tipName": "李艳涛",
    "showName": "李艳涛",
    "teacherName": "李艳涛",
    "tspraisecount": 76,
    "url": "http://faculty.cqu.edu.cn/liyantao/zh_CN/index.htm",
    "ename": "Yantao Li",
    "profile": "",
    "sex": "男",
    "prorank": "教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/0B/rBTYGGQUc26ABXtvAAGv5LyLVsc239.png?randomid=1724750551804",
    "picId": "u_u9_12555pic",
    "clickTimes": 11042,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 11042
  },
  {
    "uid": 13564,
    "teacherId": 13442,
    "name": "赵凯",
    "tipName": "赵凯",
    "showName": "赵凯",
    "teacherName": "赵凯",
    "tspraisecount": 3,
    "url": "http://faculty.cqu.edu.cn/zhaokai/zh_CN/index.htm",
    "ename": "",
    "profile": "赵凯博士，自动化学院教授，博导，自动化系主任。先后在澳大利亚纽卡斯...",
    "sex": "男",
    "prorank": "教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/10/rBTYGWa7AoaAAFGSAAFSIPxmEkI060.png?randomid=1724750551817",
    "picId": "u_u9_13442pic",
    "clickTimes": 810,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 810
  },
  {
    "uid": 10083,
    "teacherId": 10071,
    "name": "凌睿",
    "tipName": "凌睿",
    "showName": "凌睿",
    "teacherName": "凌睿",
    "tspraisecount": 0,
    "url": "http://faculty.cqu.edu.cn/RuiLing/zh_CN/index.htm",
    "ename": "Rui Ling",
    "profile": "",
    "sex": "男",
    "prorank": "教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/10/rBTYGWbCtEKAJKszAAHgCk_gtlA923.png?randomid=1724750551830",
    "picId": "u_u9_10071pic",
    "clickTimes": 26,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 26
  },
  {
    "uid": 12762,
    "teacherId": 12750,
    "name": "杨伟",
    "tipName": "杨伟",
    "showName": "杨伟",
    "teacherName": "杨伟",
    "tspraisecount": 61,
    "url": "http://faculty.cqu.edu.cn/WEIYANG/zh_CN/index.htm",
    "ename": "WEI YANG",
    "profile": "\n核心理念：让每一个学生变得更好！\n师生理念：亦师亦友，彼此照亮旅程...",
    "sex": "男",
    "prorank": "副教授",
    "gtutor": "研究生导师",
    "doctorTutor": "博士生导师",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/0D/rBTYGWSWtQ6ARp2sAAFPBii_pJA526.png?randomid=1724750551842",
    "picId": "u_u9_12750pic",
    "clickTimes": 18174,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 18174
  },
  {
    "uid": 12796,
    "teacherId": 12784,
    "name": "陈渝",
    "tipName": "陈渝",
    "showName": "陈渝",
    "teacherName": "陈渝",
    "tspraisecount": 1,
    "url": "http://faculty.cqu.edu.cn/YuChen11111/zh_CN/index.htm",
    "ename": "",
    "profile": "",
    "sex": "女",
    "prorank": "讲师",
    "gtutor": "研究生导师",
    "doctorTutor": "",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/10/rBTYGGa2x5mAawpJAAG9BPRezr0018.png?randomid=1724750551854",
    "picId": "u_u9_12784pic",
    "clickTimes": 563,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 563
  },
  {
    "uid": 13855,
    "teacherId": 13733,
    "name": "喻文昊",
    "tipName": "喻文昊",
    "showName": "喻文昊",
    "teacherName": "喻文昊",
    "tspraisecount": 3,
    "url": "http://faculty.cqu.edu.cn/yuwenhao/zh_CN/index.htm",
    "ename": "",
    "profile": "",
    "sex": "男",
    "prorank": "副教授",
    "gtutor": "研究生导师",
    "doctorTutor": "",
    "academician": "",
    "picUrl": "/_resources/group1/M00/00/0F/rBTYGWZa18GAZd-KAAGpTYngPDo490.png?randomid=1724750551869",
    "picId": "u_u9_13733pic",
    "clickTimes": 650,
    "mail": "",
    "mobilephone": "",
    "phone": "",
    "address": "",
    "fax": "",
    "zipcode": "",
    "showClickTimes": 650
  }
])

const searchParams = ref({
  name: '',
  pagesize: 20,
})
const paginationInfo = ref({
  totalnum: 973,
  totalpage: 98,
  currentPage: 1,
})
const srcPrefix = "https://faculty.cqu.edu.cn"

function getTeachersList() {
  ElMessage.warning('加载中...')
  const config = {
    headers: {'Authorization': localStorage.getItem('cqu-jwt')}
  }
  axios.post('http://127.0.0.1:8080/teacher', {
    name: searchParams.value.name,
    pagesize: searchParams.value.pagesize,
    pageindex: paginationInfo.value.currentPage
  }, config)
      .then(res => {
        const newTeacherData = JSON.parse(res.data.data)//解析json数据

        console.log(newTeacherData)
        paginationInfo.value.totalnum = newTeacherData.totalnum
        paginationInfo.value.totalpage = newTeacherData.totalpage
        myTeacherData.value = newTeacherData.teacherData
        ElMessage.success('消息加载成功！')
      })
}

function handleCommand(command) {
  switch (command) {
    case '10': {
      searchParams.value.pagesize = 10
      getTeachersList()
      break
    }
    case '20': {
      searchParams.value.pagesize = 20
      getTeachersList()
      break
    }
    case '50': {
      searchParams.value.pagesize = 50
      getTeachersList()
      break
    }
    case '100': {
      searchParams.value.pagesize = 100
      getTeachersList()
      break
    }
  }
}


function changePage(currentPage) {
  paginationInfo.value.currentPage = currentPage
  getTeachersList()
}

onBeforeMount(() => {
  getTeachersList()

})
</script>

<template>

  <div class="main">
    <Header title="重庆大学教师信息查询中心" style="width: 100%"/>
    <Section class="search-section">
      <div class="input-div">
        <h3>教师名称：</h3>
        <el-input v-model="searchParams.name" size="large"
                  clearable placeholder="姓名" autosize style="width: 200px"/>
      </div>
      <div class="select-div">
        <el-dropdown @command="handleCommand">
          <el-button type="primary" plain size="large" style="font-size: 20px">{{ searchParams.pagesize }}条/页
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

        <el-button type="primary" size="large" @click="getTeachersList">
          <el-icon size="20">
            <Search/>
          </el-icon>
          <h2>搜索</h2>
        </el-button>
      </div>
    </Section>
    <Section class="info-section">

      <template v-for="teacherInfo in myTeacherData" class="card-template">
        <el-card class="card animate__animated animate__fadeInUp">
          <a :href="teacherInfo.url">
            <img class="avatar-img" :src="srcPrefix+teacherInfo.picUrl" alt="教师照片">
          </a>
          <h2 style="text-align: center;color: #13559a">{{ teacherInfo.name }}</h2>
          <h3 style="text-align: center;color: #4d5054;margin-top: 10px;margin-bottom: -15px">
            职称：{{ teacherInfo.prorank ? teacherInfo.prorank : '暂无' }}</h3>

        </el-card>
      </template>

      <!--      分页组件-->
    </Section>
    <Section style="margin-top: 15px;border-radius: 50px;width:70%;padding: 5px">
      <div class="pagination-div">
        <Section class="pagination">
          <el-pagination
              v-model:current-page="paginationInfo.currentPage"
              :page-size="searchParams.pagesize"
              :size="'large'"
              :background="true"
              layout="total, prev, pager, next, jumper"
              :total="paginationInfo.totalnum"
              @current-change="changePage"
          />
        </Section>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
}

.search-section {
  padding: 5px 25px 5px 25px;
  background-color: #dce1ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.info-section {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  max-height: 1050px;
  overflow: auto;
}

.card-template {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 15px;
}

.card {
  padding: 10px;
  margin: 15px;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.25s ease-in-out;

  &:hover {
    scale: 1.1;
    box-shadow: 0 0 3px #5ac5d7;
  }
}

.avatar-img {
  max-height: 250px;
  width: fit-content;
  transition: 0.25s ease-in-out;

  &:hover {
    scale: 1.05;

  }
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

.input-div {
  display: flex;
  align-items: center;
  width: fit-content;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.select-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
</style>