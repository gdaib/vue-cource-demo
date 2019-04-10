<template>
  <div>
    <a-input v-model="message"></a-input>
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
import AInput from '_c/AInput';
export default {
  data() {
    return {
      message: ''
    }
  },
  components: {
    AInput
  },
  mounted() {
    console.log(this.$bus);
  },
  methods: {
    handleClick() {
      this.$bus.$emit('on-click', this.message)
    }
  }
}
</script>

<style>

</style>

