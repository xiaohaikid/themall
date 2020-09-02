import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// 解决移动端300ms的延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

