// serve para alterar o estado do STATE
// as mutations são chamadas e alteradas pela ACTIONS
import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.token = payload
  },
  [types.SET_USERS] (state, payload) {
    state.users = payload
  }
}
