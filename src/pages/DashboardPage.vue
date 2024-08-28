<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="28vmin" class="sidebar animate__animated animate__backInLeft">
      <img src="@/students/StuChildren/picture/logol.png" alt="logo" class="logo"/>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" background-color="#bbcad7"
               text-color="#000000FF" active-text-color="#409EFF">
        <el-sub-menu index="1">
          <template #title>
            <i class="el-icon-s-tools"></i>
            <span>首页</span>
          </template>
        </el-sub-menu>
        <!-- 管理系统父菜单项 -->
        <el-sub-menu index="2">
          <template #title>
            <i class="el-icon-s-tools"></i>
            <span>管理系统</span>
          </template>
          <!-- 子菜单项 -->
          <el-menu-item index="2-1">宿舍管理</el-menu-item>
          <el-menu-item index="2-2">课程管理</el-menu-item>
          <el-menu-item index="2-3">竞赛管理</el-menu-item>
          <el-menu-item index="2-4">成绩管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <i class="el-icon-s-tools"></i>
            <span>通知公告</span>
          </template>
        </el-sub-menu>
        <RouterLink to="/TeacherMenu/bigScreen" style="text-decoration:none">
          <el-sub-menu index="4">

            <template #title>
              <i class="el-icon-s-tools"></i>
              <span>数据分析</span>
            </template>

          </el-sub-menu>
        </RouterLink>
      </el-menu>
    </el-aside>

    <!-- 内容区域 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class=" animate__animated animate__backInDown"
                 style="background-image: url(https://th.bing.com/th?id=OIP.nIGmmc98M9MepYDlefRsSQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2)">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="8">
            <h3 class="platform-name">学校信息管理平台</h3>
          </el-col>
          <el-col :span="8" class="user-info">
            <el-avatar src="@/students/StuChildren/picture/logol.png"/>
            <span>{{ username }}</span>
          </el-col>
        </el-row>
      </el-header>

      <!-- 主内容区域 -->
      <el-main class="animate__animated animate__backInUp">
        <!-- 操作栏 -->
        <el-card class="box-card">
          <el-input v-model="searchName" placeholder="请输入寝室楼栋" size="small" class="filter-input"></el-input>
          <el-button type="primary" size="small" @click="searchDormitory" round>搜索</el-button>
          <el-button type="primary" size="small" color="orange" class="button" @click="handleCreate" round>新增
          </el-button>
        </el-card>

        <!-- 数据列表 -->
        <el-card class="box-card data">
          <el-table :data="tableData" style="width: 100%" size="large" max-height="2000">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="buildingId" label="寝室楼栋" width="180"></el-table-column>
            <el-table-column prop="floor" label="寝室楼层"></el-table-column>
            <el-table-column prop="roomNum" label="寝室房间"></el-table-column>
            <el-table-column label="操作" align="center" width="180px">
              <template v-slot="scope">
                <el-button type="primary" size="small" @click="handleEdit(scope.row)" plain>编辑</el-button>
                <el-button type="danger" size="small" @click="deleteDormitory(scope.row)" plain>删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="pagination.currentPage" :page-size="pagination.pageSize"
                         layout="total, prev, pager, next, jumper" :total="pagination.total"/>
        </el-card>

        <!-- 弹窗 -->
        <el-dialog draggable destroy-on-close v-model="dialogVisible" title="寝室编辑" width="35%" center>
          <el-form :model="form" label-width="auto" style="max-width: 100vmin">
            <el-form-item label="寝室楼栋">
              <el-input v-model="form.buildingId"/>
            </el-form-item>
            <el-form-item label="寝室楼层">
              <el-input v-model="form.floor"/>
            </el-form-item>
            <el-form-item label="寝室房间">
              <el-input v-model="form.roomNum"/>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitEdit">确定</el-button>
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import {ElMessage} from 'element-plus';

const searchName = ref('');
const tableData = ref([]);
const dialogVisible = ref(false);
const editingDorm = ref(null);
const form = ref({
  buildingId: '',
  floor: '',
  roomNum: '',
});
const pagination = ref({
  currentPage: 1,
  pageSize: 20,
  total: 0,
});

const config = {
  headers: {
    'Authorization': localStorage.getItem('cqu-jwt')
  }
};

const fetchDormitoryData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/admin/dormitory', config);

    // 获取的数据
    const dormitoryData = response.data.data;
    console.log(response);
    // 更新表格数据和分页信息
    tableData.value = dormitoryData.slice(
        (pagination.value.currentPage - 1) * pagination.value.pageSize,
        pagination.value.currentPage * pagination.value.pageSize
    );
    pagination.value.total = dormitoryData.length;

    ElMessage.success("成功获取宿舍信息");
  } catch (error) {
    console.error('获取数据失败:', error);
    ElMessage.error("获取数据失败，请检查您的网络连接或稍后再试。");
  }
};
const searchDormitory = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8080/admin/dormitory', config);
    tableData.value = response.data.data.filter(dorm => dorm.buildingId.includes(searchName.value));
    pagination.value.total = tableData.value.length;
  } catch (error) {
    console.error('搜索寝室失败:', error);
    ElMessage.error("搜索寝室失败，请稍后再试。");
  }
};

const handleCreate = () => {
  editingDorm.value = null;
  form.value = {buildingId: '', floor: '', roomNum: ''};
  dialogVisible.value = true;
};

const handleEdit = (dorm) => {
  editingDorm.value = dorm;
  form.value = {...dorm};
  dialogVisible.value = true;
};

const submitEdit = async () => {
  try {
    if (editingDorm.value) {
      // 删除旧数据
      await axios.delete('http://127.0.0.1:8080/admin/dormitory', {
        data: {
          buildingId: editingDorm.value.buildingId,
          roomNum: editingDorm.value.roomNum
        }, ...config
      });
    }
    // 新增或更新数据
    await axios.post('http://127.0.0.1:8080/admin/dormitory', form.value, config);
    ElMessage.success('提交成功');
    dialogVisible.value = false;
    fetchDormitoryData(); // 重新加载数据
  } catch (error) {
    console.error('提交编辑/新增失败:', error);
    ElMessage.error('提交失败，请稍后再试。');
  }
};

const deleteDormitory = async (dorm) => {
  try {
    await axios.delete('http://127.0.0.1:8080/admin/dormitory', {
      data: {
        buildingId: dorm.buildingId,
        roomNum: dorm.roomNum
      }, ...config
    });
    ElMessage.success('删除成功');
    fetchDormitoryData(); // 重新加载数据
  } catch (error) {
    console.error('删除寝室失败:', error);
    ElMessage.error('删除失败，请稍后再试。');
  }
};

const handleSizeChange = (val) => {
  pagination.value.pageSize = val;
  fetchDormitoryData();
};

const handleCurrentChange = (val) => {
  pagination.value.currentPage = val;
  fetchDormitoryData();
};

onMounted(() => {
  fetchDormitoryData(); // 初始加载数据
});
</script>

<style scoped>
.el-menu {
  height: 100vh
}

.sidebar {
  background-color: #82b4c2;
  color: navajowhite;
  height: 95%;
}

.logo {
  display: block;
  margin: 20px auto;
  width: 80%;
}

.header {
  background-color: #f5f7fa;
  padding: 10px;
}

.platform-name {
  margin-left: 20px;
  font-size: 3vmin;
  color: black;
}

.user-info {
  text-align: right;
  padding-right: 20px;
}

.filter-input {
  width: 200px;
  margin-right: 10px;
}

.button {
  margin-left: 10px;
}

.box-card {
  margin-top: 20px;

}
</style>