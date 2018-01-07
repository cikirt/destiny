<template>
  <div class="app-container">  
     <el-radio-group v-model="radio3">
      <el-radio-button label="全部作品"></el-radio-button>
      <el-radio-button label="自有作品"></el-radio-button>
      <el-radio-button label="编辑作品"></el-radio-button>
      <el-radio-button label="撰稿作品"></el-radio-button>
    </el-radio-group>
     <el-button type="success" round icon="el-icon-circle-plus" @click="addBook">创建</el-button>
     <timeLine :points="points"></timeLine>
        <el-dialog width="40%" :visible.sync="showAddBookDialog">
      <el-row>
        <el-col :span="10">
          <pan-thumb :image="image"></pan-thumb>
          <el-button type="primary" icon="upload" style="bottom: 15px;margin-left: 20px;" @click="imagecropperShow=true">修改封面
          </el-button>
          <image-cropper :width="100" :height="100" url="https://httpbin.org/post" @close='close' @crop-upload-success="cropSuccess" :key="imagecropperKey" v-show="imagecropperShow">
          </image-cropper>
        </el-col>
        <el-col :span="14">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item label="作品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <!-- <el-col :span="11">
              <el-form-item label="授权级别" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择首发站点">
                  <el-option label="独家发布" value="shanghai"></el-option>
                  <el-option label="驻站作品" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col> -->
            <!-- <el-col :span="11">
              <el-form-item label="书号" prop="region">8246963104076103
              </el-form-item>
            </el-col> -->
            <!-- <el-form-item label="作品类型" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-select v-model="ruleForm.region" placeholder="玄幻言情">
                    <el-option label="玄幻言情" value="shanghai"></el-option>
                    <el-option label="仙侠奇缘" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-select v-model="ruleForm.region" placeholder="东方玄幻">
                    <el-option label="东方玄幻" value="shanghai"></el-option>
                    <el-option label="异世大陆" value="beijing"></el-option>
                    <el-option label="远古神话" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-form-item> -->
            <!-- <el-form-item label="推荐语" prop="delivery">
              <el-input v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item> -->
            <!-- <el-form-item label="编辑分组" prop="region">
              玄幻言情组
            </el-form-item>
            <el-form-item label="作品状态" prop="region">
              新建
            </el-form-item> -->
            <!-- <el-form-item label="作品标签" prop="region">
              <el-input v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item> -->
            <el-form-item label="作品介绍" prop="region">
              <el-input type="textarea" :rows="4" v-model="ruleForm.zuopinjieshao"></el-input>
            </el-form-item>
            <!-- <el-form-item label="扉页寄语" prop="region">
              <el-input type="textarea" :rows="2" v-model="ruleForm.feiyejiyu"></el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import books from './chart/books'
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import timeLine from './chart/timeline.vue'
export default {
  name: 'permission',
  components: {
    books,
    timeLine,
    ImageCropper,
    PanThumb
  },
  data() {
    return {
      radio3: '全部书籍',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        tuijianyu: ''
      },
      showAddBookDialog: false,
      options: [
        {
          value: '全部作品',
          label: '全部作品'
        },
        {
          value: '自有作品',
          label: '自有作品'
        },
        {
          value: '编辑作品',
          label: '编辑作品'
        },
        {
          value: '撰稿作品',
          label: '撰稿作品'
        }
      ],
      value: '全部作品',
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      role: '',
      points: [
        {
          pointColor: 'red', // *关键点颜色 可选red yellow green
          img:
            'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
          title: '《韶华倾负》', // *时间点标题
          text: '追寻一生，只为触碰那一瞬美好。飘零半世，不足道尽数十载孤独', // *时间点内容
          linkUrl: '', // *链接url 留空则不显示按钮
          linkText: '在此之后添加条目', // 按钮显示内容 默认为Read more
          date: '自有作品' // 时间点
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
        this.$router.push({
          path: '/permission/index?' + +new Date()
        })
      })
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: '创建成功，骗你的啦!',
            type: 'success'
          })
          this.showAddBookDialog = false
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    addBook() {
      this.showAddBookDialog = true
    }
  },
  created() {}
}
</script>
