import services from '@/http'
import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
export const ActionDoLogin = (context, payload) => {
  return services.auth.login(payload)
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}
