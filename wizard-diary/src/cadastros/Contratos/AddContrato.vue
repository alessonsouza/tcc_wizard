<template>
    <form @submit="submit()">
   <md-dialog :md-active.sync="contratoVisible" max-width="800px">

    <md-card max-width="800px">
      <md-card-header>
        <div class="md-title">Contratos</div>
      </md-card-header>
      <md-card-content>
      <div className="row">
       <md-field>
      <label>Nome completo</label>
      <md-input v-model="form.name"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
      </div>

    <md-field>
      <label>idade</label>
      <md-input v-model="form.idade"></md-input>
      <span class="md-helper-text"></span>
    </md-field><md-field>
      <label>CPF</label>
      <md-input v-model="form.cpf"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
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
        <md-button @click.prevent="contratoVisible = !contratoVisible">
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
  name: 'AddContrato',
  props: {
    contratoVisible: {
      default: true
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
      visible: this.contratoVisible
    }
  },
  methods: {
    ...mapActions('addContratos', ['ActionInsertContratos']),
    ...mapActions('alunos', ['ActionGetAlunos']),
    async submit () {
      console.log(this.form)
      await this.ActionInsertContratos(this.form)
      this.ActionGetAlunos()
      this.contratoVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
