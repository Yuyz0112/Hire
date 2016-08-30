import Vue from 'vue'
import App from './App'
import VueRouter from 'VueRouter'
// components
import Home from './views/Home'

Vue.use(VueRouter)
const router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/home': { component: Home },
  '/issue': { component: Home }
})

router.redirect({
  '/': '/home'
})

router.start(App, 'app')
