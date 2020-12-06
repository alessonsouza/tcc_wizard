export default [
  {
    path: '/login',
    name: 'login',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ './pages/Login.vue')
  }
]
