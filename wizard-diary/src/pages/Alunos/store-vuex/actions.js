import services from '@/http'
import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
// Dispatch serve para chamarmos uma outra action
export const ActionGetAlunos = ({ commit }) => {
  return services.alunos.alunos().then(res => {
    console.log('PEGANDO USERS' + res.data)
    commit(types.SET_ALUNOS, res.data)
  })
}
