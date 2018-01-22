<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
      <v-layout row wrap>
        <v-flex xs12 md4 v-for="n in 3" :key="n">
           <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="h2">《多情剑客无情剑》</div>
                    <span style="height:125px;display:block;overflow: hidden;text-overflow: ellipsis;">
                      古龙小说代表作之一不仅是一部阐明武学真谛的作品，还是一部写尽人间世态炎凉的人情历史画，
                      更是一部触动社会现实，探索人生哲理的警世名著。</span>
                    <v-divider dark ></v-divider>
                    <v-card-actions>
          <v-btn flat color="orange" @click="$router.push('/bookpages/setting')">作品信息</v-btn>
          <v-btn flat color="orange" @click="$router.push('/bookpages/scene')">灵感素材</v-btn>
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
      ]
    }
  }
}
</script>
