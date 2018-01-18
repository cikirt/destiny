<template>
<div>
    <nuxt-child/>
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
