<template>
  <li class="a-menu-item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'AMenuItem'
}
</script>

<style lang="less">
.a-menu-item {
  color: #fff;
  background: rgb(90, 92, 104); 
}
</style>
