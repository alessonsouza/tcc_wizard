export default [
  {
    path: '/cadastros-users',
    name: 'addUser',
    component: () => import(/* webpackChunkName: "about" */ './AddUser')

  }
]
