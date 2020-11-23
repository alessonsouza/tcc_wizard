<template>
    <form @submit="submit()">
   <md-dialog :md-active.sync="userVisible" :md-fullscreen="true" min-width="800px">

    <md-card max-width="800px">
      <md-card-header>
        <div class="md-title">Cadastro usuários</div>
      </md-card-header>
      <md-card-content>
        <md-field>
      <label>Nome completo</label>
      <md-input v-model="form.name"></md-input>
      <span class="md-helper-text"></span>
    </md-field><md-field>
      <label>Email</label>
      <md-input v-model="form.email"></md-input>
      <span class="md-helper-text"></span>
    </md-field><md-field>
      <label>Senha</label>
      <md-input v-model="form.password"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button @click.prevent="userVisible = !userVisible">
          Fechar
        </md-button>
        <md-button v-on:click="submit()">
          Salvar
        </md-button>
      </md-card-actions>
    </md-card>
    </md-dialog>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddUser',
  props: {
    userVisible: {
      default: true
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
    ...mapActions('addUser', ['ActionInsertUsers']),
    async submit () {
      console.log(this.form)
      await this.ActionInsertUsers(this.form)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
