<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-list three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" :key="item.header" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" >
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  methods: {
    test() {}
  },
  data() {
    return {
      items: [
        { header: 'Today' },
        {
          avatar: '/static/doc-images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: '/static/doc-images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: '/static/doc-images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: '/static/doc-images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle:
            "<span class='grey--text text--darken-2'>Trevor Hansen</span> — Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
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
