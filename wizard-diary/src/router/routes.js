import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/Home'

export default [
  ...auth,
  ...home,

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
]
