import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import SubHeaders from '../components/SubHeaders.vue';
import ArrayList from '../components/ArrayList.vue';
import PrefilledText from '../components/PrefilledText.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sub-headers',
    name: 'SubHeaders',
    component: SubHeaders,
    props:true
  },
  {
    path: '/array-list/:values',
    name: 'ArrayList',
    component: ArrayList,
    props:true
  },
  {
    path: '/prefilled-text/:values',
    name: 'PrefilledText',
    component: PrefilledText,
    props:true
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
