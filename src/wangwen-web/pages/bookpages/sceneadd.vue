<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step step="1" v-bind:complete="e6 > 1">
      场景基本信息
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-flex xs8> <v-text-field name="input-1" label="场景名称"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="场景位置"></v-text-field> </v-flex>
      <v-flex xs8> <v-text-field name="input-1" label="场景描述"></v-text-field> </v-flex>
      <v-btn color="primary" @click.native="e6 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="2" v-bind:complete="e6 > 2">
      环境素材
    </v-stepper-step>
    <v-stepper-content step="2">
      <v-expansion-panel>
        <v-expansion-panel-content :key="i">
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

      <v-btn color="primary" @click.native="e6 = 1">Previous</v-btn>
      <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="3" v-bind:complete="e6 > 3">故事概述</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e6 = 2">Previous</v-btn>
      <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">人物概述</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e6 = 3">Previous</v-btn>
      <v-btn color="primary" @click.native="e6 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'sceneadd',
  methods: {
    test() {}
  },
  data() {
    return {
      e6: 1,
      d1: null,
      items: [
          {1:"自然环境"},
          {2:"社会环境"}
      ],
      e11: [],
        people: [
          { name: '节气'},
          { name: '建筑'},
          { name: '家居'},
          { name: '植被'},
          { name: '动物'},
          { name: '地理位置'},
          { divider: true }
      ]
    }
  }
}
</script>
