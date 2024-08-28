<template>
  <div class="container">
    <!-- Header Section -->
    <header class="header animate__animated animate__backInDown" >
      <img src="/src/students/StuChildren/picture/logo.png" alt="Chongqing University Logo" class="logo" />
      <form @submit.prevent="handleSearch" class="search-form">
        <input
            v-model="query"
            type="text"
            placeholder="网站检索"
            class="search-input"
            ref="searchInput"
            @input="onInput"
            @focus="showSuggestions = true"
            @blur="hideSuggestions"
        />
        <button class="search-button" @click="handleSearch">搜索</button>
        <transition name="fade">
          <div v-if="showSuggestions" class="suggestions">
            <ul>
              <li
                  v-for="suggestion in suggestions"
                  :key="suggestion.keyword"
                  @mousedown.prevent="navigateTo(suggestion.keyword)"
              >
                {{ suggestion.label }}
              </li>
            </ul>
          </div>
        </transition>
      </form>
    </header>
    <!-- Navigation Section -->
    <nav class="nav animate__animated animate__backInDown">
      <ul>
        <li style="background-color: lightgrey">
          <a class="nav-link" href="#">首页</a>
        </li>
        <li>
          <a href="http://localhost:5173/pessi" class="nav-link" target="_blank">校历</a>
        </li>
        <li>
          <a href="https://alumni.cqu.edu.cn/info/1011/1075.htm" class="nav-link" target="_blank">校训</a>
        </li>
        <li>
          <a href="https://www.shanghairanking.cn/institution/chongqing-university" class="nav-link" target="_blank">学校排名</a>
        </li>
        <li>
          <a href="https://faculty.cqu.edu.cn/jsxc.jsp?urltype=tree.TreeTempUrl&wbtreeid=1006" class="nav-link" target="_blank">教师查询</a>
        </li>
        <li>
          <a href="https://lems.cqu.edu.cn/" class="nav-link" target="_blank">教学设施</a>
        </li>
      </ul>
    </nav>

    <!-- Main Content Section -->
    <main class="main-content animate__animated animate__fadeIn">
      <!--信息公开清单-->
      <div class="list">
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/jbxx/xxjgsz_bxgm_bxjbqk.htm" target="_blank">
            <div class="image-container">
              <img :src="first" alt="基本信息">
              <p>基本信息</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/zsksxx/zszcjtslxzsbf_fpc_fklzsjh.htm" target="_blank">
            <div class="image-container">
              <img :src="second" alt="招生考试">
              <p>招生考试</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/cw_zcjsfxx/cw_zcglzd.htm" target="_blank">
            <div class="image-container">
              <img :src="third" alt="财务、资产及收费">
              <p>财务、资产及收费</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/rsszxx/xjldgbshjzqk.htm" target="_blank">
            <div class="image-container">
              <img :src="forth" alt="人事师资">
              <p>人事师资</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/jxzlxx/bkszqrzzxszsdbl_jssljjg.htm" target="_blank">
            <div class="image-container">
              <img :src="fifth" alt="教学质量">
              <p>教学质量</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/xsglfwxx/xjglbf.htm" target="_blank">
            <div class="image-container">
              <img :src="sixth" alt="学生管理服务">
              <p>学生管理服务</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/xfjsxx/xfjsjg.htm" target="_blank">
            <div class="image-container">
              <img :src="seventh" alt="学风建设">
              <p>学风建设</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/xw_xkxx/sybs_ss_xsxwdjbyq.htm" target="_blank">
            <div class="image-container">
              <img :src="eighth" alt="学位学科">
              <p>学位学科</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/dwjlyhzxx/zwhzbxqk.htm" target="_blank">
            <div class="image-container">
              <img :src="ninth" alt="对外交流与合作">
              <p>对外交流与合作</p>
            </div>
          </a>
        </div>
        <div class="item">
          <a href="https://gongkai.cqu.edu.cn/xxgkqd/qt/xszfkyj_lsfkyjzgqk.htm" target="_blank">
            <div class="image-container">
              <img :src="tenth" alt="其他">
              <p>其他</p>
            </div>
          </a>
        </div>
      </div>
      <div class="bottom" v-if="showBottomContent" :class="{ 'slide-in': showBottomContent }">
        <div class="news">
          <div class="title" style="font-size: 5vmin">
            <span>重大新闻</span>
            <hr />
          </div>
          <div class="newpic">
            <el-carousel trigger="click" height="70vmin" :arrow="always" style="width:98vmin">
              <el-carousel-item v-for="item in rotation" :key="item.name">
                <a :href="item.link" target="_blank">
                  <img :src="item.image" style="height:60%;width:100%;" alt="示例图" />
                </a>
                <p style="font-size: 3vmin;text-align: center">{{item.date}}&nbsp;&nbsp;{{item.title}}</p>
                <p style="font-size: 2.5vmin">{{item.content}}</p>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div class="right">
          <div class="m1">
            <div class="titles">
              <span>依申请公开</span>
            </div>
            <div class="text">
              <p>部门：重庆大学党办校办信息科</p>
              <p>地址：重庆市沙坪坝区沙正街174号重庆大学A区一大楼109办公室</p>
              <p>电话：023-65106831</p>
              <p>邮编：400044</p>
              <p>邮箱：xxgk@cqu.edu.cn</p>
            </div>
          </div>
          <div class="m2">
            <div class="titles">
              <span>监督投诉处理</span>
            </div>
            <div class="text">
              <p>部门：重庆大学纪检监察部门</p>
              <p>地址：重庆市沙坪坝区沙正街174号重庆大学A区行政楼4楼</p>
              <p>电话：023-65106714</p>
              <p>邮编：400044</p>
              <p>邮箱：cqujw@cqu.edu.cn</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Footer Section -->
    <footer class="footer">
      <p>地址：重庆市沙坪坝区沙正街174号 邮编:400044</p>
      <p>(C) Copyright Chongqing University All Rights Reserved.</p>
      <p>重庆大学 版权所有2012 （渝ICP备15007027号-4）</p>
    </footer>
  </div>
