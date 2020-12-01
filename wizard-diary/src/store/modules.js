import { store as auth } from '@/modules/auth'
import { store as users } from '@/pages/Users'
import { store as alunos } from '@/pages/Alunos'
import { store as contratos } from '@/pages/Contratos'
import { store as addUser } from '@/cadastros/Users'
import { store as addAlunos } from '@/cadastros/Alunos'
import { store as addContrato } from '@/cadastros/Contratos'

export default ({
  auth,
  users,
  alunos,
  contratos,
  addUser,
  addAlunos,
  addContrato
})
