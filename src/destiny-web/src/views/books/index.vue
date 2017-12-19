<template>
  <div class="app-container">
     作品管理<br/>
     <books></books>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import books from './chart/books'
export default {
  name: 'permission',
  components: { books },
  data() {
    return {
      role: ''
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  watch: {
    role(val) {
      this.$store.dispatch('ChangeRole', val).then(() => {
        this.$router.push({ path: '/permission/index?' + +new Date() })
      })
    }
  },
  created() {}
}
</script>
