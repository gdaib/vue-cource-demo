###

### plugin vuex 自定义插件
我们在 `store` 中生成的时候，有一个属性叫做 `plugins`, 它接受一个插件数组。

首先我们定义插件文件 saveInLocal.js
```js
export const saveInLocal = store => {
  if(localStorage.getItem('state')) {
    store.replaceState(JSON.parse(localStorage.getItem('state')))
  }
  // 
  store.subscribe((mutation, state) => {
    console.log('被调用', state);
    localStorage.state = JSON.stringify(state);
    // localStorage.setItem('state', JSON.stringify(state))
  })
}
export default saveInLocal
```

usage index.js
```js
import saveInLocal from './plugins/saveInLocal'

export default Vuex.store({
  strict: process.env.NODE_ENV === 'development',
  state,
  actions,
  mutations,
  getters,
  modules,
  plguins: [ saveInLocal ]
})
```

第一次被调用是在初始化之后，后续每次 state 被修改就会执行回调函数。

### strict: boolean
严格模式，`true` 的时候，如果在 `action` 里面修改了 `state` 的值，`Vue` 就会警告开发者。

### state 的 v-model
我们知道， `v-model` 其实就是一个语法糖

这两种写法是等价的
```js
<input :value="inputValue" :change="e => inputValue = e.target.value"/>

<input v-model="inputValue"/>
```

那么如果我们想要把 store 中的某个变量使用 `v-model` 这种语法糖呢？

首先 store 的属性我们使用的时候一般都回在 `computed` 中使用，`computed` 里面是我们要计算并且返回的属性，它可以提供  `set` `get` 来为我们的计算属性提供一个赋值操作。

```js
// 如果 value 是一个 store 属性

<input v-model="value" />

computed: {
  value: {
    get() {
      this.$store.state.value
    },
    set(val) {
      this.$store.state.value = val
    }
  }
}
```