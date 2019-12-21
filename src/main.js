import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import router from '@/router/index'
import VueRouter from 'vue-router'
import store from "@/store/index.js"
import Vuex from 'vuex'
import axios from "axios";
// import ViewUI from 'view-design';
import "@/utils/viewui.js"
import {Button} from "view-design" ;
Vue.use(Button);
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
