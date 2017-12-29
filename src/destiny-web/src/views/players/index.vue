<template>
  <div class="app-container">
     角色设定<br/>
     角色性格，三观，情感，命运，服饰，各方面的社会地位，与其它角色的关系等等<br/>
     角色各个时间点的重大事件，出场，退场，剧情关键人，....<br/>
     可以根据章节查看各个人物的状态<br/>
     <el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">添加角色设定</el-button>
  <el-button type="primary">添加角色关系<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
     <players></players>
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
