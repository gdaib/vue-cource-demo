import { login, authorization } from "@/api/user";
import { setToken, clearToken } from "@/lib/util";
import Router from "@/router";
import Cookie from "js-cookie";

const state = {
  userName: "cjffff"
};
const mutations = {
  //
};
const actions = {
  login({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then(res => {
          if (res.code == 0 && res.data.token) {
            const { token } = res.data;
            console.log(token);
            console.log(Cookie.get("deepexi"));
            setToken(token);
            resolve(true);
          } else {
            reject(res.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  logout() {
    clearToken();
    Router.replace("/login");
  },
  authorization({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization()
        .then(res => {
          if (res.code == 401) {
            reject(new Error("token error"));
          } else {
            // 给 token 续命
            const { token } = res.data;
            setToken(token);
            resolve();
          }
        })
        .catch(reject);
    });
  }
};

const getters = {
  firstLetter: state => state.userName.slice(0, 1)
};

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};
