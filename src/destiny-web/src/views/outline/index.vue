<template>
  <div class="app-container">
     小说大纲<br/>
     分部分，以时间轴的形式梳理小说大纲<br/>
     在小说完成过程中逐步完善此大纲。<br/>
     例如：可以完善为一句话故事的章节。便于实际章节和大纲的对应<br/>
       <timeLine :points="points"></timeLine>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import books from './chart/books'
import timeLine from './chart/timeLine.vue'
export default {
  name: 'permission',
  components: { books, timeLine },
  data() {
    return {
      role: '',
      points: [
        {
          pointColor: 'red', // *关键点颜色 可选red yellow green
          img:
            'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
          title: '干了啥', // *时间点标题
          text: '概要描述', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          linkText: 'Read detail', // 按钮显示内容 默认为Read more
          date: '第一年' // 时间点
        },
        {
          pointColor: 'yellow', // *关键点颜色 可选red yellow green
          img: '1', // 图片地址 可留空
          title: '还干了啥', // *时间点标题
          text: '在此描述' // *时间点内容
        },
        {
          pointColor: 'green', // *关键点颜色 可选red yellow green
          title: '又过了一年', // *时间点标题
          text: 'first post', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          date: '第二年' // 时间点
        }
      ]
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
