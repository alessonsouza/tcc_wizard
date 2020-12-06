// "to" = referente à rota pra onde a gente vai
// "from" = referente à tota de onde a gente veio (caso existir)
// "next" = referente à queremos ir logo em seguida(depois do "to") ------tem que ser invocado sempre, senão fica parado

import store from '../store'
export default async (to, from, next) => {
//   document.title = to.name
  // console.log(to)

  if (to.name !== 'login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/ActionCheckToken')
      console.log(to.name, !store.getters['auth/hasToken'])
      next({ name: to.name })
    } catch (error) {
      next({ name: 'login' })
    }
  } else {
    console.log(to.name, store.getters['auth/hasToken'])
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
}
