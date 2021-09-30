import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
