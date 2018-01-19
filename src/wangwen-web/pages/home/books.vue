<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
      <v-layout row wrap>
        <v-flex xs12 md3 v-for="n in 2" :key="n">
          <v-card flat tile>
            <v-card-media
             height="150px">
              <!-- <v-container light-green lighten-4 fill-height fluid> -->
              <v-flex light-green lighten-4 md12  flexbox>
                <span class="headline">《圣墟》</span><br/>
                <span class="h6"><var>作品设计</var> = <var>基本作品大纲</var> + <var>素材收集</var></span>
                <span class="h6"><var>素材收集</var> = <var>人物素材</var> + <var>故事素材</var> + <var>环境素材</var></span>
              </v-flex>
          <!-- </v-container> -->
            </v-card-media>
             <v-card-title>
          <div>
            <span class="grey--text">作者 辰东 创建时间 2017-01-01 00:00:00 </span><br>
            <span>
              在破败中崛起，在寂灭中复苏。<br/>沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="$router.push('/bookpages/setting')">作品信息</v-btn>
          <v-btn flat color="orange" @click="$router.push('/bookpages/scene')">灵感素材</v-btn>
        </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
     <v-btn fab dark color="indigo">
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
      ]
    }
  }
}
</script>
