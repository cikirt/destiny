<template>
  <div>
     <v-tabs fixed icons centered grow v-model="tabs">
    <v-tabs-bar dark color="cyan">
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tabs-item href="#tab-1">
        <v-icon>phone</v-icon>
        基本信息
      </v-tabs-item>
      <v-tabs-item href="#tab-2">
        <v-icon>favorite</v-icon>
        人物素材
      </v-tabs-item>
      <v-tabs-item href="#tab-3">
        <v-icon>account_box</v-icon>
        故事素材
      </v-tabs-item>
         <v-tabs-item href="#tab-4">
        <v-icon>account_box</v-icon>
        环境素材
      </v-tabs-item>
           <v-tabs-item href="#tab-5">
        <v-icon>account_box</v-icon>
        其它素材
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
        key=1
        id='tab-1'
      >
        <v-card flat>
       
           <v-card-title style="padding:5px;" class="light-green lighten-3">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>done</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
          <v-card-text>
                  <v-flex xs8> <v-text-field name="input-1" label="场景名称"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="场景位置"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="场景描述"></v-text-field> </v-flex>
          </v-card-text>
        </v-card>
      </v-tabs-content>
            <v-tabs-content
        key=2
        id='tab-2'
      >
        <v-card flat>
               <v-card-title style="padding:5px;" class="light-green lighten-3">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>done</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
          <v-card-text>人物素材 该场景下出场人物特征、外貌、性格等等。</v-card-text>
        </v-card>
      </v-tabs-content>
            <v-tabs-content
        key=3
        id='tab-3'
      >
        <v-card flat>
               <v-card-title style="padding:5px;" class="light-green lighten-3">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>done</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
          <v-card-text>     <v-flex xs8> <v-text-field name="input-1" label="故事来源"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="其他参考"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="故事简要概述" textarea></v-text-field> </v-flex>
      <v-btn color="primary" @click.native="e6 = 2">Previous</v-btn>
      <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
      </v-card-text>
        </v-card>
      </v-tabs-content>
                  <v-tabs-content
        key=4
        id='tab-4'
      >
        <v-card flat>
               <v-card-title style="padding:5px;" class="light-green lighten-3">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>done</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
          <v-card-text>
             <v-expansion-panel>
        <v-expansion-panel-content :key="i">
          <span>自然环境，社会环境设定。从宏观到微观。总之能为后续写作服务的都行。作者自由组织</span>
          <div slot="header">自然环境</div>
          <v-card>
            <v-card-text>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm6>
                    <v-subheader v-text="'自然因子'"></v-subheader>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <v-select
                      label="Select"
                      v-bind:items="people"
                      v-model="e11"
                      item-text="name"
                      item-value="name"
                      multiple
                      chips
                      max-height="auto"
                      autocomplete
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          close
                          @input="data.parent.selectItem(data.item)"
                          :selected="data.selected"
                          class="chip--select-multi"
                          :key="JSON.stringify(data.item)"
                        >
                          <v-avatar>
                            <img :src="data.item.avatar">
                          </v-avatar>
                          {{ data.item.name }}
                        </v-chip>
                      </template>
                      <template slot="item" slot-scope="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-tile-content v-text="data.item"></v-list-tile-content>
                        </template>
                        <template v-else>
                          <v-list-tile-avatar>
                            <img v-bind:src="data.item.avatar"/>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="data.item.group"></v-list-tile-sub-title>
                          </v-list-tile-content>
                                     
                        </template>
                      </template>
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-flex xs8> <v-text-field name="input-1" label="自然因子关联描述"></v-text-field> </v-flex>
            <v-btn color="primary">添加关联图</v-btn>
            <v-card color="grey lighten-1" class="mb-5" height="200px">
              显示关联图片
            </v-card>
          </v-card>
        </v-expansion-panel-content>

        <v-expansion-panel-content :key="i1">
          <div slot="header">社会环境</div>
          <v-flex xs8> <v-text-field name="input-1" label="经济体系描述" textarea></v-text-field> </v-flex>
          <v-btn color="primary">经济关系图</v-btn>
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-flex xs8> <v-text-field name="input-1" label="政治体系描述" textarea></v-text-field> </v-flex>
          <v-btn color="primary">政治关系图</v-btn>
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-flex xs8> <v-text-field name="input-1" label="文化体系描述" textarea></v-text-field> </v-flex>
          <v-btn color="primary">文化关系图</v-btn>
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-tabs-content>
              <v-tabs-content
        key=5
        id='tab-5'
      >
        <v-card flat>
               <v-card-title style="padding:5px;" class="light-green lighten-3">
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>done</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
          <v-card-text>其它素材 该场景下出场人物特征、外貌、性格等等。</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
   <v-fab-transition>
      <v-btn
        :color="activeFab.color"
        :key="activeFab.icon"
        dark
        fab
        bottom
        left
        v-model="fab"
      >
        <v-icon>{{ activeFab.icon }}</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
         </v-fab-transition>
        <!-- <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
    >
    
      <v-btn
        slot="activator"
        color="blue darken-2"
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>自动取名
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
        自动生成素材2
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
      <v-icon>delete</v-icon>
      小工具3
      </v-btn>
      </v-speed-dial> -->
 
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'home',
  methods: {
    test() {}
  },
  data() {
    return {
      direction: 'top',
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      fab: false,
      hidden: false,
      tabs: null,
      e6: 1,
      d1: null,
      items: [{ 1: '自然环境' }, { 2: '社会环境' }],
      e11: [],
      people: [
        { name: '节气' },
        { name: '建筑' },
        { name: '家居' },
        { name: '植被' },
        { name: '动物' },
        { name: '地理位置' },
        { divider: true }
      ]
    }
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case 'tab-1':
          return { color: 'indigo', icon: 'share' }
        case 'tab-2':
          return { color: 'red', icon: 'edit' }
        case 'tab-3':
          return { color: 'green', icon: 'keyboard_arrow_up' }
        case 'tab-4':
          return { color: 'green', icon: 'keyboard_arrow_up' }
        default:
          return {}
      }
    }
  }
}
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral {
  height: 400px;
}

#lateral .speed-dial,
#lateral .btn--floating {
  position: absolute;
}
</style>
