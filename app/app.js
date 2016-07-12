window.$ = window.jQuery = require('jquery')
import "es6-promise"

import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

import App from './components/App.vue'

import routes from './routes'

//Install plugins
Vue.use(Router)

// Set up a new router
const router = new Router({
    hashbang: false,
    history: true
})

router.mode = 'html5'

// Route config
router.map(routes)

// For every new route scroll to the top of the page
router.beforeEach( () => {
    window.scrollTo(0, 0)
})

// Router redirects
router.redirect({
    // '*': '/home'
})

//sync vuex and router
sync(store, router)

// Start up our app
router.start(App, '#app')
