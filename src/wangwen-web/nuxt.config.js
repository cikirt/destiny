const bodyParser = require('body-parser')
const session = require('express-session')
const resolve = require('path').resolve

module.exports = {
  head: {
    title: '网文助手',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: '网文助手 高效快捷的网文创作工具' }
    ]
  },
  build: {
    vendor: ['axios']
  },
  router: {
    extendRoutes (routes) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  modules: [
    '@nuxtjs/vuetify'
  ],

  vuetify: {
    // Vuetify options
    //  theme: { }
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}
