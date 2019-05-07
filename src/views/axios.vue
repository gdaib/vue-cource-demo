<template>
  <section>
    <span>{{data.name}}, {{data.age}}</span>
    <button @click="fetchData">Click me</button>
    <div>
      <button @click="post">post</button>
    </div>
  </section>
</template>

<script>
import { getUserInfo, getUserById } from "@/api/user";
export default {
  data() {
    return {
      data: {
        name: "",
        age: 0
      }
    };
  },
  methods: {
    fetchData() {
      getUserInfo().then(res => {
        // console.log(res);
        this.data = res.data;
      });
    },
    post() {
      getUserById(998).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>
