export default [
  {
    path: '/alunos',
    name: 'alunos',
    component: () => import(/* webpackChunkName: "about" */ './Alunos')

  }
]
