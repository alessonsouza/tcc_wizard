import services from '@/http'
// import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
// Dispatch serve para chamarmos uma outra action
export const ActionInsertContratos = (context, form) => {
  return services.addContratos.addContrato(form)
}
export const ActionUpdateContratos = (context, form) => {
  console.log('UPDATE', form)
  return services.addContratos.updateContrato({ id_con: form.id }, form)
}
export const ActionDeleteContratos = (context, form) => {
  console.log('DELETER', form)
  return services.addContratos.deleteContrato({ id: form })
}
