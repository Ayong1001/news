<template>
  <div class="calendar">
    <el-calendar />
  </div>
</template>

<script>
const value = new Date()
</script>

<style scoped>
.calendar {
  width: 92%;
  margin-bottom: 50px;
}

.el-calendar {
  --el-calendar-cell-width: 35px;
}
.el-calendar.el-calendar__body {
  padding: 12px 20px 35px;
  padding-top: 0;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
</style>

