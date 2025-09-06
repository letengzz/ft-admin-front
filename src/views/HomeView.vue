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
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </main>
</template>
<style lang="scss" scoped>
.num {
  @include wh(500, 500);

  color: $red;
}
</style>
