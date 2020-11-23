// serve para alterar o estado do STATE
// as mutations são chamadas e alteradas pela ACTIONS
import * as types from './mutation-types'

export default {
  [types.SET_ALUNOS] (state, payload) {
    state.alunos = payload
  }
}
