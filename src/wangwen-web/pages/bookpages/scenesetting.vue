<template>
  <div>
    
        
    <v-expansion-panel popout>
          <v-expansion-panel-content >
        <div slot="header">基本信息</div>
        <v-card>
           <v-layout row>
          <v-flex xs4>
            <v-subheader>场景名称：</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="场景名称"
            ></v-text-field>
          </v-flex>
        </v-layout>
                <v-layout row>
           
          <v-flex xs4>
            <v-subheader>场景发生位置：</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="场景位置"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
           
          <v-flex xs4>
            <v-subheader>场景描述：</v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="场景描述"
            ></v-text-field>
          </v-flex>
        </v-layout>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content >
        <div slot="header">环境素材[主要文字素材，做较好提示，可自由配置，辅助图片素材。]</div>
        <v-card>
          <v-card-text class="grey lighten-3">自然环境，社会环境设定。从宏观到微观。总之能为后续写作服务的都行。作者自由组织Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
      <v-expansion-panel-content >
        <div slot="header">人物素材</div>
        <v-card>
          <v-card-text class="grey lighten-3">该场景下出场人物特征、外貌、性格等等。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
            <v-expansion-panel-content >
        <div slot="header">事件素材</div>
        <v-card>
          <v-card-text class="grey lighten-3">该场景下发生写什么事情。Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
            <v-expansion-panel-content >
        <div slot="header">其它素材</div>
        <v-card>
          <v-card-text class="grey lighten-3">段子，笑话，素材，等等Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'scenesetting',
  methods: {
    test() {}
  },
  data() {
    return {}
  }
}
</script>
