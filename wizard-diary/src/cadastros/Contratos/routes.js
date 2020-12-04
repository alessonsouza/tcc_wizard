export default [
  {
    path: '/cadastros-contratos',
    name: 'addContrato',
    component: () => import(/* webpackChunkName: "about" */ './AddContrato')
  }
]
