<template>
  <div class="app-container">
    章节书写<br/> 此处可以为任何一本书写章节
    <br/> 书的作者可以审核别人提供的章节。
    <br/> 提供写小说需要的一些辅助工具，比如社会环境，自然环境，外貌描写，心里描写等等素材聚合辅助工具
    <br/> 社会热点事件
    <br/>
    <el-select v-model="value8" filterable placeholder="章节选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="value8" filterable placeholder="章节所属大纲选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
      <div>
        <tinymce :height="200" v-model="content"></tinymce>
      </div>
      <div class="editor-content" v-html="content"></div>
    
    <br/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tinymce from '@/components/Tinymce'
export default {
  name: 'permission',
  components: {
    Tinymce
  },
  data() {
    return {
      role: '',
      content: 'Tinymce',
      options: [
        {
          value: '选项1',
          label: '第一章'
        },
        {
          value: '选项2',
          label: '第二章'
        },
        {
          value: '选项3',
          label: '第三章'
        },
        {
          value: '选项4',
          label: '第四章'
        },
        {
          value: '选项5',
          label: '第五章'
        }
      ],
      value8: ''
    }
  },
  computed: {
    ...mapGetters(['roles'])
  },
  watch: {
    role(val) {
      this.$store.dispatch('ChangeRole', val).then(() => {
        this.$router.push({
          path: '/permission/index?' + +new Date()
        })
      })
    }
  }
}
</script>
<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
