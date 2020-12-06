<template>
<div class="page-container">
      <md-app-content>
        <div>
        <div class="container">
          <form @submit="submit()">
          <md-card>
            <md-card-header>
              <div class="md-title">Cadastro alunos</div>
            </md-card-header>
            <md-card-content>
          <div class="row">
            <div class="col-md-12">
                <md-field>
                <label>Nome completo</label>
                <md-input v-model="form.name"></md-input>
                <span class="md-helper-text"></span>
              </md-field>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <md-field>
                <label>idade</label>
                <md-input v-model="form.idade"></md-input>
                <span class="md-helper-text"></span>
              </md-field>
            </div>
            <div class="col-md-6">
              <md-field>
                <label>CPF</label>
                <md-input v-model="form.cpf"></md-input>
                <span class="md-helper-text"></span>
              </md-field>
            </div>
          </div>

          <md-field>
            <label>Nome da mãe</label>
            <md-input v-model="form.mae"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>Nome do pai</label>
            <md-input v-model="form.pai"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
            </md-card-content>
            <md-card-actions>
              <md-button v-on:click="submit()">
                Salvar
              </md-button>
            </md-card-actions>
          </md-card>
          </form>
        </div>
        </div>
        </md-app-content>

  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 700px;
    border: 5px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
   .md-dialog-content {
  max-width: 300px;
  }
  .md-card {
    display: grid;
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
import { mapActions } from 'vuex'
export default {
  name: 'AddAluno',
  props: {
    alunosVisible: {
      type: Boolean
    },
    localform: {
      type: Object,
      default () {}
    },
    typeAction: {
      type: String
    }
  },
  data () {
    return {
      form: {
        name: null,
        idade: null,
        cpf: null,
        mae: null,
        pai: null
      },
      visible: this.alunosVisible
    }
  },
  methods: {
    ...mapActions('addAlunos', ['ActionInsertAlunos', 'ActionUpdateAlunos']),
    ...mapActions('alunos', ['ActionGetAlunos']),
    async submit () {
      console.log(this.form)

      if (this.typeAction === 'update') {
        await this.ActionUpdateAlunos(this.form)
        this.alunosVisible = false
      } else {
        console.log(this.form)
        await this.ActionInsertAlunos(this.form)
        this.cleanFields()
        this.alunosVisible = false
        this.ActionGetAlunos()
      }
    },
    cleanFields () {
      let field
      for (field in this.form) {
        this.form[field] = ''
      }
    }
  },
  created () {
    console.log(this.localform)
    if (this.typeAction === 'update') {
      this.form = this.localform
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