</template>

<script setup>
import first from "@/students/StuChildren/MsgQuery/images/index/qd/1.png";
import second from "@/students/StuChildren/MsgQuery/images/index/qd/2.png";
import third from "@/students/StuChildren/MsgQuery/images/index/qd/3.png";
import forth from "@/students/StuChildren/MsgQuery/images/index/qd/4.png";
import fifth from "@/students/StuChildren/MsgQuery/images/index/qd/5.png";
import sixth from "@/students/StuChildren/MsgQuery/images/index/qd/6.png";
import seventh from "@/students/StuChildren/MsgQuery/images/index/qd/7.png";
import eighth from "@/students/StuChildren/MsgQuery/images/index/qd/8.png";
import ninth from "@/students/StuChildren/MsgQuery/images/index/qd/9.png";
import tenth from "@/students/StuChildren/MsgQuery/images/index/qd/10.png";
</script>

<script>
export default {
  data() {
    return {
      showBottomContent: false,
      query: '',
      suggestions: [],
      showSuggestions: false,
      currentIndex: 0,
      rotation: [
        {
          id: 1,
          image:"/src/students/StuChildren/picture/summer.jpg",
          title: '重庆大学举办暑期实践活动',
          date: '2024-07-22',
          link: 'https://news.cqu.edu.cn/archives/news2/content/2024/07/22/530cf3bb5d9a0270a94b3e7b46f8a6a27c658cf4.html',
          content:
              '近日，学校全面启动2024年暑期社会实践活动，成功立项23个国家级专项志愿宣讲团和服务团、19个全国“知行计划”项目团队、25个重庆市重点团队以及73个校级重点团队，通过“三下乡+返家乡、集中+分散”的形式引导和帮助万余名学生在社会课堂中受教育、长才干、作贡献。',
        },
        {
          id: 2,
          image: "/src/students/StuChildren/picture/搬迁.jpg",
          title: '校园搬迁工作开展',
          date: '2024-07-15',
          link: 'https://news.cqu.edu.cn/archives/news2/content/2024/07/14/21167f311bd4768ed4d1eca9e961851b58d9eb01.html',
          content:
              '近日，重庆大学2024年本科生搬迁工作顺利开展。搬迁工作涉及校区之间搬迁和虎溪校区内部搬迁，其中，虎溪校区搬迁至沙坪坝校区、两江校区共11个学院91个行政班2334人，从沙坪坝校区搬迁至虎溪校区1个学院4个行政班123人，虎溪校区内部搬迁4190人。党委常委、副校长饶劲松到虎溪校区搬迁现场指导工作。',
        },
        {
          id: 3,
          image:"/src/students/StuChildren/picture/international.jpg",
          title: '重庆大学举办国际见面会',
          date: '2024-07-09',
          link: 'https://news.cqu.edu.cn/archives/jhnews/content/2024/07/09/0e9090fb6ec431a21ea117d138c93b8393fc7bc2.html',
          content:
              '7月8日上午，重庆大学校长助理李英民会见瓦努阿图执政党后座议员马塞利诺·巴赛莱米（MP Marcellino Barthelemy）率领的瓦努阿图议员代表团。',
        },
      ],
      // 包含页面关键字和导航链接的数组
      keywords: [
        { label: '首页', keyword: '首页', link: ' ' },
        { label: '校历', keyword: '校历', link: 'http://localhost:5173/pessi' },
        { label: '校训', keyword: '校训', link: 'https://alumni.cqu.edu.cn/info/1011/1075.htm' },
        { label: '学校排名', keyword: '学校排名', link: 'https://www.shanghairanking.cn/institution/chongqing-university' },
        { label: '教师查询', keyword: '教师查询', link: 'https://faculty.cqu.edu.cn/jsxc.jsp?urltype=tree.TreeTempUrl&wbtreeid=1006' },
        { label: '教学设施', keyword: '教学设施', link: 'https://lems.cqu.edu.cn/' },
        { label: '基本信息', keyword: '基本信息', link: 'https://gongkai.cqu.edu.cn/xxgkqd/jbxx/xxjgsz_bxgm_bxjbqk.htm' },
        { label: '招生考试', keyword: '招生考试', link: 'https://gongkai.cqu.edu.cn/xxgkqd/zsksxx/zszcjtslxzsbf_fpc_fklzsjh.htm' },
        { label: '财务、资产及收费', keyword: '财务、资产及收费', link: 'https://gongkai.cqu.edu.cn/xxgkqd/cw_zcjsfxx/cw_zcglzd.htm' },
        { label: '人事师资', keyword: '人事师资', link: 'https://gongkai.cqu.edu.cn/xxgkqd/rsszxx/xjldgbshjzqk.htm' },
        { label: '教学质量', keyword: '教学质量', link: 'https://gongkai.cqu.edu.cn/xxgkqd/jxzlxx/bkszqrzzxszsdbl_jssljjg.htm' },
        { label: '学生管理服务', keyword: '学生管理服务', link: 'https://gongkai.cqu.edu.cn/xxgkqd/xsglfwxx/xjglbf.htm' },
        { label: '学风建设', keyword: '学风建设', link: 'https://gongkai.cqu.edu.cn/xxgkqd/xfjsxx/xfjsjg.htm' },
        { label: '学位学科', keyword: '学位学科', link: 'https://gongkai.cqu.edu.cn/xxgkqd/xw_xkxx/sybs_ss_xsxwdjbyq.htm' },
        { label: '对外交流与合作', keyword: '对外交流与合作', link: 'https://gongkai.cqu.edu.cn/xxgkqd/dwjlyhzxx/zwhzbxqk.htm' },
        { label: '其他', keyword: '其他', link: 'https://gongkai.cqu.edu.cn/xxgkqd/qt/xszfkyj_lsfkyjzgqk.htm' },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBottomContent = true;
    }, 10); // 1秒后显示内容
  },
  methods: {
    handleSearch() {
      var keyWord = this.query;
      var filteredList = this.searchByRegExp(keyWord, this.keywords);
      this.renderSuggestions(filteredList);
    },
    hideSuggestions() {
      setTimeout(() => {
        this.showSuggestions = false;
      }, 100); // 延迟隐藏，以允许点击事件
    },
    onInput() {
      if (!this.cpLock) {
        console.log("字母搜索");
        var keyWord = this.query;
        var filteredList = this.searchByRegExp(keyWord, this.keywords);
        this.renderSuggestions(filteredList);
      }
    },
    renderSuggestions(list) {
      if (!(list instanceof Array)) {
        return;
      }
      this.suggestions = list;
      this.showSuggestions = this.suggestions.length > 0;
    },
    searchByRegExp(keyWord, list) {
      if (!(list instanceof Array)) {
        return [];
      }
      var reg = new RegExp(keyWord, 'i');
      return list.filter(item => reg.test(item.label));
    },
    navigateTo(keyword) {
      const selectedKeyword = this.keywords.find(item => item.keyword === keyword);
      if (selectedKeyword) {
        window.open(selectedKeyword.link, '_blank');
      }
      this.query = '';
      this.showSuggestions = false;
    },
  },
};
</script>

