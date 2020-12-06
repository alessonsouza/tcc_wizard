<template>
  <div >
    <div class="page-container">
      <md-app md-mode="reveal">
        <md-app-content>
            <div>
              <md-table visible="userVisible"  md-card>
               <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                <md-table-toolbar>
                  <h1 class="md-title">Tanurio (Sala 2) </h1>
                </md-table-toolbar>

                <md-table-row>
                  <md-table-head md-numeric>ID</md-table-head>
                  <md-table-head>Professor</md-table-head>
                  <md-table-head>Livro</md-table-head>
                </md-table-row>

                <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row slot="md-table-row" slot-scope="{ item }" v-if="(item.dia_semana == 'sabado') && item.professor == 'Tanurio' && item.horario === '08:00-10:00'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Professor" md-sort-by="professor">{{item.professor}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
            </div>
            <div style="marginTop: 10px">
              <md-table visible="userVisible"  md-card>
                <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Rafaela (Sala 1) </h1>
                  </md-table-toolbar>

                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Professor</md-table-head>
                    <md-table-head>Livro</md-table-head>
                  </md-table-row>
                  <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row  slot="md-table-row" slot-scope="{ item }" v-if="item.dia_semana == 'sabado' && item.professor == 'Rafaela' && item.horario === '08:00-10:00'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
              <!-- <jw-pagination :pageSize="2" :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            </div>
            <div style="marginTop: 10px">
              <md-table visible="userVisible"  md-card>
                <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Tanurio (Sala 2) </h1>
                  </md-table-toolbar>

                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Professor</md-table-head>
                    <md-table-head>Livro</md-table-head>
                  </md-table-row>
                  <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row  slot="md-table-row" slot-scope="{ item }" v-if="item.dia_semana == 'sabado' && item.professor == 'Tanurio' && item.horario === '10:00-12:00'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
              <!-- <jw-pagination :pageSize="2" :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            </div>
            <div style="marginTop: 10px">
              <md-table visible="userVisible"  md-card>
                <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Rafaela (Sala 1) </h1>
                  </md-table-toolbar>

                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Professor</md-table-head>
                    <md-table-head>Livro</md-table-head>
                  </md-table-row>
                  <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row  slot="md-table-row" slot-scope="{ item }" v-if="item.dia_semana == 'sabado' && item.professor == 'Rafaela' && item.horario === '10:00-12:00'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
              <!-- <jw-pagination :pageSize="2" :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            </div>
            <div style="marginTop: 10px">
              <md-table visible="userVisible"  md-card>
                <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Rafaela (Sala 2) </h1>
                  </md-table-toolbar>

                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Professor</md-table-head>
                    <md-table-head>Livro</md-table-head>
                  </md-table-row>
                  <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row  slot="md-table-row" slot-scope="{ item }" v-if="item.dia_semana == 'sabado' && item.professor == 'Rafaela' && item.horario === '13:30-15:30'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
              <!-- <jw-pagination :pageSize="2" :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            </div>
            <div style="marginTop: 10px">
              <md-table visible="userVisible"  md-card>
                <md-table v-model="contratos.contratos" md-sort="name" md-sort-order="asc" md-card>
                  <md-table-toolbar>
                    <h1 class="md-title">Sara (Sala 1) </h1>
                  </md-table-toolbar>

                  <md-table-row>
                    <md-table-head md-numeric>ID</md-table-head>
                    <md-table-head>Professor</md-table-head>
                    <md-table-head>Livro</md-table-head>
                  </md-table-row>
                  <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
                  <md-table-row  slot="md-table-row" slot-scope="{ item }" v-if="item.dia_semana == 'sabado' && item.professor == 'Sara' && item.horario === '13:30-15:30'">
                    <md-table-cell md-label="Aluno" md-sort-by="name">{{item.alunos.name}}</md-table-cell>
                    <md-table-cell md-label="Curso" md-sort-by="curso">{{item.curso}}</md-table-cell>
                    <md-table-cell md-label="Livro" md-sort-by="livro">{{item.livro}}</md-table-cell>
                    <md-table-cell md-label="Dia da Semana" md-sort-by="dia">{{item.dia_semana}}</md-table-cell>
                    <md-table-cell md-label="Horário" md-sort-by="dia">{{item.horario}}</md-table-cell>
                    <md-table-cell md-label="Observações" md-sort-by="observacoes">{{item.observacoes}}</md-table-cell>
                  </md-table-row>
                </md-table>
              </md-table>
              <!-- <jw-pagination :pageSize="2" :items="exampleItems" @changePage="onChangePage"></jw-pagination> -->
            </div>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 700px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 830px;
    max-width: calc(100vw - 125px);
  }

    $list-width: 320px;

  .full-control {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  .list {
    width: $list-width;
  }

  .full-control > .md-list {
    width: $list-width;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  }

  .control {
    min-width: 250px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
</style>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
// import store from '../../store'
// import Users from '../Users/Users'

export default {
  name: '2feira',
  mounted () {
    this.ActionGetContratos()
    this.teste = this.contratosGetter
  },
  methods: {
    ...mapActions('contratos', ['ActionGetContratos', 'ActionSetContratos']),
    onChangePage (pageOfItems) {
      console.log(pageOfItems)
      // update page of items
      this.pageOfItems = pageOfItems
      // this.ActionSetContratos(pageOfItems)
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('contratos', ['contratos']),
    ...mapGetters('contratos', ['contratosGetter'])
    // z
  },
  data: () => ({
    menuVisible: false,
    userVisible: false,
    pageOfItems: [],
    teste: []
  })
}
</script>
