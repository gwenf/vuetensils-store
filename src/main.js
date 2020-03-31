import Vue from 'vue'
import 'foundation-sites/dist/css/foundation.min.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
