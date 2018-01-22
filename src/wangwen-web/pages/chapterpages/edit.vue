<template>
<div>
      <v-toolbar dark color="primary">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
       <v-btn icon @click="$router.push('/chapterpages/list')">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">章节编写</v-toolbar-title>
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
     
    <v-card >
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <div class="body-2 ">   <v-btn fab dark large color="cyan">
      <v-icon dark>edit</v-icon>
    </v-btn>素材使用，跳出素材界面，可以查看本章节需要使用的素材。以及标记素材使用情况</div>
          </v-flex>
          <v-flex xs12>
            <v-text-field box  label="文章标题" v-model="title"></v-text-field>
          </v-flex>
  
          <v-flex xs12>
            <v-text-field box  multi-line label="文章内容" v-model="text">
                 
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
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
      title:"第一章 巴拉巴拉",
      text:" 具体某一个章节编辑界面。这里选择场景编号的意义在于查看素材。标记是否被使用。【章节不用和场景直接挂钩，最终会根据其使用了某些场景的素材自动关联】。每个章节必定属于某一场景。这个设定是为了简化章节书写的难度。击中精力使用预先设计、构想、收集好的一些素材。直接书写文章。对于已经使用了的素材。在此界面可以标记为已使用。便于后续章节维护。"
    }
  }
}
</script>
