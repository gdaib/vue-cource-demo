<template>
  <section class="split-pane-con">
    <SplitPane v-model="paneLeft"/>
  </section>
</template>

<script>
import SplitPane from "_c/split-pane";
export default {
  components: { SplitPane },
  data() {
    return {
      paneLeft: 0.8
    }
  }
};
</script>

<style lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background: papayawhip;
}
</style>
