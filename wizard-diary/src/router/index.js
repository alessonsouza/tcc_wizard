import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import routes from './routes'
import beforeEach from './beforeEach'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach(beforeEach)

export default router
