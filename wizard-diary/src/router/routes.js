import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/Home'
import { routes as users } from '../pages/Users'
import { routes as alunos } from '../pages/Alunos'
import { routes as addUser } from '../cadastros/Users'
import { routes as addAluno } from '../cadastros/Alunos'

export default [
  ...auth,
  ...home,
  ...users,
  ...alunos,
  ...addUser,
  ...addAluno,
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
]
