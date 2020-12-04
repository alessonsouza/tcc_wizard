export default {
  addAluno: { method: 'POST', url: 'alunos' },
  updateAluno: { method: 'PUT', url: 'alunos{/aluno_id}' },
  deleteAluno: { method: 'DELETE', url: 'alunos{/aluno_id}' }
}
