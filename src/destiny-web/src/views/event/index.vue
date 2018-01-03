<template>
  <div class="app-container">
    故事任务，故事描写任务拆分。循序渐进，添加任务。关联到章节。 写章节时可看到任务详情。同时也可以写完章节后再添加任务设定概况，方便后续查看
    <br/>
    <el-select v-model="value7" placeholder="请选择章节查看快照">
      <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
        <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-option-group>
    </el-select>
    <sortable-tree :data="treeData" mixinParentKey="$parent" 
    @changePosition="changePosition" :dragEnable="true" closeStateKey="$foldClose">
      <template slot-scope="{item}">
              <div class="custom-tree-content" :class="{'exitChild': item.children && item.children.length}">
                <span v-if="item['$foldClose'] && item.children && item.children.length" @click="changeState(item)"> <i style="margin-left:5px;color:#67C23A;font-size: 18px" class="el-icon-caret-right"></i></span>
                <span v-else-if="!item['$foldClose'] && item.children && item.children.length" @click="changeState(item)"> <i style="margin-left:5px;color:#ff4949;font-size: 18px" class="el-icon-caret-bottom"></i></span>
                <span v-else> <i style="margin-left:5px;color:#909399;font-size: 18px" class="el-icon-caret-bottom"></i></span>
                <el-tag v-if="item.chapter==='1'" type="success">未完成故事</el-tag>
                <el-tag v-else type="info">已完成故事</el-tag>
                <span style="font-size: 18px">{{item.name}}</span>
                <el-tooltip v-if="item.id!==0" class="item" effect="dark" content="查看详情" placement="top">
                        <span style="margin-left:10px;"  @click="readEle(item)">
                              <i style="color:#E6A23C" class="el-icon-view"></i>
                            </span>
                </el-tooltip>
                <el-tooltip v-if="item.id!==0" class="item" effect="dark" content="修改" placement="top">
                        <span style="margin-left:10px;"  @click="editEle(item)">
                              <i style="color:#E6A23C" class="el-icon-edit"></i>
                            </span>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="新增子节点" placement="top">
                        <span style="margin-left:5px;" @click="addEle(item)">
                    <i style="color:#67C23A" class="el-icon-circle-plus-outline"></i>
                  </span>
                </el-tooltip>
                <el-tooltip v-if="item.id!==0" class="item" effect="dark" content="删除节点" placement="top">
                        <span style="margin-left:5px;" @click="deleteEle(item)">
                    <i style="color:#ff4949" class="el-icon-delete"></i>
                  </span>
                </el-tooltip>     
                <!-- </div> -->
                <!-- <el-input v-model="item.name" placeholder="请输入内容"></el-input> -->
              </div>
 </template>
    </sortable-tree>
            <el-dialog title="故事" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="故事标题" :label-width="formLabelWidth">
                    <el-input v-model="form.title" placeholder="请输入故事标题"  auto-complete="off"></el-input>
                  </el-form-item>
                    <el-form-item label="故事详情"  :label-width="formLabelWidth">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 3}"
                      placeholder="请输入故事详情"
                     v-model="form.content" >
                    </el-input>
                  </el-form-item>
                  <el-form-item label="实现章节" :label-width="formLabelWidth">
                    <el-input v-model="form.chapter" placeholder="请选择该设定所计划或者已经实现于哪个章节"  auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button v-if="dialogStatus!=='read'" @click="dialogFormVisible = false">取 消</el-button>
                  <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">新 增</el-button>
                  <el-button v-else-if="dialogStatus=='delete'" type="primary" @click="deleteData">删 除</el-button>
                  <el-button v-else-if="dialogStatus=='read'" type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  <el-button v-else type="primary" @click="updateData">修 改</el-button>
                </div>
            </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SortableTree from './SortableTree.vue'
export default {
  name: 'my_players',
  data() {
    return {
      options3: [
        {
          label: '第一卷 初卷',
          options: [
            {
              value: 'Shanghai',
              label: '第一章 啦啦啦'
            },
            {
              value: 'Beijing',
              label: '第二章 啦啦啦'
            }
          ]
        },
        {
          label: '第二卷 待定',
          options: [
            {
              value: 'Chengdu',
              label: '第三章 啦啦啦成都'
            },
            {
              value: 'Shenzhen',
              label: '第四章 啦啦啦'
            }
          ]
        }
      ],
      value7: '',
      dialogFormVisible: false,
      dialogStatus: 'create',
      formLabelWidth: '120px',
      form: {
        title: '',
        content: ''
      },
      treeData: {
        id: 0,
        name: '故事树',
        children: [
          {
            name: '故事1',
            chapter: '1',
            children: [
              {
                name: '故事1-1'
              }
            ]
          },
          {
            name: '故事2',
            children: [
              {
                name: '故事 2-2'
              },
              {
                name: '故事2-3'
              }
            ]
          }
        ]
      },
      role: ''
    }
  },
  components: {
    SortableTree
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
    createData() {
      const ob = {
        name: this.form.title,
        children: []
      }
      if (this.form.itm.children !== undefined) {
        console.log(this.form.itm)
        this.form.itm.children.push(ob)
      } else {
        this.form.itm.children = [ob]
      }
      this.dialogFormVisible = false
    },
    deleteData() {},
    updateData() {
      this.form.itm.name = this.form.title
      this.dialogFormVisible = false
    },
    readEle(itm) {
      this.dialogStatus = 'read'
      this.form.title = itm.name
      this.dialogFormVisible = true
    },
    editEle(itm) {
      this.dialogStatus = 'edit'
      this.form.title = itm.name
      this.form.itm = itm
      this.dialogFormVisible = true
    },
    addEle(itm) {
      this.dialogStatus = 'create'
      this.form.title = ''
      this.form.content = ''
      this.form.itm = itm
      this.dialogFormVisible = true
    },
    deleteEle(itm) {
      this.dialogStatus = 'delete'
      this.dialogFormVisible = true
    },
    changeState(item) {
      this.$set(item, '$foldClose', !item['$foldClose'])
    },
    changePosition(option) {
      console.log('changePosition: ', option)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-content {
  position: relative;
  top: 2px;
  z-index: 1;
  &.exitChild {
    margin-left: -7px;
  }
}
</style>

