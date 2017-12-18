<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import writerDashboard from './writer'

export default {
  name: 'dashboard',
  components: { adminDashboard, editorDashboard, writerDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  created() {
    if (this.roles.includes('editor')) {
      this.currentRole = 'editorDashboard'
    } else if (this.roles.includes('writer')) {
      this.currentRole = 'writerDashboard'
    }
  }
}
</script>
