<template>
  <div>
    编剧,可以创建和设计作品。下面的两个功能请尽情使用。
    如要切换大功能，点击左上方。
    <nuxt-link to="/">Back to the home page</nuxt-link>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'designbooks',
  methods: {
    test() {}
  },
  data() {
    return {
    }
  }
}
</script>
