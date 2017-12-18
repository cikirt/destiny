<template>
  <div class="app-container">
     章节书写<br/>
     此处可以为任何一本书写章节<br/>
     书的作者可以审核别人提供的章节。<br/>
     提供写小说需要的一些辅助工具，比如社会环境，自然环境，外貌描写，心里描写等等素材聚合辅助工具<br/>
     社会热点事件<br/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  name: 'permission',
  data() {
    return {
      role: ''
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    role(val) {
      this.$store.dispatch('ChangeRole', val).then(() => {
        this.$router.push({ path: '/permission/index?' + +new Date() })
      })
    }
  }
}
</script>
