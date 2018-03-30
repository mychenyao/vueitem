// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import moment from "moment"
import axios from "axios"
import Vue from 'vue'
import App from './App'
import router from './router'
import "mint-ui/lib/style.min.css"
// console.log(window.common);
import "../static/mui/css/mui.css"
import "../static/js/rem.js"
import commonJs from "@/js/commonJs"
import "@/js/filter"
import mintui from 'mint-ui'
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import Vuex from "vuex"
import { mutations } from "@/components/vuex/mutations"
import { state } from "@/components/vuex/state";
// import common from "../static/js/baseHttp";
// window.common=window.common;
import {setCookie,getCookie} from "@/js/cookie"
import {UrlSearch,commonSetSession} from "@/js/session"
import VueCookie from "vue-cookie"

// Tell Vue to use the plugin
Vue.use(VueCookie);
import {historyPath,getCurrentUrl} from "@/js/pathBack"
import animate from 'animate.css'
if(window.location.href.indexOf("http://localhost")!==-1){
	// setCookie("BBC90ACBDA86428DA01A6A8688B067A0");
}

Vue.prototype.$moment=moment;
Vue.prototype.$commonJs=commonJs;
Vue.prototype.$historyPath=historyPath;
Vue.prototype.$common=window.common;
Vue.prototype.$commonSetSession=commonSetSession;
Vue.prototype.$getCurrentUrl=getCurrentUrl;
Vue.prototype.$UrlSearch=UrlSearch;
Vue.prototype.$Toast = Toast;
Vue.prototype.$_getCookie = getCookie;
Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    mutations
});
Vue.prototype.$http = axios;
Vue.use(mintui);
Vue.config.productionTip = false;
import "../static/css/common.css"

  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  });
