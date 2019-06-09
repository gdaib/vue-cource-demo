import axios from "./index";

export const getUserInfo = () =>
  axios.request({ url: "/getUserInfo", method: "get" });

export const getUserById = id =>
  axios.request({ url: "/getUserInfo", method: "post", data: { id } });

export const login = ({ userName, password }) =>
  axios.request({
    url: "/index/login",
    method: "post",
    data: {
      userName,
      password
    }
  });

export const authorization = () =>
  axios.request({
    url: "/users/authorization",
    method: "get"
  });
