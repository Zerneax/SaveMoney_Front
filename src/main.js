import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import VueMomentLib from 'vue-moment-lib'
//import Moment from 'moment'

import 'semantic-ui-css/semantic.min.css'

Vue.use(SuiVue);


// var moment = require('moment');
// Vue.use(moment);
Vue.use(VueMomentLib);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
