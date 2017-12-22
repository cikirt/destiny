<template>
  <div class="app-container">
    其它撰稿人提交审核<br/> 
    此处查看其它用户针对某一提纲所写的章节，审核通过，则作者可直接只用或者修改其它用户提交的内容<br/>
    也可以拒绝，并提示修改意见<br/>
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
      content: '别的用户提交的文章，这是详情页，左边应该是一个列表',
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
