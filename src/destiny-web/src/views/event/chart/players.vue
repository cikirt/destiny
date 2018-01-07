<template>
  <div class="components-container" style='height:100vh'>
    <div class='chart-container'>
      <relationChart height='100%' width='100%'></relationChart>
    </div>
  </div>
</template>

<script>
import relationChart from '@/components/Charts/relationChart'

export default {
  name: 'relationChart_my',
  components: { relationChart }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

