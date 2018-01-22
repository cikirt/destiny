<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer fixed v-model="drawer" app>
      <navigationlist>
      </navigationlist>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>作品设计</v-toolbar-title>
    </v-toolbar> -->
    <v-content>
     <v-card id="create" height="100%" style="padding-bottom:50px;overflow: hidden;">
    <nuxt/>
    <v-bottom-nav   :value="true" :active.sync="e2" :color="computedColor">
      <v-btn dark  @click="$router.push('/home/books')">
        <span>灵感●素材</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn dark @click="$router.push('/home/chapter')">
        <span>畅想●文字</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn dark  @click="$router.push('/home/message')">
        <span>消息</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn dark  @click="$router.push('/home/me')">
        <span>自己</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>

     </v-card>
    </v-content>     
  </v-app>
</template>

<script>
import navigationlist from './components/navigationlist'
import usercenter from './components/usercenter'
export default {
  components: { navigationlist, usercenter },
  data: () => ({
    e2: 0,
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    test() {}
  },
  computed: {
    computedColor() {
      switch (this.e2) {
        case 0:
          return 'blue-grey'
          break
        case 1:
          return 'teal'
          break
        case 2:
          return 'brown'
          break
        case 4:
          return 'brown lighten-1'
          break
      }
    }
  }
}
</script>