const mutations = {
  SET_APP_NAME(state, value) {
    state.appName = value
  },
  SET_STATE_NAME(state, value) {
    // TODO: 
    // 不能异步指的是约定成俗？
    setTimeout(() => {
      state.stateName = value;
    }, 1000)
  }
};


export default mutations