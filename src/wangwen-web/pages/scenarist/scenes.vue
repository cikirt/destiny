<template>
 <div>
    场景管理
    <nuxt-link to="/">Back to the home page</nuxt-link>
   </div> 
</template>

<script>
export default {
   middleware: 'auth',
  data: () => ({
    e2: 3,
    drawer: null,
    direction: 'top',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: 'slide-y-reverse-transition'
  }),
  props: {
    source: String
  },
  methods: {
    test() {}
  },
  computed: {
    computedColor() {
      switch (this.e2) {
        case 0:
          return 'blue-grey'
          break
        case 1:
          return 'teal'
          break
        case 2:
          return 'brown'
          break
        case 4:
          return 'brown lighten-1'
          break
      }
    },
    activeFab() {
      switch ('one') {
        case 'one':
          return {
            class: 'purple',
            icon: 'account_circle'
          }
        case 'two':
          return {
            class: 'red',
            icon: 'edit'
          }
        case 'three':
          return {
            class: 'green',
            icon: 'keyboard_arrow_up'
          }
        default:
          return {}
      }
    }
  }
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .speed-dial {
  position: absolute;
}
#create .btn--floating {
  position: relative;
}
</style>
