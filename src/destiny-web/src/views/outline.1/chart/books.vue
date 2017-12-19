<template>
  <div class="components-container" style='height:100vh'>
    <div class='chart-container'>
      <pictorialBar height='100%' width='100%'></pictorialBar>
    </div>
  </div>
</template>

<script>
import pictorialBar from '@/components/Charts/pictorialBar'

export default {
  name: 'pictorialBar_my',
  components: { pictorialBar }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 80%;
}
</style>

