<template>
<div>
        <v-toolbar dark color="primary">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
       <v-btn icon @click="$router.push('/home/books')">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">章节列表 《多情剑客无情剑》</v-toolbar-title>
    <v-spacer></v-spacer>
 
    <!-- <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn> -->
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
    这里存放某一作品的章节列表
    【增加章节【删除章节】【章节调序】【章节修改】的入口
    跟场景列表类似，就是个增删查该的功能。
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'home',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
