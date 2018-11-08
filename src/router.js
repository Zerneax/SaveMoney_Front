import Vue from 'vue'
import Router from 'vue-router'
import Generale from './views/Generale.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'generale',
      component: Generale
    }
  ]
})
