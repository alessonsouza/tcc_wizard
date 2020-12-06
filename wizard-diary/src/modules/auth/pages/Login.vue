<template>
<form @submit.prevent="submit()">
    <div class="login-page">
        <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
                <div class="form-group">
                    <md-field required="true">
                      <md-icon>person
                     </md-icon>
                    <label>Email</label>
                    <md-input v-model="form.email" required></md-input>
                    <span class="md-helper-text"></span>
                   </md-field>
                    </div>
                    <div class="form-group">
                    <md-field >
                      <md-icon>lock
                    </md-icon>
                    <label>Senha</label>
                    <md-input v-model="form.password" type="password" required></md-input>
                    <span class="md-helper-text"></span>
                  </md-field>
                    </div>

                    <button class="btn btn-primary w-100">
                        Entrar
                    </button>
            </div>
        </div>
    </div>
</form>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    form: {
      email: '',
      password: '',
      isLogged: true
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    // ...mapActions('auth', ['ActionGetUsers']),
    async submit () {
      try {
        await this.ActionDoLogin(this.form)
        // await this.ActionGetUsers()
        // await this.ActionUserLogado(this.form.user.id)

        this.$router.push({ name: 'home' })
        console.log(this.state)
      } catch (error) {
        console.log(error)
        alert(error.body ? error.body.message : 'Não foi possível realizar o login')
      }
    }
  }

}
</script>

<style scoped lang="scss">
.login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .card{
        width: 30%;
    }
    background: rgb(52, 52, 192) ;

    background-repeat: no-repeat;
    background-position: center;
    background-image: linear-gradient(to bottom, white, rgb(8, 60, 109));
}

</style>
