<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-xs`]: true }">
      <v-layout row wrap>
          <v-flex xs12 md3 v-for="n in 2" :key="n">
             <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="h2">《多情剑客无情剑》</div>
                    <span>累计字数：10万字</span><br/>
                    <span>XXXXXX </span><br/>
                    <span>XXXXX </span><br/>
                     <span>XXXXX </span>
                      <span>XXXXX </span>
                               <v-card-actions>
          <v-btn flat color="orange" @click="$router.push('/chapterpages/edit')">新增章节</v-btn>
          <v-btn flat color="orange" @click="$router.push('/chapterpages/list')">章节列表</v-btn>
        </v-card-actions>
          
                  </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      src="/boook.png"
                      height="150px"
                      contain
                    ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

           <v-list two-line subheader>
          <!-- <v-divider inset></v-divider> -->
          <v-subheader inset>最近修改章节</v-subheader>
          <v-list-tile v-for="item in items2" v-bind:key="item.title" avatar >
             <v-list-tile-action v-if="item.selected">
              <v-icon  color="pink">star</v-icon>
            </v-list-tile-action>
            <!-- <v-list-tile-avatar>
              <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar> -->
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple @click="$router.push('/chapterpages/edit')">
                <v-icon color="grey lighten-1">edit</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
   
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
          { icon: 'assignment', iconClass: 'blue white--text', title: '第一章 怎么怎么怎么', subtitle: '少时诵诗书  2018-01-02' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '第二章 巴拉巴拉吧', subtitle: '少时诵诗书  2018-01-02' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: '第二章 巴拉巴拉吧', subtitle: '少时诵诗书  2018-01-02' }
          
        ]
    }
  }
}
</script>
