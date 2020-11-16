import Vue from 'vue'
import VueResourse from 'vue-resource'
import services from './services'

Vue.use(VueResourse)

const http = Vue.http

http.options.root = 'http://localhost:3000'

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

const setBearerToken = token => {
  http.headers.common.Authorization = `Bearer ${token}`
}

export { http, setBearerToken }
export default services
