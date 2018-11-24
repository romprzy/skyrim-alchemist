import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import store from './store'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(Vuex);
Vue.use(BootstrapVue);

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
