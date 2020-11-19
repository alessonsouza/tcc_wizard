import services from '@/http'
import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
// Dispatch serve para chamarmos uma outra action
export const ActionGetUsers = ({ commit }) => {
  return services.users.addUsers().then(res => {
    console.log('PEGANDO USERS' + res.data)
    commit(types.SET_ADDUSER, res.data)
  })
}
