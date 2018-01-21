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
     <v-card id="create" height="100%" style="overflow: hidden;padding-bottom:50px;">
    <nuxt/>
     <v-bottom-nav  :value="true" :active.sync="e2">
      <v-btn dark @click="$router.push('/bookpages/scene')">
        <span>保存</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn dark @click="$router.push('/bookpages/scene')">
        <span>取消</span>
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
  components: { navigationlist, usercenter },
  data: () => ({
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
