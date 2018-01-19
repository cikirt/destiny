<template>
<div>
      <v-card color="grey lighten-4" flat>
    <v-card-text style="padding-bottom:50px;">
      <!-- <v-container fluid> -->
        <v-layout row>
         <v-text-field
              name="input-1"
              label="作品名称"
              id="testing"
            ></v-text-field>
        </v-layout>
           <v-layout row>
         <v-text-field
              name="input-1"
              label="故事题材"
              id="testing"
            ></v-text-field>
        </v-layout>
         <v-layout row>
         <v-text-field
              name="input-1"
              label="故事风格"
              id="testing"
            ></v-text-field>
        </v-layout>
         <v-layout row>
         <v-text-field
              name="input-1"
              label="故事起因"
              id="testing"
            ></v-text-field>
        </v-layout>
             <v-layout row>
         <v-text-field
              name="input-1"
              label="故事发展"
              id="testing"
            ></v-text-field>
        </v-layout>
             <v-layout row>
         <v-text-field
              name="input-1"
              label="故事高潮"
              id="testing"
            ></v-text-field>
        </v-layout>
             <v-layout row>
         <v-text-field
              name="input-1"
              label="故事结局"
              id="testing"
            ></v-text-field>
        </v-layout>
             <v-layout row>
         <v-text-field
              name="input-1"
              label="故事中心思想"
              id="testing"
            ></v-text-field>
        </v-layout>
           <v-layout row>
                 <v-text-field
              name="input-1"
              label="故事主要角色"
              id="testing"
            ></v-text-field>
        </v-layout>
       
      <!-- </v-container> -->
    </v-card-text>
  </v-card>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'booksetting',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
