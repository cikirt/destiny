<template>
  <div>
    作家,可以根据编剧设定的剧本书写文章。下方是小功能。
    如要切换大功能，点击左上方。
    <nuxt-link to="/">Back to the home page</nuxt-link>
    <nuxt-child/>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'writechapter',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
