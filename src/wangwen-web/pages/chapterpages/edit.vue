<template>
<div>
       <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-subheader v-text="'章节所属场景'"></v-subheader>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              v-bind:items="states"
              v-model="a1"
              label="Select"
              autocomplete
            ></v-select>
          </v-flex>
        </v-layout>
    每个章节必定属于某一场景。这个设定是为了简化章节书写的难度。击中精力使用预先设计、构想、收集好的一些素材。直接书写文章。
    对于已经使用了的素材。在此界面可以标记为已使用。便于后续章节维护。
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'chapter',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
