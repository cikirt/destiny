<template>
  <div>
    <v-toolbar class="cyan darken-3" dark color="primary">
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-btn icon @click="$router.push('/home/books')">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">作品信息</v-toolbar-title>
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
    <v-content>
      <v-card color="grey lighten-4">
        <v-card-text style="padding-bottom:50px;">
          <!-- <v-container fluid> -->
          <div>
            <div class="album-img-list">
              <ul>
                <li :key="img" v-for="img in imgList">
                  <div class="album-bg-img"><img :src='img.src'> </div>
                </li>
              </ul>
            </div>
            <div class="album">
              <label for="img-upload">上传照片</label>
              <imageHtml5Upload @loadok="imgListTmp=>{imgList = imgListTmp }"></imageHtml5Upload>
            </div>
          </div>
          <v-layout row>
            <v-text-field name="input-1" label="作品名称" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事题材" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事风格" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事起因" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事发展" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事高潮" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事结局" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事中心思想" id="testing"></v-text-field>
          </v-layout>
          <v-layout row>
            <v-text-field name="input-1" label="故事主要角色" id="testing"></v-text-field>
          </v-layout>
          <!-- </v-container> -->
        </v-card-text>
      </v-card>
    </v-content>
  </div>
</template>
<script>
import imageHtml5Upload from './components/image-html5-upload.vue'
export default {
  components: {
    imageHtml5Upload
  },
  middleware: 'auth',
  layout: 'home',
  methods: {
    test() {

    }
  },
  data() {
    return {
      imgList:[]
    }
  }
}
</script>
