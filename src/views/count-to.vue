<template>
  <section>
    <count-to :end-val="value" :decimals="3" ref="countTo" @animation-end="end">
      <span slot="prefix">$</span>
    </count-to>
    <button @click="getNumber">获取组件</button>
    <button @click="handleUpdateNumber">更新值</button>
  </section>
</template>

<script>
import CountTo from '@/components/count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      value: 10000
    }
  },
  methods:{
    getNumber() {
      console.log(this.$refs.countTo.getCount())
    },

    handleUpdateNumber() {
      this.value = Math.random() * 100000
    },

    end(v) {
      console.log(v, 'slkdfjsdlk')
    }
  }
}
</script>

<style>

</style>
