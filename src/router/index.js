import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Works from '@/views/Works';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/works/:id',
      name: 'Works',
      component: Works,
    },
  ],
});
