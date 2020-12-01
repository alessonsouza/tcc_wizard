<template>
    <form @submit="submit()" >

    <md-card>
      <md-card-header>
        <div class="md-title">Contratos</div>
      </md-card-header>
      <md-card-content>
      <div className="row">
      <div className="col-md-6">
        <md-field>
        <label>Alunos</label>
        <md-select v-model="form.aluno_id">
          <md-option v-for="items in alunos.alunos" :key="items.id" :value="items.id">{{items.name}}</md-option>
        </md-select>
      </md-field>
      </div>

      <div className="col-md-6">
           <md-field>
        <label>Curso</label>
        <md-select v-model="form.curso">
          <md-option v-for="items in cursos" :key="items.id" :value="items.id">{{items.name}}</md-option>
        </md-select>
      </md-field>
     </div>
    </div>
        <md-field>
        <label>Livros</label>
        <md-select v-model="form.livro">
          <md-option v-for="items in livros" :key="items.id" :value="items.id">{{items.name}}</md-option>
        </md-select>
      </md-field>
    <md-field>
      <label>Horário</label>
      <md-input v-model="form.horario"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
    <md-field>
        <label>Dia da semana</label>
        <md-select v-model="form.dia_semana">
          <md-option v-for="items in diasSemanais" :key="items.id" :value="items.id">{{items.name}}</md-option>
        </md-select>
      </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button v-on:click="submit()">
          Salvar
        </md-button>
      </md-card-actions>
    </md-card>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AddContrato',
  mounted () {
    this.ActionGetAlunos()
  },
  props: {
    contratoVisible: {
      default: true
    }
  },
  data () {
    return {
      form: {
        curso: null,
        professor: 'Paulo',
        horario: null,
        dia_semana: null,
        livro: null,
        aluno_id: null
      },
      visible: this.contratoVisible,
      diasSemanais: [
        { id: 'segunda', name: 'Segunda-Feira' },
        { id: 'terca', name: 'Terça-Feira' },
        { id: 'quarta', name: 'Quarta-Feira' },
        { id: 'quinta', name: 'Quinta-Feira' },
        { id: 'sexta', name: 'Sexta-Feira' },
        { id: 'sabado', name: 'Sábado' }
      ],
      cursos: [
        { id: 'ingles', name: 'Inglês' },
        { id: 'espanhol', name: 'Espanhol' },
        { id: 'italiano', name: 'Italiano' },
        { id: 'frances', name: 'Francês' }
      ],
      livros: [
        { id: 'w2', name: 'W2' },
        { id: 'w4', name: 'W4' },
        { id: 'w6', name: 'W6' },
        { id: 'w8', name: 'W8' },
        { id: 'w10', name: 'W10' },
        { id: 'w12', name: 'W12' }
      ]
    }
  },
  methods: {
    ...mapActions('addContrato', ['ActionInsertContratos']),
    ...mapActions('contratos', ['ActionGetContratos']),
    ...mapActions('alunos', ['ActionGetAlunos']),
    async submit () {
      console.log(this.form)
      await this.ActionInsertContratos(this.form)
      this.ActionGetAlunos()
      this.ActionGetContratos()
    }
  },
  computed: {
    ...mapState('alunos', ['alunos'])
  }
}
</script>

<style lang="stylus" scoped>

</style>
