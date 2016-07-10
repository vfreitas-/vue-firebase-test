import Vue from 'vue'
import Router from 'vue-router'


import App from './components/App.vue'
import Dashboard from './components/pages/Dashboard.vue'

//Install plugins
Vue.use(Router)

// Set up a new router
const router = new Router({
    hashbang: false,
    history: true
})

router.mode = 'html5'

// Route config
router.map({
    '/':{
        name: 'dashboard',
        component: Dashboard
    }
})

// For every new route scroll to the top of the page
router.beforeEach( () => {
    window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
    // '*': '/home'
})

// Start up our app
router.start(App, '#app')
