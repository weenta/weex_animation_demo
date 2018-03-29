/*global Vue*/
/* weex initialized here, please do not move this line */
const router = require('./router');
const store = require('./store');
const App = require('@/index.vue');
// import { sync } from 'vuex-router-sync'
// sync(store, router)

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router,store}, App));
router.push('/');

