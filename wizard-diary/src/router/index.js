import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router
