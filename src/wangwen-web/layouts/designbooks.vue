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
     <v-card id="create" height="100%" style="overflow: hidden;">
    <v-card-text class="text-xs-center">
       <v-container fluid fill-height>
      <v-layout justify-center align-center>
       <nuxt/>
        </v-layout>
         </v-container>
    </v-card-text>
    <v-bottom-nav absolute :value="true" :active.sync="e2" color="computedColor">
      <v-btn flat color="teal" @click="$router.push('/scenarist/books')">
        <span>消息</span>
        <v-icon>book</v-icon>
      </v-btn>
      <v-btn flat color="teal" @click="$router.push('/scenarist/books')">
        <span>设计</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="teal" @click="$router.push('/scenarist/scenes')">
        <span>写作</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat color="teal" @click="$router.push('/scenarist/me')">
        <span>自己</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
    <usercenter></usercenter>
     </v-card>
    </v-content>     
  </v-app>
</template>

<script>
import navigationlist from './components/navigationlist'
import usercenter from './components/usercenter'
export default {
  components: { navigationlist,usercenter },
  data: () => ({
    e2: 1,
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    test() {}
  },
  computed: {}
}
</script>