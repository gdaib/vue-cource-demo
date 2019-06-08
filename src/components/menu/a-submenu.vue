<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :class="{open: showChild}">^</span>
    </div>
    <!-- 收缩效果 -->
    <div class="a-submenu-child-box" v-show="showChild">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  name: "ASubMenu",
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild;
    }
  }
};
</script>

<style lang="less">
.a-submenu {
  background: rgb(33, 35, 39);
  &-title {
    position: relative;
    color: #fff;
    .shrink-icon {
      position: absolute;
      right: 10px;
      top: -4px;
      transform: rotateZ(180deg);
      &.open {
        top: 4px;
        transform: rotateZ(0);
      }
    }
  }
  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
  li {
    background: rgb(33, 35, 39);
  }
}
</style>
