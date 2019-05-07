<template>
  <section>
    <!-- <a-input v-model="inputValue"></a-input> -->
    <a-input :value="inputValue" @input="(value) => inputValue = value"></a-input>
    <section>{{inputValue}}</section>

    <a-show :content="inputValue"/>
    <p>{{appName}}</p>
    <p>userName: {{ userName }}</p>

    <p>getters {{ appNameVersion }}</p>
    <p>firstLetter {{ firstLetter }}</p>

    <p>
      修改 appName
      <input  v-model="_appName">
    </p>

    <p>
      userName: 
      {{stateName}}
      <button @click="() => SET_APP_NAME(Math.random().toString(16).slice(2))">修改 userName</button>  
    </p>

    <p>
      <button @click="updateAppName">发送异步请求修改 appName</button>
    </p>

    <p>
      <button @click="handleRegisterModule">动态注册模块</button>
      <ul>
        <li v-for="(li ,i) in todoList" :key="i">{{ li }}</li>
      </ul>
    </p>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

export default {
  name: "Store",
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      stateName: state => state.stateName,
      todoList: state => state.todo ? state.todo.todoList : []
    }),
    ...mapGetters(["appNameVersion", "firstLetter"]),
    _appName: {
      get(state) {
        return state.appName
      },
      set(value) {
        this.SET_APP_NAME(value)
      }
    },
    // ...mapGetters(['firstLetter'])
    // ...mapState(['appName']),
    // userName() {
    //   return this.$store.state.user.userName
    // }
    // ...mapState('user', ['userName'])
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations(["SET_APP_NAME", "SET_STATE_NAME"]),
    ...mapActions(['updateAppName']),
    changeAppName(value) {
      this.$store.commit('SET_APP_NAME', value)
    },
    handleRegisterModule() {
      console.log('register');
      this.$store.registerModule('todo', {
        state: {
          todoList: [
            'item1',
            'item2',
            'item3',
            'item4',
            'item5',
          ]
        }
      })
    }
  }
};
</script>

<style>
</style>
