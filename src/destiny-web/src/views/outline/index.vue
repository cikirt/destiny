<template>
  <div class="app-container">
<el-row >
  <el-col :span="6">
  <el-select v-model="valueBook" placeholder="请选择">
    <el-option
      v-for="item in optionsBook"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
</el-row>

  <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="分卷大纲解决" name="1">
  <SingleList @selectitm='ele=>selectitm(ele)' :list1="list1"  list1Title="分卷大纲" ></SingleList>
  </el-collapse-item>
  <el-collapse-item title="一句话故事" name="2">
    <timeLine :points="points"></timeLine>
  </el-collapse-item>
</el-collapse>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import books from './chart/books'
import timeLine from './chart/timeline.vue'
import SingleList from '@/components/SingleList'
import { fetchList } from '@/api/article'
export default {
  name: 'permission',
  components: { books, timeLine, SingleList },
  data() {
    return {
      activeNames: ['1', '2'],
      optionsBook: [
        {
          value: '选项1',
          label: '《韶华倾负》'
        },
        {
          value: '选项2',
          label: '《三国演义》'
        }
      ],
      valueBook: '选项1',
      list1: [
        { id: 1, title: '第一卷 雷雨湖之变', click: false },
        { id: 2, title: '第二卷 待定', click: false }
      ],
      list2: [],
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
          title: '一句话故事', // *时间点标题
          text: '补充说明，选择特定任务，事件，环境', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          linkText: '在此之后添加条目', // 按钮显示内容 默认为Read more
          date: '时间地点1' // 时间点
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
  created() {
    this.getData()
  },
  methods: {
    selectitm(ele) {
      // alert(ele.title)
      if (ele.id === 1) {
        this.points = [
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
      } else {
        this.points = [
          {
            pointColor: 'red', // *关键点颜色 可选red yellow green
            img:
              'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
            title: '一句话故事', // *时间点标题
            text: '补充说明，选择特定任务，事件，环境', // *时间点内容
            linkUrl: '', // *链接url 留空则不显示按钮
            linkText: '在此之后添加条目', // 按钮显示内容 默认为Read more
            date: '时间地点1' // 时间点
          }
        ]
      }
    },
    getData() {
      this.listLoading = true
      fetchList().then(response => {
        // this.list1 = response.data.items.splice(0, 5)
        this.list2 = response.data.items
      })
    }
  }
}
</script>
