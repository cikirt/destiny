<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-xs`]: true }">
      <v-layout row wrap>
          <v-flex xs12 md3 v-for="n in 20" :key="n">
             <v-card flat tile>
            <v-card-media
             :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" 
             height="150px">
                <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">《红楼梦》</span>
              </v-flex>
            </v-layout>
          </v-container>
            </v-card-media>
             <v-card-title >
        <v-list two-line subheader>
          <!-- <v-divider inset></v-divider> -->
          <v-subheader inset>最近修改的章节</v-subheader>
          <v-list-tile v-for="item in items2" v-bind:key="item.title" avatar >
             <v-list-tile-action>
              <v-icon v-if="item.selected" color="pink">star</v-icon>
            </v-list-tile-action>
            <!-- <v-list-tile-avatar>
              <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar> -->
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">edit</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        </v-card-title>
            <v-card-actions>
          <v-btn flat color="orange" @click="$router.push('/bookpages/setting')">新增章节</v-btn>
          <v-btn flat color="orange" @click="$router.push('/bookpages/setting')">删除章节</v-btn>
        </v-card-actions>
          </v-card>
   
        </v-flex >
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  methods: {
    test() {}
  },
  data() {
    return {
        items2: [
          { selected:true,icon: 'assignment', iconClass: 'blue white--text', title: '第一章 怎么怎么怎么', subtitle: '少时诵诗书  2018-01-02' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '第二章 巴拉巴拉吧', subtitle: '少时诵诗书  2018-01-02' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '第二章 巴拉巴拉吧', subtitle: '少时诵诗书  2018-01-02' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '第二章 巴拉巴拉吧', subtitle: '少时诵诗书  2018-01-02' }
          
        ]
    }
  }
}
</script>
