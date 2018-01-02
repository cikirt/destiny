<template>
  <div class="app-container">
    故事任务，故事描写任务拆分。循序渐进，添加任务。关联到章节。 写章节时可看到任务详情。同时也可以写完章节后再添加任务设定概况，方便后续查看
    <br/>
 <sortable-tree :data="treeData" mixinParentKey="$parent" @changePosition="changePosition" :dragEnable="true" closeStateKey="$foldClose">
      <template slot-scope="{item}">
        <div class="custom-tree-content" :class="{'exitChild': item.children && item.children.length}">
          <span v-if="item['$foldClose'] && item.children && item.children.length" @click="changeState(item)">▶</span>
          <span v-else-if="!item['$foldClose'] && item.children && item.children.length" @click="changeState(item)">▼</span>
          <span>{{item.name}}</span>
        </div>
      </template>
    </sortable-tree>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SortableTree from './SortableTree.vue'
export default {
  name: 'my_players',
  data() {
    return {
      treeData: {
        name: 'root',
        children: [
          {
            name: '2',
            children: [
              { name: '2-1' },
              {
                name: '2-2',
                children: [
                  {
                    name: '3-2-1',
                    children: [{ name: '3-2-1-1' }, { name: '3-2-1-2' }]
                  }
                ]
              }
            ]
          },
          {
            name: '3',
            children: [{ name: '3-1' }, { name: '3-2' }]
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

