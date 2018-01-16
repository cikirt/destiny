<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <navigationlist>
      </navigationlist>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>作品设计</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
       <nuxt/>
        </v-layout>
      </v-container>
    <v-bottom-nav
      absolute
      shift
      :value="true"
      :active.sync="e2"
      :color="computedColor"
    >
      <v-btn dark @click="$router.push('/scenarist/books')">
        <span>作品管理</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn dark @click="$router.push('/scenarist/scenes')">
        <span>场景管理</span>
        <v-icon>music_note</v-icon>
      </v-btn>
    </v-bottom-nav>
    </v-content>
    
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
     
  </v-app>
</template>

<script>
import  navigationlist  from "./components/navigationlist";
export default {
  components:{navigationlist},
  data: () => ({
    e2: 3,
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
      }
    }
  }
}
</script>