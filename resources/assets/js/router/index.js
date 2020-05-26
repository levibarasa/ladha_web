import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Front/Home.vue';
import Customers from '../views/Backend/Customer/Index';
import Drivers from '../views/Backend/Delivery/Driver';
import Login from '../views/Auth/Login.vue';
import NotFound from '../views/Errors/NotFound.vue';


import {LP_LINKS,WEBURL} from "./web";
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
        { path: LP_LINKS.HOME, component: Login, meta: { requiresGuest: true } },
        { path: LP_LINKS.LOGIN_URL, component: Login, meta: { requiresGuest: true } },
        { path: WEBURL.CUSTOMERS, component: Customers, meta: { requiresGuest: false } },
        { path: WEBURL.DRIVERS, component: Drivers, meta: { requiresGuest: false } },
		{ path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
	]
});

export default router
