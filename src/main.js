import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bus from "./lib/bus";
import axios from "axios";
import iview from 'iview'
import 'iview/dist/styles/iview.css'


Vue.use(iview);
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;

Vue.prototype.$bus = Bus;

let list = [
  {
    name: "lison"
  },
  {
    name: "lili"
  },
  {
    name: "ali"
  }
];

let getLiEleArr = h =>
  list.map(({ name }, i) =>
    h(
      "li",
      {
        key: i
      },
      name
    )
  );
let vm = new Vue({
  data() {
    return {
      endVal: 3000
    };
  },
  router,
  store,
  // render: h =>
  //   h(
  //     CountTo,
  //     {
  //       attrs: {
  //         id: "box"
  //       },
  //       style: {
  //         color: "red"
  //       },
  //       props: {
  //         endVal: 30000
  //       },
  //       on: {
  //         // vue事件
  //         "on-animation-end": val => {
  //           console.log(val, "============");
  //         }
  //       },
  //       nativeOn: {
  //         // 原生事件
  //         click() {
  //           console.log("click!");
  //         }
  //       },
  //       class: ["abc", { bca: true }, true ? "aaa" : ""],
  //       ref: "count-to",
  //       key: "",
  //       slot: "",
  //       scopedSlots: {},
  //       domProps: {},
  //       directives: [] // 指令
  //     },
  //     "cjfff"
  //   )
  // render(h) {
  //   return h("div", [
  //     h("span", "ddd"),
  //     h("span", "ccc"),
  //     h("p", "hhhh"),
  //     h(CountTo, {
  //       props: {
  //         endVal: this.endVal
  //       },
  //       nativeOn: {
  //         click: () => {
  //           this.endVal = Math.random() * 9999;
  //         }
  //       }
  //     }),
  //     ...Array.from({ length: 10 }, (_, i) =>
  //       h("div", { key: i }, Math.random().toString(16))
  //     )
  //   ]);
  // }
  render(h) {
    return h(
      "ul",
      {
        on: {
          click(e) {
            console.log("click", e.target.innerHTML);
          }
        }
      },
     getLiEleArr(h)
    );
  }
});
// .$mount("#app");

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
