<template>
  <div class="app-container">
     故事架构，<br/>
     方案1.计划使用思维导图的方式由作家自由发挥。<br/>
     方案2.固定格式 ，便于整个章节和故事架构的精度管理。<br/>
     一句话故事<br/>
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
