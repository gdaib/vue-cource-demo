<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetParcent, paddingRight: this.triggleWidth / 2 +'px'}">
      <slot name="left"></slot>
    </div>
    <div
      class="pane-triggle-con"
      @mousedown="handleMouseDown"
      :style="{left: triggerLeft, width: triggleWidth+'px'}"
    ></div>
    <div
      class="pane pane-right"
      :style="{ left: leftOffsetParcent, paddLeft: this.triggleWidth / 2 +'px' }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitPane",
  props: {
    // 初始偏移
    value: {
      type: Number,
      default: 0.5
    },
    // 中间拖动的宽度
    triggleWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data() {
    return {
      leftOffset: this.value,
      canMove: false,
      initOffset: 0
    };
  },
  computed: {
    leftOffsetParcent() {
      return `${this.value * 100}%`;
    },
    triggerLeft() {
      return `calc(${this.value * 100}% - ${this.triggleWidth / 2}px)`;
    }
  },
  methods: {
    handleClick() {
      this.value -= 0.01;
    },
    handleMouseDown(event) {
      document.addEventListener("mousemove", this.handleMousemove);
      document.addEventListener("mouseup", this.handleMouseup);
      this.initOffset =
        event.pageX -
        event.srcElement.getBoundingClientRect().left +
        this.triggleWidth / 2;
      // console.log(event.pageX, this.initOffset);
      this.canMove = true;
    },
    handleMouseup() {
      this.canMove = false;
    },
    handleMousemove(event) {
      if (!this.canMove) return;
      event.pageX;
      // 鼠标距离减去容器距离左侧就是偏移的距离
      const { width, left } = this.$refs.outer.getBoundingClientRect();
      const offsetX = event.pageX - this.initOffset - left;
      let offsetPercent = offsetX / width;

      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      this.$emit("input", offsetPercent);

      // this.leftOffset = offsetPercent
      // console.log(this.leftOffset, this.min, this.max);
      // const value =
      //   offsetPercent > 0
      //     ? Math.min(offsetPercent, this.max)
      //     : Math.max(offsetPercent, this.min);
      // this.$emit("input", value);
    }
  }
};
</script>

<style lang="less">
.split-pane-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .pane {
    position: absolute;
    top: 0;
    height: 100%;
    &-left {
      width: 30%;
      background: palevioletred;
    }
    &-right {
      right: 0;
      bottom: 0;
      left: 30%;
      background: palegoldenrod;
    }
    &-triggle-con {
      cursor: col-resize;
      user-select: none;
      // width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
    }
  }
}
</style>
