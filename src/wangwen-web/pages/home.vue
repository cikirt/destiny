<template>
<div>
    <nuxt-child/>
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
