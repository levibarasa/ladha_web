import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Front/Home.vue';
import Login from '../views/Auth/Login.vue';
import NotFound from '../views/Errors/NotFound.vue';


import {LP_LINKS} from "./web";
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
        { path: LP_LINKS.HOME, component: Login, meta: { requiresGuest: true } },
        { path: LP_LINKS.LOGIN_URL, component: Login, meta: { requiresGuest: true } },
		{ path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
	]
});

export default router
