import store from '../store'
export default rep => {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch('auth/ActionSignOut')
    }
  }
}
