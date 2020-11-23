export default [
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ './Users')

  }
]
