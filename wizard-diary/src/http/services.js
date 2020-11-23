import { services as auth } from '@/modules/auth'
import { services as users } from '@/pages/Users'
import { services as alunos } from '@/pages/Alunos'
import { services as addUsers } from '@/cadastros/Users'
import { services as addAlunos } from '@/cadastros/Alunos'

export default {
  auth,
  users,
  alunos,
  addUsers,
  addAlunos
}
