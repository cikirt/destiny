<template>
  <div>
    <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
      <v-layout row wrap>
        <v-flex xs12 md3 v-for="n in 2" :key="n">
          <v-card flat tile>
            <v-card-media
             :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`" 
             height="150px">
            </v-card-media>
             <v-card-title>
          <div>
            <span class="grey--text">创建时间 2017-01-01 00:00:00 </span><br>
            <span>一句话简介，一句话简介，一句话渐渐一句话简介，一句话简介，一句话渐渐
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
