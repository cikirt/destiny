<template>
     <div id="usercenter">
        <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        color="blue darken-2"
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>文章设计
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
        码字
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
      <v-icon>delete</v-icon>
      回主页
      </v-btn>
      </v-speed-dial>
     </div>
</template>
<script>
export default {
  data(){
    return {
      direction: "bottom",
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: true,
      right: false,
      bottom: false,
      left: true,
      transition: 'slide-y-reverse-transition'
    }
  }
}
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  #usercenter .speed-dial {
    position: absolute;
  }

  #usercenter .btn--floating {
    position: relative;
  }
</style>

