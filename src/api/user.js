import axios from "./index";

export const getUserInfo = () =>
  axios.request({ url: "/getUserInfo", method: "get" });


export const getUserById = (id) => axios.request({ url: '/getUserInfo', method: 'post', data: { id }})