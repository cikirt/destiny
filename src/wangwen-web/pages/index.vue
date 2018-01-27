<template>
 <v-layout row wrap>
 <v-flex   xs12 sm10 offset-sm1>
<v-app >
  <v-content >
   
      <v-card height="100%">
        <v-card-media
           height="60%"
          class="white--text"
          src="/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">网文助手</span><br>
                 <span class="title">高效快捷的网络码字工具</span><br>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">特色功能</span><br>
            <span>系统化创作</span><br>
            <span>团队创作</span>
          </div>
        </v-card-title>
        <v-card-actions>
  
    <v-btn fab dark large color="cyan" @click="$router.push('/home/books')">
      <v-icon dark>edit</v-icon>
    </v-btn>
        <v-btn slot="activator" flat color="orange" @click="$router.push('/home/books')">开始创作</v-btn>
        <!-- <v-chip close v-model="chip2" color="red" text-color="white">步骤1-点击-><kbd>开始创作</kbd></v-chip> -->
        </v-card-actions>
      </v-card>
  
  </v-content>
   <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>© {{ new Date().getFullYear() }}</div>
  </v-footer>
</v-app>
  </v-flex>
   </v-layout>
   
</template>

<script>
export default {
  data() {
    return {
      chip2: true,
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
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
