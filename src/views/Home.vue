<template>
  <div class="home">
    <!-- <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="handleClick('logout')">退出登录</button>-->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10" class="blue">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "apple"
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next();
  },
  methods: {
    ...mapActions(["logout"]),
    handleClick(type) {
      if (type === "back") this.$router.back();
      else if (type === "push") {
        this.$router.push({
          name: `argu`,
          params: {
            name: "lison"
          }
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      } else if (type === "logout") {
        this.logout();
      }
    }
  }
};
</script>


<style lang="less">
.home {
  .ivu-col {
    height: 50px;
    margin-top: 10px;
    background: pink;
    background-clip: content-box;
  }
  .blue {
    .ivu-col {
      background: blue;
      background-clip: content-box;
    }
  }
}
</style>