<style scoped>
.search-form {
  position: relative;
}

.suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ddd;
  z-index: 1000;
}

.suggestions ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.suggestions li {
  padding: 8px 12px;
  cursor: pointer;
}

.suggestions li:hover {
  background-color: #f0f0f0;
}
/* General Styles */
.container {
  width:100%;
  height:150%;
  background-size: cover;
  background-image: url("@/students/StuChildren/picture/虎溪-图书馆夏.jpg");

}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vmin;
  background-image: url("@/students/StuChildren/picture/bg.png");
  border-bottom: 0.2vmin solid #ddd;
}
.logo {
  height: 50px;
}
.search-form {
  display: flex;
  align-items: center;
}
.search-input {
  padding: 1vmin;
  border: 0.2vmin solid #ddd;
  border-radius: 0.8vmin;
}
.search-button {
  padding: 1vmin 2vmin;
  margin-left: 1vmin;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius:1vmin;
  cursor: pointer;
}

/* Navigation Styles */
.nav {
  background-color: cornflowerblue;
  padding: 2vmin 0;
}
.nav ul {
  font-family: "Microsoft YaHei", sans-serif;
  font-weight: bold;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}
.nav li {
  display: inline-block;
  position: relative;
}

.nav-link {
  display: block;
  padding: 2vmin 3vmin;
  font-size: 3vmin;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #ddd;
}

