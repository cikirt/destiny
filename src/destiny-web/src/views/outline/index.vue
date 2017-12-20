<template>
  <div class="app-container">
     作品名称:韶华倾负<br/>
     <template>
  <el-select v-model="value" placeholder="时间地点选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
     <timeLine :points="points"></timeLine>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import books from './chart/books'
import timeLine from './chart/timeline.vue'
export default {
  name: 'permission',
  components: { books, timeLine },
  data() {
    return {
      options: [
        {
          value: '时间地点1',
          label: '雷雨湖*开篇'
        },
        {
          value: '时间地点2',
          label: '上下*开篇'
        },
        {
          value: '时间地点3',
          label: '山下*...'
        },
        {
          value: '时间地点4',
          label: '雷雨湖*开篇'
        },
        {
          value: '时间地点5',
          label: '雷雨湖*开篇'
        }
      ],
      value: '时间地点1',
      role: '',
      points: [
        {
          pointColor: 'red', // *关键点颜色 可选red yellow green
          img:
            'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
          title: '雷雨湖畔少年郎', // *时间点标题
          text: '主角登场..交代主角什么样的身份背景，社会环境，以及整篇小说埋下第一个主线伏笔，。。。啦啦啦', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          linkText: '在此之后添加条目', // 按钮显示内容 默认为Read more
          date: '时间地点1' // 时间点
        },
        {
          pointColor: 'yellow', // *关键点颜色 可选red yellow green
          img: '1', // 图片地址 可留空
          title: '桃源洞天启征程', // *时间点标题
          text: '主角怎么怎么离开与世隔绝的桃源洞天，入世完成其身份背后所肩负的使命' // *时间点内容
        },
        {
          pointColor: 'green', // *关键点颜色 可选red yellow green
          title: '寒风飘雪涤人心', // *时间点标题
          text: '在离开之前，主角大发感慨，奠定整部小说的基调为济世为民，啦啦啦啦', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          date: '时间地点2' // 时间点
        },
        {
          pointColor: 'green', // *关键点颜色 可选red yellow green
          title: '白尺冰湖藏玄机', // *时间点标题
          text: '离开之前的第一个金手指，同时也是一大伏笔。。。。', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          date: '时间地点3' // 时间点
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
