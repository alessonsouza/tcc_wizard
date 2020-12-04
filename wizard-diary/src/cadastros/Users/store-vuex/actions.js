import services from '@/http'
// import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
// Dispatch serve para chamarmos uma outra action
export const ActionInsertUsers = (context, form) => {
  return services.addUsers.addUser(form)
}
export const ActionUpdateUsers = (context, form) => {
  console.log('UPDATE', form)
  return services.addUsers.updateUser({ user_id: form.id }, form)
}
export const ActionDeleteUsers = (context, form) => {
  console.log('DELETER', form)
  return services.addUsers.deleteUser({ user_id: form })
}
