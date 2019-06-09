<template>
  <div>
    <input v-model="userName">
    <br>
    <input type="password" v-model="password">
    <br>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      const { userName, password } = this;
      this.login({
        userName,
        password
      }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
</style>
