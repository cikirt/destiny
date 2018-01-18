<template>
<div>
    <nuxt-child/>
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
