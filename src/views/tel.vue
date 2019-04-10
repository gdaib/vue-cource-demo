<template>
  <div>
    tel: 接受者
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', (e) => {
      this.message = e
    })
  }
}
</script>

<style>

</style>
