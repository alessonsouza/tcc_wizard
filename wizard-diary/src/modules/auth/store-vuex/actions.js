import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'
// crio funçoes onde alteram o stado dos dados
// export const ActionSetUser = (context, payload) -- O "context" possui vários método dentro dele
// por exemplo a gente um médoto que podemos chamar uma outra Action, e um podemos chamar a mutation (commit),
// além de poder chamar o proprio state
// Dispatch serve para chamarmos uma outra action
export const ActionDoLogin = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('ActionSetUser', res.data.user)
    dispatch('ActionSetToken', res.data.token)
  })
}

export const ActionGetUsers = ({ dispatch }) => {
  return services.auth.users().then(res => {
    console.log('PEGANDO USERS' + res.data)
    dispatch('ActionSetUsers', res.data)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('ActionSetToken', token)
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise((resolve, reject) => {
    try {
      services.auth.loadSession().then(response => {
        dispatch('ActionSetUser', response.data.user)
      })

      resolve()
    } catch (error) {
      dispatch('ActionSignOut')
      reject(error)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetUsers = ({ commit }, payload) => {
  commit(types.SET_USERS, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)

  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
}
