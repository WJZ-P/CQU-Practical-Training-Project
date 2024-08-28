<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="校历开始时间" prop="startTime"   label-width="15vmin">
        <el-date-picker
            clearable
            v-model="queryParams.startTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择校历开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="校历结束时间" prop="endTime"  label-width="15vmin">
        <el-date-picker
            clearable
            v-model="queryParams.endTime"
            type="datetime"
            value-format="YYYY-MM-DD HH:mm:ss"
            placeholder="请选择校历结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="校历内容" prop="content">
        <el-input v-model="queryParams.content" placeholder="请输入校历内容" clearable @keyup.enter.native="handleQuery"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="handleQuery">搜索</el-button>
        <el-button  @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>


    <el-table v-loading="loading" border stripe :span-method="objectSpanMethod" :data="calendarList" >
      <el-table-column label="星期  /周次" align="center" width="70px" prop="week"/>
      <el-table-column label="星期一" align="center" prop="mon"/>
      <el-table-column label="星期二" align="center" prop="tues"/>
      <el-table-column label="星期三" align="center" prop="wed"/>
      <el-table-column label="星期四" align="center" prop="thur"/>
      <el-table-column label="星期五" align="center" prop="fri"/>
      <el-table-column label="星期六" align="center" prop="sat"/>
      <el-table-column label="星期日" align="center" prop="sun"/>
      <el-table-column label="备注摘要" align="center" prop="content"/>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      contents: [],
      disabled: false,
      loading: true,
      ids: [],
      single: true,
      multiple: true,
      showSearch: true,
      total: 0,
      calendarList: [],
      title: '',
      open: false,
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        startTime: 1,
        endTime: null,
        content: null
      },
      // 添加每个月的开始日期和结束日期
      monthlyRanges: [
        { month: 'January', startTime: '2024-01-01', endTime: '2024-01-31' },
        { month: 'February', startTime: '2024-02-01', endTime: '2024-02-29' }, // 2024年是闰年
        { month: 'March', startTime: '2024-03-01', endTime: '2024-03-31' },
        { month: 'April', startTime: '2024-04-01', endTime: '2024-04-30' },
        { month: 'May', startTime: '2024-05-01', endTime: '2024-05-31' },
        { month: 'June', startTime: '2024-06-01', endTime: '2024-06-30' },
        { month: 'July', startTime: '2024-07-01', endTime: '2024-07-31' },
        { month: 'August', startTime: '2024-08-01', endTime: '2024-08-31' },
        { month: 'September', startTime: '2024-09-01', endTime: '2024-09-30' },
        { month: 'October', startTime: '2024-10-01', endTime: '2024-10-31' },
        { month: 'November', startTime: '2024-11-01', endTime: '2024-11-30' },
        { month: 'December', startTime: '2024-12-01', endTime: '2024-12-31' },
      ],
      form: {},
      rules: {},
      // 模拟后端数据，包含20周的校历数据
      localData: [
        {
          id: 1,
          week: "1",
          mon: "2024-08-01",
          tues: "2024-08-02",
          wed: "2024-08-03",
          thur: "2024-08-04",
          fri: "2024-08-05",
          sat: "2024-08-06",
          sun: "2024-08-07",
          content: "新生军训"
        },
        {
          id: 2,
          week: "2",
          mon: "2024-08-08",
          tues: "2024-08-09",
          wed: "2024-08-10",
          thur: "2024-08-11",
          fri: "2024-08-12",
          sat: "2024-08-13",
          sun: "2024-08-14",
          content:  "开学典礼"
        },
        // ... 继续添加其他周的数据
        {
          id: 3,
          week: "3",
          mon: "2024-08-15",
          tues: "2024-08-16",
          wed: "2024-08-17",
          thur: "2024-08-18",
          fri: "2024-08-19",
          sat: "2024-08-20",
          sun: "2024-08-21",
          content: "入学考试",
        },
        {
          id: 4,
          week: "4",
          mon: "2024-08-22",
          tues: "2024-08-23",
          wed: "2024-08-24",
          thur: "2024-08-25",
          fri: "2024-08-26",
          sat: "2024-08-27",
          sun: "2024-08-28",
          content: "运动会",
        },
        {
          id: 5,
          week: "5",
          mon: "2024-08-29",
          tues: "2024-08-30",
          wed: "2024-08-31",
          thur: "2024-09-01",
          fri: "2024-09-02",
          sat: "2024-09-03",
          sun: "2024-09-04",
          content: "学术讲座",
        },
        {
          id: 6,
          week: "6",
          mon: "2024-09-05",
          tues: "2024-09-06",
          wed: "2024-09-07",
          thur: "2024-09-08",
          fri: "2024-09-09",
          sat: "2024-09-10",
          sun: "2024-09-11",
          content:  "期中考试",
        },
        {
          id: 7,
          week: "7",
          mon: "2024-09-12",
          tues: "2024-09-13",
          wed: "2024-09-14",
          thur: "2024-09-15",
          fri: "2024-09-16",
          sat: "2024-09-17",
          sun: "2024-09-18",
          content:"校外活动"
        },
        {
          id: 8,
          week: "8",
          mon: "2024-09-19",
          tues: "2024-09-20",
          wed: "2024-09-21",
          thur: "2024-09-22",
          fri: "2024-09-23",
          sat: "2024-09-24",
          sun: "2024-09-25",
          content:  "艺术节",
        },
        {
          id: 9,
          week: "9",
          mon: "2024-09-26",
          tues: "2024-09-27",
          wed: "2024-09-28",
          thur: "2024-09-29",
          fri: "2024-09-30",
          sat: "2024-10-01",
          sun: "2024-10-02",
          content: "校园开放日",
        },
        {
          id: 10,
          week: "10",
          mon: "2024-10-03",
          tues: "2024-10-04",
          wed: "2024-10-05",
          thur: "2024-10-06",
          fri: "2024-10-07",
          sat: "2024-10-08",
          sun: "2024-10-09",
          content: "运动会",
        },
        {
          id: 11,
          week: "11",
          mon: "2024-10-10",
          tues: "2024-10-11",
          wed: "2024-10-12",
          thur: "2024-10-13",
          fri: "2024-10-14",
          sat: "2024-10-15",
          sun: "2024-10-16",
          content:  "学术交流",
        },
        {
          id: 12,
          week: "12",
          mon: "2024-10-17",
          tues: "2024-10-18",
          wed: "2024-10-19",
          thur: "2024-10-20",
          fri: "2024-10-21",
          sat: "2024-10-22",
          sun: "2024-10-23",
          content: "期末考试"
        },
        {
          id: 13,
          week: "13",
          mon: "2024-10-24",
          tues: "2024-10-25",
          wed: "2024-10-26",
          thur: "2024-10-27",
          fri: "2024-10-28",
          sat: "2024-10-29",
          sun: "2024-10-30",
          content:  "读书周",
        },
        {
          id: 14,
          week: "14",
          mon: "2024-10-31",
          tues: "2024-11-01",
          wed: "2024-11-02",
          thur: "2024-11-03",
          fri: "2024-11-04",
          sat: "2024-11-05",
          sun: "2024-11-06",
          content:  "科学展览",
        },
        {
          id: 15,
          week: "15",
          mon: "2024-11-07",
          tues: "2024-11-08",
          wed: "2024-11-09",
          thur: "2024-11-10",
          fri: "2024-11-11",
          sat: "2024-11-12",
          sun: "2024-11-13",
          content:  "校友会",
        },
        {
          id: 16,
          week: "16",
          mon: "2024-11-14",
          tues: "2024-11-15",
          wed: "2024-11-16",
          thur: "2024-11-17",
          fri: "2024-11-18",
          sat: "2024-11-19",
          sun: "2024-11-20",
          content:  "文艺汇演",
        },
        {
          id: 17,
          week: "17",
          mon: "2024-11-21",
          tues: "2024-11-22",
          wed: "2024-11-23",
          thur: "2024-11-24",
          fri: "2024-11-25",
          sat: "2024-11-26",
          sun: "2024-11-27",
          content:  "实习周",
        },
        {
          id: 18,
          week: "18",
          mon: "2024-11-28",
          tues: "2024-11-29",
          wed: "2024-11-30",
          thur: "2024-12-01",
          fri: "2024-12-02",
          sat: "2024-12-03",
          sun: "2024-12-04",
          content:  "毕业典礼",
        },
        {
          id: 19,
          week: "19",
          mon: "2024-12-05",
          tues: "2024-12-06",
          wed: "2024-12-07",
          thur: "2024-12-08",
          fri: "2024-12-09",
          sat: "2024-12-10",
          sun: "2024-12-11",
          content:  "学生会换届",
        },
        {
          id: 20,
          week: "20",
          mon: "2024-12-12",
          tues: "2024-12-13",
          wed: "2024-12-14",
          thur: "2024-12-15",
          fri: "2024-12-16",
          sat: "2024-12-17",
          sun: "2024-12-18",
          content: "假期前准备",
        },
      ]
    }
  },
  created() {
    this.getList();  // 页面加载时获取数据
  },
  methods: {
    getList() {
      this.loading = true;
      const { startTime, endTime, content } = this.queryParams;
      let filteredData = this.localData;

      if (startTime) {
        filteredData = filteredData.filter(item => new Date(item.mon) >= new Date(startTime));
      }
      if (endTime) {
        filteredData = filteredData.filter(item => new Date(item.sun) <= new Date(endTime));
      }
      if (content) {
        filteredData = filteredData.filter(item => item.content.includes(content));
      }

      this.calendarList = filteredData;
      this.loading = false;
    },
    handleQuery() {
      this.getList();
    },
    resetQuery() {
      this.queryParams = {
        startTime: null,
        endTime: null,
        content: null
      };
      this.getList();
    }
  }
};
</script>

<style scoped>
.app-container {
  padding: 10px;
  max-width: 100%;
}

.el-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.el-form-item {
  width: 100%;
}

.el-table {
  width: 100%;
  font-size: 14px;
}

/* 响应式布局 */
@media screen and (max-width: 768px) {
  .el-form {
    flex-direction: column;
  }

  .el-form-item {
    width: 100%;
    margin-bottom: 10px;
  }

  .el-table-column {
    width: auto !important;
  }

  .el-table {
    font-size: 12px;
  }

  .el-table-column:nth-child(1),
  .el-table-column:nth-child(2),
  .el-table-column:nth-child(3),
  .el-table-column:nth-child(4),
  .el-table-column:nth-child(5),
  .el-table-column:nth-child(6),
  .el-table-column:nth-child(7),
  .el-table-column:nth-child(8),
  .el-table-column:nth-child(9) {
    display: block;
    width: 100%;
  }

  .el-table th,
  .el-table td {
    display: block;
    text-align: left;
    padding: 10px;
  }

  .el-table tr {
    display: block;
    margin-bottom: 10px;
  }
}
</style>