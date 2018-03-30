// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import urlApi from "@/api/urlApi"
import { state } from "@/components/vuex/state";
import { mutations } from "@/components/vuex/mutations"
Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations
});
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$apidomain=urlApi.MasterApi;
Vue.prototype.$homeApi=urlApi.homeApi;
Vue.prototype.$aboutApi=urlApi.aboutApi;
Vue.prototype.$helpApi=urlApi.helpApi;
Vue.prototype.$channelApi=urlApi.channelApi;
window.affirmOrderApiDomain=urlApi.affirmOrderApiDomain
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
