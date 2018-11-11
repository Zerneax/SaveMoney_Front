import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import VueMomentLib from 'vue-moment-lib'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icon from  font awesome
import { faMeh, faSmile, faFrown, faEuroSign, faCoins, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'

library.add(faMeh, faSmile, faFrown, faEuroSign, faCoins, faEnvelope);


Vue.component('font-awesome-icon', FontAwesomeIcon);

export var serverBus = new Vue();

Vue.use(SuiVue);
Vue.use(VueMomentLib);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
