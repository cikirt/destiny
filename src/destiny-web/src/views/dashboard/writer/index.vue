<template>
  <div class="dashboard-editor-container">
    <!-- <div class=" clearfix"> -->
    <!-- <pan-thumb style="float: left" :image="avatar"> 你的权限:
          <span class="pan-info-roles" :key='item' v-for="item in roles">{{item}}</span>
        </pan-thumb>
        <github-corner></github-corner>
        <div class="info-container">
          <span class="display_name">{{name}}</span>
          <span style="font-size:20px;padding-top:20px;display:inline-block;">作家首页</span>
          作家典型应用场景:<br/>
          <el-steps direction="vertical" :active="5">
            <el-step title="创建新书" description="作家在平台上创建一本新书"></el-step>
            <el-step title="编写大纲" description="作家独立为新书编写大纲，其它用户可为作家提参考意见，作家可根据意见随时修改大纲"></el-step>
            <el-step title="角色设定" description="角色性格、社会关系，命运安排等等设定。便于多人协作时对各个角色的处理的一致性。"></el-step>
            <el-step title="编写章节" description="作家/其它用户为每个章节编写内容，由作家进行筛选后进行二次修稿，处理好衔接和文风问题，使作品焕然一体。创作时，系统提供必要的辅助插件"></el-step>
            <el-step title="稿酬分配" description="根据实际贡献，系统为作家和有有效贡献的用户自动分配稿酬。"></el-step>
          </el-steps>
        </div> -->
    <!-- </div> -->
    <!-- <div>
        <img class="emptyGif" :src="emptyGif">
      </div> -->
   
    <el-tabs type="border-card">
  <el-tab-pane label="作品动态">     <div v-for="o in 4" :key="o" class="text item">
            {{'类似微博的每一个动态新闻，可以查看，点赞点踩啥的 ' + o }}
          </div></el-tab-pane>
  <el-tab-pane label="作品推荐">推荐用户可能感兴趣的其它作品，引导用户对其它作品做贡献</el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import GithubCorner from '@/components/GithubCorner'
export default {
  name: 'dashboard-writer',
  components: {
    PanThumb,
    GithubCorner
  },
  data() {
    return {
      emptyGif:
        'http://destiny-1254002014.cosbj.myqcloud.com/timg.jpg?sign=ixXGm7XpZqmLmmic73M6EUgZyuNhPTEyNTQwMDIwMTQmaz1BS0lENDJwVHdFdDZIR2lPeU1UWk81Qjh1aE1wOXhjQnNqaVYmZT0xNTE2MTYxNDk1JnQ9MTUxMzU2OTQ5NSZyPTExNzczMTA3NTUmZj0vdGltZy5qcGcmYj1kZXN0aW55'
    }
  },
  computed: {
    ...mapGetters(['name', 'avatar', 'roles'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}
.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 400vh;
  // margin-top: -50px;
  padding: 10px 10px 0px 10px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
