<script setup lang="ts">
const a: any = "1"
console.log(a)
</script>

<template>
  <main>
    <div>
      <h1 class="num">This is an about page</h1>
    </div>
    <HelloWorld msg="Hello World" />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </main>
</template>
<style lang="scss" scoped>
.num {
  @include wh(500, 500);

  color: $red;
}
</style>
