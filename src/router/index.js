import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import routes from "./router";
import { setTitle, getToken, clearToken } from "@/lib/util";

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title);

  // const token = getToken();

  // if (token) {
  //   // 每次跳转调用接口是为了给 token 续过期时间
  //   store
  //     .dispatch("authorization", token)
  //     .then(() => {
  //       // token 没失效，手动进去 login 页面重定向到 home
  //       if (to.name === "login") {
  //         next({ name: "home" });
  //       } else {
  //         next();
  //       }
  //     })
  //     .catch(() => {
  //       clearToken();
  //       next({ name: "login" });
  //     });
  // } else {
  //   if (to.name === "login") next();
  //   else next({ name: "login" });
  // }
  next()
});

// router.beforeResolve

router.afterEach((to, from) => {
  // logining = false
});

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

export default router;