.nav-link:focus {
  outline: none;
  background-color: #ccc;
}


/*信息公开清单*/


.list{
  width:100%;
  height:30%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.item {
  display: flex; /* 使每个项在同一行显示 */
  text-align: center; /* 文字居中对齐 */
  margin: 0 5vmin 1vmin 5vmin; /* 添加间距 */
}

.image-container {
  border: 1vmin solid #ccc; /* 方框的边框样式 */
  padding: 3vmin; /* 方框内边距 */
  border-radius: 1vmin; /* 方框的圆角 */
  transition: box-shadow 0.3s; /* 添加过渡效果 */
  background-size: cover;
  background-image: url("@/students/StuChildren/picture/jianbian.avif");
  width:27vmin;
}

.image-container:hover {
  box-shadow: 0 0.5vmin 1vmin rgba(0, 0, 0, 0.2); /* 悬停时添加阴影效果 */
}

.list img {
  width: 7vmin;
  height: 7vmin;
}
/*news*/
.bottom{
  width:100%;
  height:70%;
  margin-top: 20vmin;
  display:flex;
  justify-content: space-between;
  transform: translateX(-100%); /* 开始时隐藏在左侧 */
  transition: transform 0.5s ease-in-out; /* 设置过渡效果 */
}

.slide-in {
  transform: translateX(0); /* 显示时滑动到原位置 */
}

.news{
  width:60%;
  height:75%;
  border-radius: 5vmin;
  margin-top: 0vmin;
  align-items: center;
}
.news  ul {
  list-style-type: none; /* 移除列表符号 */
  padding: 0; /* 移除默认的内边距 */
}

.news li {
  line-height: 4vmin; /* 增加行高以增大间距 */
  margin-bottom: 4vmin; /* 增加底部外边距以增大间距 */
  font-size: 3vmin;
  color: darkslategrey;
}
.newpic {
  flex-direction: row; /* 默认为横向排列 */
  width: 100.5%; /* 占据整个宽度 */
  height:98%;
  background-size: auto;
  margin-bottom: 5vmin;
  border: 2vmin solid #E99D42;
  background-color: lightyellow;
  margin-top: -25px;
}

a:link{color:black;}
a:visited {color:black;}  /* 已访问链接 */
a:hover {color:black;}  /* 鼠标移动到链接上 */
a:active {color:black;}  /* 鼠标点击时 */

/*right*/
.right{
  width:30%;
  height:80%;
  margin-top: 4vmin;
}
/*title*/
.text{
  margin-top: 3vmin;
  font-size: 3vmin;
  font-family: "FangSong", "仿宋", sans-serif;
}

.titles{
  line-height: 4vmin;
  font-size: 4vmin;
  overflow: hidden;
  position: relative;
  text-align: center;
  background-image: url("/src/students/StuChildren/picture/th.jpg");
}

.titles a{
  float: right;
  color: #004b9d;
  font-size: 2vmin;
  display: table;
  background: #ffffff;
  padding-left: 1.5vmin;
}

.titles::before{
  display: block;
  height: 0.2vmin;
  background: deepskyblue;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: -0.2vmin;
  content: "";
  z-index: -9;
}

/*信息*/
.m1{
  width: 100%;
  height:40%;
  border-radius: 5vmin;
  margin-bottom: 3vmin;
  background-size: cover; /* 调整图片大小以覆盖整个容器 */
  background-image: url("/src/students/StuChildren/picture/OIP-C.jpg");
}
.m2{
  width: 100%;
  height:48%;
  border-radius: 5vmin;
  background-size: cover; /* 调整图片大小以覆盖整个容器 */
  background-image: url("/src/students/StuChildren/picture/OIP-C.jpg");
}
/* Main Content Styles */
.main-content {
  padding: 2vmin;
  height:85%;
}
/* Footer Styles */
.footer {
  background-color: #f8f8f8;
  height: 15%;
  padding: 2vmin;
  text-align: center;
  border-top: 0 solid #ddd;
  background-size: cover;
  background-image: url("/src/students/StuChildren/picture/R-C.jpg");
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 3vmin;
  color:aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
a {
  text-decoration: none;
}
</style>

