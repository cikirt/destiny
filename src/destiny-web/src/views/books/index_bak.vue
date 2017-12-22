<template>
  <div class="app-container">
    <el-button type="success" round icon="el-icon-plus" @click="addBook">添加新书</el-button>
    <books></books>
    <el-dialog :visible.sync="showAddBookDialog">
      <el-row>
        <el-col :span="6">
          <pan-thumb :image="image"></pan-thumb>
          <el-button type="primary" icon="upload" style="bottom: 15px;margin-left: 20px;" @click="imagecropperShow=true">修改封面
          </el-button>
          <image-cropper :width="300" :height="300" url="https://httpbin.org/post" @close='close' @crop-upload-success="cropSuccess" :key="imagecropperKey" v-show="imagecropperShow">
          </image-cropper>
        </el-col>
        <el-col :span="18">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="作品名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-col :span="11">
              <el-form-item label="授权级别" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择首发站点">
                  <el-option label="独家发布" value="shanghai"></el-option>
                  <el-option label="驻站作品" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="书号" prop="region">8246963104076103
              </el-form-item>
            </el-col>
            <el-form-item label="作品类型" required>
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
            </el-form-item>
            <el-form-item label="推荐语" prop="delivery">
              <el-input v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item>
            <el-form-item label="编辑分组" prop="region">
              玄幻言情组
            </el-form-item>
            <el-form-item label="作品状态" prop="region">
              新建
            </el-form-item>
            <el-form-item label="作品标签" prop="region">
              <el-input v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item>
            <el-form-item label="作品介绍" prop="region">
              <el-input type="textarea" :rows="2" v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item>
            <el-form-item label="扉页寄语" prop="region">
              <el-input type="textarea" :rows="2" v-model="ruleForm.tuijianyu"></el-input>
            </el-form-item>
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
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapGetters } from 'vuex'
import books from './chart/books'
export default {
  name: 'permission',
  components: {
    ImageCropper,
    PanThumb,
    books
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
      showAddBookDialog: false,
      role: '',
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
      rules: {
        name: [
          {
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          {
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }
        ],
        desc: [
          {
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['roles'])
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
    addBook() {
      this.showAddBookDialog = true
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
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
  created() {}
}
</script>

<style scoped>
.avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
