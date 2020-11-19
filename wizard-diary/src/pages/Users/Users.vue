<template>
  <!-- <div class="page-container">
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

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer> -->

      <!-- <md-app-content>
        <div> -->
          <div class="page-container">
            <md-button class="md-fab md-primary md-fab-top-right" to="/cadastros-users">
        <md-icon>add</md-icon>
      </md-button>
    <md-table v-model="users.users" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

     <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>

      </md-table-row>

      <!-- <md-table-row v-for="item in users.users" :key="item.id"> -->
       <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell  md-label="id" md-sort-by="id" md-numeric>{{item.id}}</md-table-cell>
        <md-table-cell md-label="name" md-sort-by="name">{{item.name}}</md-table-cell>
        <md-table-cell md-label="email" md-sort-by="email">{{item.email}}</md-table-cell>

      </md-table-row>

       <!-- <md-table-row>
        <md-table-cell md-numeric>2</md-table-cell>
        <md-table-cell>Odette Demageard</md-table-cell>
        <md-table-cell>odemageard1@spotify.com</md-table-cell>
        <md-table-cell>Female</md-table-cell>
        <md-table-cell>Account Coordinator</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric>3</md-table-cell>
        <md-table-cell>Vera Taleworth</md-table-cell>
        <md-table-cell>vtaleworth2@google.ca</md-table-cell>
        <md-table-cell>Male</md-table-cell>
        <md-table-cell>Community Outreach Specialist</md-table-cell>
      </md-table-row> -->
    </md-table>
    </div>
  <!--
      </md-app-content> -->
    <!-- </md-app>
  </div> -->
</template>

<style lang="scss" scoped>
  .md-app {
    max-height: 700px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {

  mounted () {
    this.ActionGetUsers()
  },
  methods: {
    ...mapActions('users', ['ActionGetUsers'])
  },
  computed: {
    ...mapState('users', ['users'])
  },
  data: () => ({
    menuVisible: false
    // users: [
    //   {
    //     email: 'alesson@gmail.com',
    //     id: 3,
    //     isLogged: true,
    //     name: 'Alesson'
    //   },
    //   {
    //     email: 'alesson@gmail.com',
    //     id: 3,
    //     isLogged: true,
    //     name: 'Alesson'
    //   },
    //   {
    //     email: 'alesson@gmail.com',
    //     id: 3,
    //     isLogged: true,
    //     name: 'Alesson'
    //   }
    // ]
  })
}
</script>
