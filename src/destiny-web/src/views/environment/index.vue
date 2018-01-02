<template>
  <div class="app-container">
     环境设定<br/>
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
