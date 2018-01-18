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
    <nuxt/>
     <v-bottom-nav absolute :value="true" :active.sync="e2">
      <v-btn dark @click="$router.push('/home/chapter')">
        <span>保存</span>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn dark @click="$router.push('/home/chapter')">
        <span>取消</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
    <!-- <usercenter></usercenter> -->
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