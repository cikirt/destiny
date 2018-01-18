<template>
<div>
    <nuxt-child/>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
