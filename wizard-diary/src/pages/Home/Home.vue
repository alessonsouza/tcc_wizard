<template>
<div >
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Agenda Interactive</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu Principal</md-toolbar>
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
        <md-tabs class="md-transparent" md-alignment="fixed">
              <md-tab id="segunda" md-label="2ª Feira">
                <SegundaFeira/>
              </md-tab>
              <md-tab id="terca" md-label="3ª Feira">
                <TercaFeira/>
              </md-tab>
               <md-tab id="quarta" md-label="4ª Feira">
                <QuartaFeira />
                </md-tab>
                <md-tab id="quinta" md-label="5ª Feira">
                <QuintaFeira />
                </md-tab>
                <md-tab id="sexta" md-label="6ª Feira">
                <SextaFeira />
                </md-tab>
                <md-tab id="sabado" md-label="Sábado">
                <Sabado />
                </md-tab>
              </md-tabs>
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
    width: 530px;
    max-width: calc(100vw - 125px);

  }

  // .md-toolbar.md-theme-default.md-primary {
  //   background-color: rgb(52, 49, 225);
  // }

  .md-app-content {
    background-image: linear-gradient(to bottom, white, rgb(8, 60, 109));
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
// import AddContrato from '../../cadastros/Contratos/AddContrato'
// import AddContrato from '../../cadastros/Contratos/AddContrato.vue'
import SegundaFeira from './2Feira.vue'
import TercaFeira from './3Feira.vue'
import QuartaFeira from './4Feira.vue'
import QuintaFeira from './5Feira.vue'
import SextaFeira from './6Feira.vue'
import Sabado from './Sabado.vue'

export default {
  name: 'home',
  components: {
    SegundaFeira,
    TercaFeira,
    QuartaFeira,
    QuintaFeira,
    SextaFeira,
    Sabado
  },
  mounted () {
    this.ActionGetContratos()
    this.teste = this.contratosGetter
  },
  methods: {
    ...mapActions('contratos', ['ActionGetContratos', 'ActionSetContratos']),
    ...mapActions('auth', ['ActionSignOut']),
    onChangePage (pageOfItems) {
      console.log(pageOfItems)
      // update page of items
      this.pageOfItems = pageOfItems
      // this.ActionSetContratos(pageOfItems)
    },
    logout () {
      this.ActionSignOut()
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
