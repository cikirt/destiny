<template>
  <div class="app-container">
     角色设定<br/>
     角色性格，三观，情感，命运，服饰，各方面的社会地位，与其它角色的关系等等<br/>
     角色各个时间点的重大事件，出场，退场，剧情关键人，....<br/>
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
