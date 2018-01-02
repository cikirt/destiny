<template>
  <div class="app-container">
     环境任务，自然环境，社会环境描写任务拆分。循序渐进，添加任务。关联到章节。
     写章节时可看到任务详情。同时也可以写完章节后再添加任务设定概况，方便后续查看<br/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import players from './chart/players'
export default {
  name: 'my_players',
  data() {
    return {
      role: ''
    }
  },
  components: { players },
  computed: {
    ...mapGetters(['roles'])
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
