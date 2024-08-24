<template>
  <div class="calendar-container">
    <div class="header">
      <button @click="previousMonth" class="month-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <span class="month-year">{{ currentMonth | formatMonth }} {{ currentYear }}</span>
      <button @click="nextMonth" class="month-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
    <table class="calendar-table">
      <thead>
      <tr>
        <th v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(week, index) in weeks" :key="index">
        <td
            v-for="day in week"
            :key="day"
            :class="[
              'calendar-day',
              { 'today': isToday(day) },
              { 'past': isPast(day) },
              { 'future': isFuture(day) },
              { 'selected': day === selectedDay }, // 添加 selected 类名
              { 'empty': !day } // 添加一个空格的类名用于空白单元格
            ]"
            @mouseover="highlightDay(day)"
            @mouseout="unhighlightDay(day)"
            @click="handleDayClick(day)"
        >
          {{ day }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
      weeks: [],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentDate: new Date(),
      highlightedDay: null
    };
  },
  filters: {
    formatMonth(month) {
      return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][month];
    }
  },
  mounted() {
    this.nextMonth()
  },
  computed: {
    currentMonthDays() {
      const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (this.currentMonth === 2) { // 如果是二月
        return this.isLeapYear() ? 29 : 28;
      }
      return monthDays[this.currentMonth - 1]; // 注意这里减1是因为数组索引从0开始
    },
  },
  methods: {
    isLeapYear() {
      return (this.currentYear % 4 === 0 && this.currentYear % 100 !== 0) || this.currentYear % 400 === 0;
    },
    generateCalendar() {
      const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1); // 注意这里减1
      const lastDay = new Date(this.currentYear, this.currentMonth, 0);
      let dayOfWeek = firstDay.getDay(); // 获取当月第一天是一周中的第几天
      let day = 1;

      this.weeks = [];
      for (let i = 0; i < 6; i++) { // 总共六排
        let week = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < dayOfWeek) {
            // 填充前一周的空白天数
            week.push('');
          } else if (day > this.currentMonthDays) {
            // 当达到当月最后一天后停止填充
            week.push('');
          } else {
            week.push(day++);
          }
        }
        this.weeks.push(week);
      }
    },
    previousMonth() {
      this.currentMonth--;
      if (this.currentMonth < 1) {
        this.currentMonth = 12;
        this.currentYear--;
      }
      this.generateCalendar();
    },
    nextMonth() {
      this.currentMonth++;
      if (this.currentMonth > 12) {
        this.currentMonth = 1;
        this.currentYear++;
      }
      this.generateCalendar();
    },
    isToday(day) {
      return day === this.currentDate.getDate() && this.currentMonth === this.currentDate.getMonth() + 1 && this.currentYear === this.currentDate.getFullYear();
    },

    isPast(day) {
      const currentDay = this.currentDate.getDate();
      const currentMonth = this.currentDate.getMonth() + 1;
      const currentYear = this.currentDate.getFullYear();
      return (day < currentDay && this.currentMonth === currentMonth && this.currentYear === currentYear) ||
          (this.currentMonth < currentMonth && this.currentYear === currentYear) ||
          (this.currentYear < currentYear);
    },

    isFuture(day) {
      const currentDay = this.currentDate.getDate();
      const currentMonth = this.currentDate.getMonth() + 1;
      const currentYear = this.currentDate.getFullYear();
      return (day > currentDay && this.currentMonth === currentMonth && this.currentYear === currentYear) ||
          (this.currentMonth > currentMonth && this.currentYear === currentYear) ||
          (this.currentYear > currentYear);
    },
    highlightDay(day) {
      this.highlightedDay = day;
    },
    unhighlightDay(day) {
      if (this.highlightedDay === day) {
        this.highlightedDay = null;
      }
    },
    handleDayClick(day) {
      // 首先检查是否为过去或今天的日期
      if (!this.isFuture(day)) {
        this.selectedDay = day === this.selectedDay ? null : day; // 切换选中状态
        console.log(`Clicked on day ${day}`);
        // 在这里处理点击事件，比如跳转到详情页面等
      }
    }
  }
};
</script>

<style scoped>
.calendar-container {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 1vw 0 1vw;
}

.calendar-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* 固定列宽 */
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1vmin;
}

.header button {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 1vmin;
}

.header span {
  font-size: 2vmin;
  font-weight: bold;
}

th,
td {
  padding: 0.99vmin; /* 减小内边距 */
  text-align: center;
  border: 0.15vmin solid #ccc;
  white-space: nowrap; /* 防止文字换行 */
}

th {
  background-color: #f0f0f0;
  font-weight: bold;
}

td {
  background-color: #fff;
}

td.today {
  background-color: #ffcc00;
}

td.past {
  color: black;
}

td.future {
  color: #ccc;
  cursor: not-allowed;
}

td:hover {
  background-color: #e0e0e0;
}

/* 模拟 disabled 效果 */
td.future:hover {
  background-color: inherit; /* 不改变背景颜色 */
  cursor: not-allowed;
}

td.selected {
  background-color: #b0e0e6; /* 淡蓝色 */
}
</style>