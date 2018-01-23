<template>
  <div>
     <v-layout row>
    <v-flex sm12 md10 offset-md1>
      <v-card height="100%">
        <v-card-media  height="30%" >
          <v-layout column class="media">
            <v-card-title>
              <v-btn dark icon @click="$router.push('/')">
                     <!-- <nuxt-link to="/"><v-icon>chevron_left</v-icon></nuxt-link> -->
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <!-- <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn> -->
              <!-- <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn> -->
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">登录</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-card-text>
       <v-form v-if="!$store.state.authUser" v-model="valid" ref="form" lazy-validation>
                  <!-- <v-container fluid> -->
                    <v-layout row>
                      <v-text-field label="用户名" v-model="formUsername" :rules="nameRules" :counter="10" required></v-text-field>
                    </v-layout>
                    <v-layout row>
                      <v-text-field name="input-10-1" label="密码" hint="At least 8 characters" v-model="formPassword" min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter></v-text-field>
                    </v-layout>
                    <v-layout row>
                      <v-checkbox label="是否同意条款?" v-model="checkbox" :rules="[v => !!v || '你必须同意条款方能继续!']" required></v-checkbox>
                    </v-layout>
                    <v-layout row>
                      <p v-if="formError">{{formError}}</p>
                    </v-layout>
                    <v-layout row>
                      <v-btn @click="submit" :disabled="!valid">
                        登录
                      </v-btn>
                      <v-btn @click="clear">清理</v-btn>
                    </v-layout>
                  <!-- </v-container> -->
                </v-form>
                <div v-else>
                  欢迎您， {{ $store.state.authUser.username }}!
                  <button @click="logout">注销</button>
                  <p>
                    <nuxt-link to="/home/books">开始创作</nuxt-link>
                  </p>
                </div>
                </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({
    e1: true,
    formError: null,
    formUsername: 'demo',
    formPassword: 'demo',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    checkbox: true
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    clear() {
      this.$refs.form.reset()
    },
    async login() {
      let self = this
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
        self.$router.push('/home/books')
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>

