<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Agenda Interactive</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent">Menu Principal</md-toolbar>
      <md-list>
         <md-list-item to="/">
            <md-icon>home
              </md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>
      </md-list>
        <md-list md-expand>
          <md-list-item md-expand>
          <md-icon>list</md-icon>
          <span class="md-list-item-text">Cadastros</span>
            <md-list slot="md-expand">
              <md-list-item to="/users" class="md-inset">
              <md-icon>people
                </md-icon>
              <span class="md-list-item-text">Usuários</span>
              </md-list-item>
              <md-list-item to="/alunos" class="md-inset">
              <md-icon>people
                </md-icon>
              <span class="md-list-item-text">Alunos</span>
              </md-list-item>
              <md-list-item to="/contratos" class="md-inset">
              <md-icon>book
                </md-icon>
              <span class="md-list-item-text">Agendamentos</span>
              </md-list-item>
            </md-list>
          </md-list-item>
         </md-list>
        <md-list>
         <md-list-item v-on:click="logout()" to="/login">
            <md-icon>input
              </md-icon>
            <span class="md-list-item-text">Sair</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <div>
            <div class="page-container">
              <md-button class="md-fab md-primary md-fab-top-right" @click="contratoVisible = !contratoVisible">
                <md-icon>add</md-icon>
              </md-button>
            <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
              <md-table-toolbar>
                <h1 class="md-title">Agendamentos</h1>
              </md-table-toolbar>

              <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Professor</md-table-head>
                <md-table-head>Livro</md-table-head>
              </md-table-row>

              <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                <md-table-row slot="md-table-row" slot-scope="{ item , index }">
                  <md-table-cell  md-label="id" md-sort-by="id" md-numeric>{{item.id}}</md-table-cell>
                  <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                  <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                  <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                  <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                  <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                  <md-button class="md-fab md-primary " @click="update(item, index, 'update')">
                    <md-icon>edit</md-icon>
                  </md-button>
                  <md-button class="md-fab md-secondary md-right" @click="deletar(item)">
                    <md-icon>delete</md-icon>
                  </md-button>
                  <md-dialog-confirm
                    :md-active.sync="deleteVisible"
                    md-title="Agendamento excluido com sucesso?"
                    md-content=""
                    md-confirm-text="ok"
                    md-cancel-text=""
                    @md-cancel="onCancel"
                    @md-confirm="onCancel"/>
                </md-table-row>
              </md-table>
              <md-dialog :md-active.sync="contratoVisible" :md-fullScreen="true">
                  <AddContrato :typeAction.sync="action" :localform.sync="items" :contratoVisible.sync="contratoVisible" to="/cadastros-contratos" />
              </md-dialog>
          </div>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 700px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 530px;
    max-width: calc(100vw - 125px);
  }
   .md-dialog-content {
  max-width: 300px;
  }

  .md-app-content {
    background-image: linear-gradient(to bottom, white, rgb(8, 60, 109));
  }

  // .md-dialog  .md-dialog-container {
  //   max-width: 768px;
  // }

//     .md-dialog-container {
//       width: 100% !important;
//   height: 100% !important;
//   max-width: 100% !important;
//   max-height: 100% !important;
//   border-radius: 0 !important;
//   transform: none !important;
//    }

//    .md-dialog {
//   width: 100% !important;
//   height: 100% !important;
//   max-width: 100% !important;
//   max-height: 100% !important;
//   border-radius: 0 !important;
//   transform: none !important;
// }
</style>

<script>
import { mapActions, mapState } from 'vuex'

import AddContrato from '../../cadastros/Contratos/AddContrato'
export default {
  name: 'Contratos',
  components: {
    AddContrato
  },
  mounted () {
    this.ActionGetContratos()
  },
  computed: {
    ...mapState('contratos', ['contratos']),
    ...mapState('contratos', ['contrato'])
  },
  methods: {
    ...mapActions('contratos', ['ActionGetContratos', 'ActionGetContratosById']),
    ...mapActions('addContrato', ['ActionDeleteContratos']),
    ...mapActions('alunos', ['ActionGetAlunos']),
    ...mapActions('auth', ['ActionSignOut']),
    update (data, index, action) {
      // nextTick(() => {
      this.ActionGetContratosById(data.id)
      this.items = data
      this.contratoVisible = true
      this.updated = false
      this.action = action
      // })
    },
    async deletar (item) {
      await this.ActionDeleteContratos(item.id)
      this.deleteVisible = true
      this.ActionGetContratos()
    },
    onCancel () {
      this.deleteVisible = false
    },
    logout () {
      this.ActionSignOut()
    }
  },

  data: () => ({
    menuVisible: false,
    contratoVisible: false,
    deleteVisible: false,
    updated: true,
    action: '',
    items: {}
  })
}
</script>
