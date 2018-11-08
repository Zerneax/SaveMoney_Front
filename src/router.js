import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generale from './views/Generale.vue'
import Parametre from './views/Parametre.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'generale',
      component: Generale
    },
    {
      path: '/parametre',
      name: 'parametre',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Parametre
    }
  ]
})
