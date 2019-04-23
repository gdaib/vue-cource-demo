import { getAppName } from '@/api/app'

const actions = {
  updateAppName ({ commit }) {
    getAppName()
      .then((res) => {
        const { code, payload: { appName }} = res
        if (code == 200) {
          commit("SET_APP_NAME", appName);
        }}
      )
  }
}


export default actions