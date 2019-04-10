<template>
  <section>
    <!-- <a-input v-model="inputValue"></a-input> -->
    <a-input :value="inputValue" @input="(value) => inputValue = value"></a-input>
    <section>
      {{inputValue}}
    </section>

    <a-show :content="inputValue" />
  </section>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

export default {
  name: 'Store',
  data() {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  }
}
</script>

<style>

</style>
