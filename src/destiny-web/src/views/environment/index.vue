<template>
  <div class="app-container">
     环境任务，自然环境，社会环境描写任务拆分。循序渐进，添加任务。关联到章节。
     写章节时可看到任务详情。同时也可以写完章节后再添加任务设定概况，方便后续查看<br/>
    <el-select v-model="value7" filterable placeholder="作品选择">
      <el-option v-for="item in books" :key="item.value" :label="item.value" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value8" filterable placeholder="章节选择">
      <el-option v-for="item in charpartsInBooks"
          :key="item.value" :label="item.value" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import players from './chart/players'
export default {
  name: 'my_players',
  data() {
    return {
      role: '',
      books: [
        {
          value: '三国演义',
          label: '选项1',
          charparts: [
            {
              value:'曹仁大战东吴兵 孔明一气周公瑾',
              label: '第一章'
            },
            {
              value:'诸葛亮智辞鲁肃 赵子龙计取桂阳',
              label: '第二章'
            },
            {
              value:'七星坛诸葛祭风 三江口周瑜纵火',
              label: '第三章'
            }
          ]
        },
        {
          value: '红楼梦',
          label: '选项2',
          charparts: [
            {
              value:'甄士隐梦幻识通灵 贾雨村风尘怀闺秀',
              label: '第一章'
            },
            {
              value:'贾夫人仙逝扬州城 冷子兴演说荣国府',
              label: '第二章'
            },
            {
              value:'托内兄如海荐西宾 接外孙贾母惜孤女',
              label: '第三章'
            }
          ]
        },
        {
          value: '水浒传',
          label: '选项3',
          charparts: [
            {
              value:'张天师祈禳瘟疫 洪太尉误走妖魔',
              label: '第一章'
            },
            {
              value:'王教头私走延安府 九纹龙大闹史家村',
              label: '第二章'
            },
            {
              value:'史大郎夜走华阴县 鲁提辖拳打镇关西',
              label: '第三章'
            }
          ]
        }
      ],
      value7: '',
      value8: ''
    }
  },
  components: { players },
  computed: {
    ...mapGetters(['roles']),

    //返回章节charparts
    charpartsInBooks: function () {
      //根据索引获取
      for(var i= 0 ;i< this.books.length; i++) {
        var value = this.books[i]
        if (value == this.value7)
        {
            return this.books[i].charparts
        }
      }
      return this.books[0].charparts
    }
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
