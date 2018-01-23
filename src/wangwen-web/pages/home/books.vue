<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="n in 3" :key="n">
           <v-card color="grey lighten-4" class="black--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="h2"><b>《多情剑客无情剑》</b></div>
                    <span style="height:125px;display:block;overflow: hidden;text-overflow: ellipsis;">
                        古龙小说代表作之一不仅是一部阐明武学真谛的作品，还是一部写尽人间世态炎凉的人情历史画，
                      更是一部触动社会现实，探索人生哲理的警世名著。</span>
                    <v-divider dark ></v-divider>
                    <v-card-actions>
          <v-btn flat color="orange" @click="$router.push('/bookpages/setting')">作品信息</v-btn>
          <v-btn flat color="orange" @click="$router.push('/bookpages/scene')">灵感素材</v-btn>
          <v-btn flat color="orange" @click="$router.push('/chapterpages/list')">章节编写</v-btn>
        </v-card-actions>
                  </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      src="/timg2.jpg"
                      height="150px"
                      contain
                    ></v-card-media>
                </v-flex>
              </v-layout>
               <v-list grey lighten-1 two-line subheader>
          <!-- <v-divider inset></v-divider> -->
          <v-subheader >总字数：10万 总章节数:10章<br/>最近修改时间 2018-01-02 11:11:11</v-subheader>
          <v-list-tile v-for="item in items2" v-bind:key="item.title" avatar >
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
            </v-container>
             
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
     <v-btn fab dark color="indigo"  @click="$router.push('/bookpages/setting')">
      <v-icon dark>add</v-icon>
    </v-btn>
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
      size: 'xs',
      items: [
        {
          text: 'Extra small (1px)',
          value: 'xs'
        },
        {
          text: 'Small (4px)',
          value: 'sm'
        },
        {
          text: 'Medium (8px)',
          value: 'md'
        },
        {
          text: 'Large (16px)',
          value: 'lg'
        },
        {
          text: 'Extra large (24px)',
          value: 'xl'
        }
      ],
      items2: [
        {
          icon: 'assignment',
          iconClass: 'blue white--text',
          title: '第三章 怎么怎么怎么',
          subtitle: '字数 100字'
        }
      ]
    }
  }
}
</script>
