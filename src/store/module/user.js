const state = {
  userName: 'cjffff'
}
const mutations = {
  //
}
const actions = {
  //
}

const getters = {
  firstLetter:state => state.userName.slice(0, 1)
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
};
