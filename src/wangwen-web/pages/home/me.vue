<template>
  <v-layout row>
    <v-flex xs12 sm10 offset-sm1>
      <v-card height="100%">
        <v-card-media src="/docks.jpg" height="30%" >
          <v-layout column class="media">
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Ali Conners</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list  two-line>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile >
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(323) 555-6789</v-list-tile-title>
              <v-list-tile-sub-title>Work</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
           <v-divider inset></v-divider>
              <v-list-tile @click="logout" >
            <v-list-tile-content>
              <v-list-tile-title>注销</v-list-tile-title>
              <v-list-tile-sub-title>退出登录，回到主页面</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  middleware: 'auth',
  methods: {
    test() {}
  },
  data() {
    return {}
  },methods:{
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        
      }
      this.$router.push('/')
    }
  }
}
</script>
<style>
.media{
    height: 100%;
    margin: 0;
}
</style>