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
        <v-icon>edit</v-icon>自动取名
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
        自动生成素材2
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
      <v-icon>delete</v-icon>
      小工具3
      </v-btn>
      </v-speed-dial>
     </div>
</template>
<script>
export default {
  data() {
    return {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
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
