<template>
  <!--
    显示表格
    :data="tableData"关联一个数组
    el-table-column表示每一列
    列的数据使用 prop 属性指定并填充
    label标注列名

  -->
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期" width="140">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  name: "MyTable",
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style scoped>

</style>
