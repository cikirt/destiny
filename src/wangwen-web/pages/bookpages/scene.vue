<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list three-line>
            <template v-for="item in items">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" :key="item.header" v-bind:inset="item.inset"></v-divider>
                <v-list-tile avatar v-else v-bind:key="item.title" >
            <v-list-tile-action>
             <v-btn icon>
              <v-icon>swap_vert</v-icon>
            </v-btn>
            </v-list-tile-action>
                  <v-list-tile-avatar>
                    <img v-bind:src="item.avatar"/>
                  </v-list-tile-avatar>
                  <v-list-tile-content @click="$router.push('/bookpages/scenesetting')">
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                  </v-list-tile-content>
              <v-list-tile-action>
               <v-btn icon>
              <v-icon>delete</v-icon>
            </v-btn>
              </v-list-tile-action>
                </v-list-tile>
 </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'scene',
  methods: {
    test() {}
  },
  data() {
    return {
      items: [
        {
          header: 'location1'
        },
        {
          avatar: '/static/doc-images/lists/1.jpg',
          title: '场景1-XXXXXXXXXX',
          subtitle:
            "<span class='grey--text text--darken-2'>事实上</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: '/static/doc-images/lists/2.jpg',
              title: '场景2-XXXXXXXXXX',
          subtitle:
            "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        {
          divider: true,
          inset: true
        },
        {
          header: 'location2'
        },
        {
          avatar: '/static/doc-images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: '/static/doc-images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle:
            "<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: '/static/doc-images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle:
            "<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    }
  }
}
</script>
