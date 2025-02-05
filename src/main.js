// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import BootstrapVueIcons  from 'bootstrap-vue';
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// 跨域
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
