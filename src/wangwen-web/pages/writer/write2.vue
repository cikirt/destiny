<template>
  <div>
    写作功能2
    <nuxt-link to="/">Back to the home page</nuxt-link>
</div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'writechapter',
  methods: {
    test() {}
  },
  data() {
    return {
      items: [
        {
          header: 'Today'
        },
        {
          avatar: '/static/doc-images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: '/static/doc-images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        {
          divider: true,
          inset: true
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
        },
        {
          avatar: '/static/doc-images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle:
            "<span class='grey--text text--darken-2'>Britta Holt</span> — We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
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
