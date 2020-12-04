export default [
  {
    path: '/cadastros-alunos',
    name: 'addAluno',
    component: () => import(/* webpackChunkName: "about" */ './AddAluno')

  }
]
