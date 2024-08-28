<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="28vmin" class="sidebar animate__animated animate__backInLeft">
      <img src="@/Mobile/students/StuChildren/picture/logoL.png" alt="logo" class="logo" />
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" background-color="grey" text-color="#fff" active-text-color="#409EFF">
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
        <el-sub-menu index="4">
          <template #title>
            <i class="el-icon-s-tools"></i>
            <span>数据分析</span>
          </template>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <!-- 内容区域 -->
    <el-container>
      <!-- 顶部导航栏 -->
      <el-header class=" animate__animated animate__backInDown" style="background-image: url(https://th.bing.com/th?id=OIP.nIGmmc98M9MepYDlefRsSQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2)">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="8">
            <h3 class="platform-name">学校信息管理平台</h3>
          </el-col>
          <el-col :span="8" class="user-info">
            <el-avatar src="@/Mobile/students/StuChildren/picture/logo.png" />
            <span>{{ username }}</span>
          </el-col>
        </el-row>
      </el-header>

      <!-- 主内容区域 -->
      <el-main class="animate__animated animate__backInUp">
        <!-- 操作栏 -->
        <el-card class="box-card">
          <el-input v-model="searchName" placeholder="请输入学院名称" size="small" class="filter-input"></el-input>
          <el-button type="primary"  size="small" @click="getData" round>搜索</el-button>
          <el-button type="primary" size="small" color="orange" class="button" @click="handleCreate" round>新增</el-button>
        </el-card>

        <!-- 数据列表 -->
        <el-card class="box-card data">
          <el-table :data="tableData" style="width: 100%" size="small">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="寝室园区" width="180"></el-table-column>
            <el-table-column prop="address" label="寝室楼栋"></el-table-column>
            <el-table-column prop="phone" label="寝室楼层"></el-table-column>
            <el-table-column prop="desc" label="寝室房间"></el-table-column>
            <el-table-column label="操作" align="center" width="180px">
              <template v-slot="scope">
                <el-button type="primary" size="small" @click="handleeditor(scope.row)" plain>编辑</el-button>
                <el-button type="danger" size="small"  @click="deleteUser(scope.row.id)" plain>删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="pagination.currentPage" :page-size="pagination.pageSize"
                         layout="total, prev, pager, next, jumper" :total="pagination.total" />
        </el-card>

        <!-- 弹窗 -->
        <el-dialog draggable destroy-on-close  v-model="dialogVisible" title="寝室编辑" width="35%" center>
          <el-form :model="form" label-width="auto" style="max-width: 100vmin">
            <el-form-item label="寝室园区">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="寝室楼栋">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="寝室楼层">
              <el-input v-model="form.name" />
            </el-form-item>
          <el-form-item label="寝室房间">
            <el-input v-model="form.name" />
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

<script>
export default {
  data() {
    return {
      filteredData: [], // 存储过滤后的数据
      username: '熊初墨', // 用户名
      searchName: '', // 搜索框内容
      activeMenu: '3', // 当前激活的菜单项
      dialogVisible:false,
      tableData: [
        { id: 1, name: '竹园', address: '四栋', phone: '四层', desc: 'B4403' },
        // 更多数据...
      ],
      form: {
        name: '',
        region: '',
        number1: '',
        number2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      pagination: {
        currentPage: 1, // 当前页码
        pageSize: 7, // 每页显示记录数
        total: 100, // 总记录数
      },
      formLabelWidth: '100px', // 表单标签宽度
    };
  },
  methods: {
    limitToThreeDigits(value) {
      if (this.form.number1 && this.form.number1.length > 3) {
        this.form.number1 = this.form.number1.slice(0, 3);
      }
    },//限制位数
    getData() {
      // 使用 `filter` 方法来搜索 `tableData`，仅保留 `name` 中包含 `searchName` 的记录
      this.filteredData = this.tableData.filter(item => item.name.includes(this.searchName));
    },
    resetFilters() {
      this.searchName = '';
      // 重置过滤后的数据为原始数据
      this.filteredData = this.tableData;
      console.log('重置搜索条件');
    },
    loadData() {
      // 这里加载或初始化表格的所有数据
      this.tableData = [
        { id: 1, name: '软件学院', address: '图书馆2031', phone: '023-88968671', desc: '软件学院是一个以培养...' },
        // 更多数据...
      ];
      // 初始化时，filteredData与tableData保持一致
      this.filteredData = this.tableData;
    },
    // 其他方法保持不变
    handleCreate() {
      console.log('新增学院');
      // 新增逻辑
    },
    handleeditor() {
      this.dialogVisible = true; // 将弹窗显示状态设置为true
      // 初始化表单数据

    },
    deleteUser(row) {
      this.$confirm('此操作将永久删除该学院, 是否继续?', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        // 从 filteredData 或 tableData 中删除该行
        this.filteredData = this.filteredData.filter(item => item.id !== row.id);
        this.tableData = this.tableData.filter(item => item.id !== row.id);

        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pagination.currentPage = val;
      this.getData();
    },
    onSubmit() {
      console.log('submit!')
    },
    submitEdit() {
      console.log('提交编辑后的数据', this.form);
      this.dialogVisible = false; // 关闭弹窗
      // 提交逻辑
    }
  }
};
</script>

<style scoped>
.el-menu{
  height:100vh
}
.sidebar {
  background-color: #b4aa92;
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