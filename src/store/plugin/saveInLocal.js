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