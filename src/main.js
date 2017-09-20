import Vue from 'vue';
import VueFire from 'vuefire';
import VueClazyLoad from 'vue-clazy-load';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.use(VueClazyLoad);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    loader: true,
  },
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
