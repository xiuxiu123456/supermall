/* jshint esversion: 8 */ 

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './network/request';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import './assets/css/base.css';
import "lib-flexible";
import less from 'less';


// import style
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper, /* { default options with global component } */);
Vue.use(less);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
