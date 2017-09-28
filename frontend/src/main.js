import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import '@/assets/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons/circle-o-notch'
import 'vue-awesome/icons/money'
import 'vue-awesome/icons/times-circle'
import 'vue-awesome/icons/plus-circle'
import Icon from 'vue-awesome/components/Icon'

Vue.use(BootstrapVue)
Vue.component('icon', Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
