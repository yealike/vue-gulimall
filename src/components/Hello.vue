<template>
  <div>
    <h2>你好！我是hello组件</h2>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style scoped>

</style>
