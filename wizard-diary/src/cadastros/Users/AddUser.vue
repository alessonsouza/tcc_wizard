<template>
 <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Cadastro usuários</div>
      </md-card-header>
      <md-card-content>hello porra</md-card-content>
      <md-card-actions>
        <md-button @click.prevent="!userVisible">
          Fechar
        </md-button>
        <md-button>
          Salvar
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
    name: 'AddUser',
    props: {
      userVisible: {
        default: false
      }
    },
    data() {
      return {
        form: {
          name: null,
          email: null,
          senha: null
        }
      }
    },
    methods: {
      submit() {}
    }
}
</script>

<style lang="stylus" scoped>

</style>
