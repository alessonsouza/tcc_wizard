<template>
<div class="page-container">
      <md-app-content>
        <div>
          <div class="container">
            <form @submit="submit()" >
              <md-card>
                <md-card-header>
                  <div class="md-title">Agendamento</div>
                </md-card-header>
                <md-card-content>
                <div class="row">
                  <div class="col-md-6">
                    <md-field>
                      <label>Alunos</label>
                      <md-select v-model="form.aluno_id">
                        <md-option v-for="items in alunos.alunos" :key="items.id" :value="items.id">{{items.name}}</md-option>
                      </md-select>
                  </md-field>
                  </div>
                  <div class="col-md-6">
                    <md-field>
                      <label>Curso</label>
                      <md-select v-model="form.curso">
                        <md-option v-for="items in cursos" :key="items.id" :value="items.id">{{items.name}}</md-option>
                      </md-select>
                  </md-field>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <md-field>
                    <label>Professor</label>
                    <md-select v-model="form.professor">
                      <md-option v-for="items in professores" :key="items.id" :value="items.name">{{items.name}}</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="col-md-6">
                  <md-field>
                    <label>Livros</label>
                    <md-select v-model="form.livro">
                      <md-option v-for="items in livros" :key="items.id" :value="items.id">{{items.name}}</md-option>
                    </md-select>
                  </md-field>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <md-field>
                    <label>Dia da semana</label>
                    <md-select v-model="form.dia_semana">
                      <md-option v-for="items in diasSemanais" :key="items.id" :value="items.id">{{items.name}}</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="col-md-6">
                  <md-field>
                  <label>Horário</label>
                  <md-select v-model="form.horario">
                    <md-option v-for="items in horarios" :key="items.id" :value="items.name">{{items.name}}</md-option>
                  </md-select>
                </md-field>
                </div>
              </div>
              <md-field>
                <label>Observações</label>
                <md-input v-model="form.observacoes"></md-input>
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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AddContrato',
  mounted () {
    this.ActionGetAlunos()
  },
  props: {
    contratoVisible: {
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
        curso: null,
        professor: null,
        horario: null,
        dia_semana: null,
        livro: null,
        aluno_id: null,
        observacoes: ''
      },
      menuVisible: false,
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
        { id: 'W2', name: 'W2' },
        { id: 'W2B', name: 'W2B' },
        { id: 'W4', name: 'W4' },
        { id: 'W4B', name: 'W4B' },
        { id: 'W6', name: 'W6' },
        { id: 'W8', name: 'W8' },
        { id: 'W10', name: 'W10' },
        { id: 'W12', name: 'W12' },
        { id: 'W12B', name: 'W12B' },
        { id: 'K2', name: 'K2' },
        { id: 'K2B', name: 'K2B' },
        { id: 'K4B', name: 'K4B' },
        { id: 'K6', name: 'K6' },
        { id: 'T2', name: 'T2' },
        { id: 'T4', name: 'T4' },
        { id: 'T4B', name: 'T4B' },
        { id: 'T6', name: 'T6' },
        { id: 'T8', name: 'T8' },
        { id: 'T8', name: 'T8B' }
      ],
      professores: [
        { id: '1', name: 'Tanurio' },
        { id: '2', name: 'Rafaela' },
        { id: '3', name: 'Bruna' },
        { id: '4', name: 'Carla' },
        { id: '5', name: 'Alesson' },
        { id: '6', name: 'Julia' }
      ],
      horarios: [
        { id: '08:00-10:00', name: '08:00-10:00' },
        { id: '09:00-11:00', name: '09:00-11:00' },
        { id: '10:00-12:00', name: '10:00-12:00' },
        { id: '13:30-15:30', name: '13:30-15:30' },
        { id: '15:30-17:30', name: '15:30-17:30' },
        { id: '14:30-16:30', name: '14:30-16:30' },
        { id: '18:30-19:30', name: '18:30-19:30' },
        { id: '19:30-21:30', name: '19:30-21:30' }
      ]
    }
  },
  methods: {
    ...mapActions('addContrato', ['ActionInsertContratos', 'ActionUpdateContratos']),
    ...mapActions('contratos', ['ActionGetContratos']),
    ...mapActions('alunos', ['ActionGetAlunos']),
    async submit () {
      console.log(this.form)
      if (this.typeAction === 'update') {
        await this.ActionUpdateContratos(this.form)
        this.ActionGetAlunos()
        this.ActionGetContratos()
        this.$parent.contratoVisible = false
      } else {
        await this.ActionInsertContratos(this.form)
        this.ActionGetAlunos()
        this.cleanFields()
        this.ActionGetContratos()
      }
    },
    cleanFields () {
      let field
      for (field in this.form) {
        this.form[field] = ''
      }
    }
  },
  computed: {
    ...mapState('alunos', ['alunos']),
    ...mapState('contratos', ['contrato'])
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
