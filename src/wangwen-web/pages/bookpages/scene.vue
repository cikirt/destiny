<template>
<div>
     <v-toolbar class="cyan darken-3" dark color="primary">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
       <v-btn icon @click="$router.push('/home/books')">
      <v-icon>chevron_left</v-icon>
    </v-btn>
    <v-toolbar-title class="white--text">场景列表</v-toolbar-title>
    <v-spacer></v-spacer>
 
    <!-- <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn> -->
    <v-btn  @click="disFlag = !disFlag" icon>
       <v-icon >settings</v-icon>
    </v-btn>
  </v-toolbar>
<v-list two-line>
  <template v-for="(item, index) in items">
    <v-list-tile
      avatar
      ripple
      @click="toggle(index)"
      :key="item.title"
    >
      <v-list-tile-action style="min-width:30px"  v-if="disFlag">
          <v-icon middle color="red darken-1"  @click="$router.push('/bookpages/scenesetting')" >add_circle</v-icon>
          <v-icon middle color="red darken-1" >remove_circle</v-icon>  
      </v-list-tile-action>
      <v-list-tile-content  @click="$router.push('/bookpages/scenesetting')">
        <v-list-tile-title >
          <b>
            场景 {{ item.vseq + "&nbsp;&nbsp;" + item.title }} 
          </b>
        </v-list-tile-title>
            <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
              <v-list-tile-sub-title> 
                <v-layout row justify-space-between>
                  <v-flex xs5>
                    <v-icon left small color="accent lighten-4">library_books</v-icon>{{item.date}}
                  </v-flex>
                  <v-flex xs3>
                    <v-icon left small color="blue lighten-3">folder_shared</v-icon>{{item.human}}
                  </v-flex>
                  <v-flex xs3>
                    <v-icon left  small color="indigo lighten-3">place</v-icon>{{item.place}}
                  </v-flex>
                </v-layout>
              </v-list-tile-sub-title>
      </v-list-tile-content>
             
      <v-list-tile-action style="min-width:30px">
        <v-icon middle color="light-blue darken-1">reply</v-icon>
      </v-list-tile-action>
              
           
    </v-list-tile>
    <v-divider v-if="index + 1 < items.length" :key="item.title"></v-divider>
  </template>
</v-list>   
</div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      disFlag: false,
      selected: [2],
      items: [
        {
          vseq: 1,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年'
        },
        {
          vseq: 2,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 3,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 4,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 5,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 6,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 7,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 8,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 9,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 10,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        },
        {
          vseq: 11,
          headline:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何',
          title: '主人公出场',
          ucount: 10,
          human: 5,
          place: '长安',
          date: '公元前129年',
          subtitle:
            '一辆马车自北而来，滚动的车轮碾碎了地上的冰雪，却碾不碎天地间的寂寞。李寻欢打了一个哈欠，将两条长腿在柔软的貂皮上尽量伸直，车箱里虽然很温暖很舒服，但这段旅途实在太长，太寂寞的思想倾向。狭义上，仅指英国哲学家波普尔所提出的一种人生本就充满了矛盾，任何人都无可奈何。'
        }
      ]
    }
  },

  methods: {
    toggle(index) {
      const i = this.selected.indexOf(index)

      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  },
  computed: {
    binding() {
      const binding = {}

      if (this.$vuetify.breakpoint.xsAndUp) binding.column = false

      return binding
    }
  }
}
</script>
