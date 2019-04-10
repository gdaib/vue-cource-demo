<template>
  <section>
    AShow: {{content}}
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style>

</style>
