<template>
<div class="page-container">
      <md-app-content>
        <div>
          <div class="container">
            <form @submit="submit()">
            <md-card>
              <md-card-header>
                <div class="md-title">Cadastro usuários</div>
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
                <div class="col-md-12">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="form.email"></md-input>
                    <span class="md-helper-text"></span>
                  </md-field>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <md-field>
                    <label>Senha</label>
                    <md-input v-model="form.password" type="password"></md-input>
                    <span class="md-helper-text"></span>
                  </md-field>
                </div>
              </div>
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
  name: 'AddUser',
  props: {
    userVisible: {
      type: Boolean,
      default: true
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
        email: null,
        password: null
      },
      visible: this.userVisible
    }
  },
  methods: {
    ...mapActions('addUser', ['ActionInsertUsers', 'ActionUpdateUsers']),
    ...mapActions('users', ['ActionGetUsers']),
    async submit () {
      console.log(this.localform)

      if (this.typeAction === 'update') {
        await this.ActionUpdateUsers(this.form)
        this.ActionGetUsers()
        this.userVisible = false
      } else {
        await this.ActionInsertUsers(this.form)
        this.cleanFields()
        this.ActionGetUsers()
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
    if (this.typeAction === 'update') {
      this.form = this.localform
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
