// serve para alterar o estado do STATE
// as mutations são chamadas e alteradas pela ACTIONS
import * as types from './mutation-types'

export default {
  [types.SET_CONTRATOS] (state, payload) {
    state.contratos = payload
  },
  [types.SET_CONTRATO] (state, payload) {
    state.contrato = payload
  }
}
