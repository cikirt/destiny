<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-app>
          <v-content>
            <v-card height="100%" color="grey lighten-4">
              <v-card-text>
                <v-form v-if="!$store.state.authUser" v-model="valid" ref="form" lazy-validation>
                  <v-container fluid>
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
                  </v-container>
                </v-form>
                <div v-else>
                  你好 {{ $store.state.authUser.username }}!
                  <pre>你已登录成功.</pre>
                  <p><i>你可以选择注销或者前往其它页面</i></p>
                  <button @click="logout">Logout</button>
                  <p>
                    <nuxt-link to="/scenarist">开始创作</nuxt-link>
                  </p>
                </div>
                <nuxt-link to="/">回主页</nuxt-link>
              </v-card-text>
            </v-card>
          </v-content>
        </v-app>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({
    e1: true,
    formError: null,
    formUsername: '',
    formPassword: '',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    checkbox: false
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
        self.$router.push('/scenarist')
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

