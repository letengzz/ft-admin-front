<script setup lang="ts">
</script>

<template>
  <main>
    <div>
      <h1 class="num">This is an about page</h1>
    </div>
    <HelloWorld msg="Hello World" />
  </main>
</template>
<style lang="scss" scoped>
.num {
  @include wh(500, 500);

  color: $red;
}
</style>
