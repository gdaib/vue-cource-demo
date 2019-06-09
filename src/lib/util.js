import Cookie from "js-cookie";

export const setTitle = title => {
  window.document.title = title || "admin";
};

export const setToken = (token, tokenName = "token") => {
  Cookie.set(tokenName, token);
};

export const getToken = (tokenName = "token") => Cookie.get(tokenName);

export const clearToken = (tokenName = "token") => Cookie.remove(tokenName);
