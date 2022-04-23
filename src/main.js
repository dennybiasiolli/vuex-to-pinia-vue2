import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import pinia from './stores'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  pinia,
  render: h => h(App),
}).$mount('#app')
