<template>
  <div class="a-menu">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AMenu"
};
</script>

<style lang="less">
.a-menu {
  & * {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>


