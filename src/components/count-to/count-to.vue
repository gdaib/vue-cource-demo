<template>
  <span>
    <slot name="prefix"/>
    <span ref="number" :class="countClass" :id="eleId"></span>
    <slot name="after"/>
  </span>
</template>

<script>
import CountUp from "countup";

export default {
  name: "CountTo",
  props: {
    /**
     * 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },

    /**
     * 最终值
     */
    endVal: {
      type: Number,
      required: true
    },

    // 小数点后保留几位小数
    decimals: {
      type: Number,
      default: 0
    },

    // 动画延迟效果, 毫秒。
    delay: {
      type: Number,
      default: 0
    },

    // 渐变时长
    duration: {
      type: Number,
      default: 1
    },

    // 是否使用变速效果
    useEasing: {
      type: Boolean,
      default: false
    },

    // 是否使用分组， 1,000
    useGrouping: {
      type: Boolean,
      default: true
    },

    // 分组符
    separator: {
      type: String,
      default: ","
    },

    // 小数分隔符
    decimal: {
      type: String,
      default: "."
    },
    // 自定义类名
    className: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      counter: null
    };
  },
  computed: {
    eleId() {
      return `count_up${this._uid}`;
    },

    countClass() {
      return ["count-to-number", this.className];
    }
  },
  methods: {
    getCount() {
      return this.$refs.number.innerHTML;
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      newVal && this.counter.update(newVal)
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000 + 5)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        }
      );
      setTimeout(() => {
        this.counter.start();
      }, this.delay);
    });
  }
};
</script>

<style lang="less">
.count-to-number {
  color: pink;
}
</style>
