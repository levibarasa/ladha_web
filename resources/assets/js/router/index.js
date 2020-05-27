import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Front/Home.vue';
import Customers from '../views/Backend/Customer/Index';
import Drivers from '../views/Backend/Delivery/Driver';
import Vehicles from '../views/Backend/Delivery/Vehicle';
import Suppliers from '../views/Backend/Supplier/Index';
import AddSupplier from '../views/Backend/Supplier/Create';
import Products from '../views/Backend/Products/Index';
import AddProduct from '../views/Backend/Products/Create';
import Orders from '../views/Backend/Orders/Index';
import UserActivity from '../views/Backend/Users/Index';
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
        { path: WEBURL.VEHICLES, component: Vehicles, meta: { requiresGuest: false } },
        { path: WEBURL.DRIVERS, component: Drivers, meta: { requiresGuest: false } },
        { path: WEBURL.SUPPLIERS, component: Suppliers, meta: { requiresGuest: false } },
        { path: WEBURL.ADD_SUPPLIERS, component: AddSupplier, meta: { requiresGuest: false } },
        { path: WEBURL.PRODUCTS, component: Products, meta: { requiresGuest: false } },
        { path: WEBURL.ADD_PRODUCTS, component: AddProduct, meta: { requiresGuest: false } },
        { path: WEBURL.ORDERS, component: Orders, meta: { requiresGuest: false } },
        { path: WEBURL.USER_ACTIVITIES, component: UserActivity, meta: { requiresGuest: false } },
		{ path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
	]
});

export default router
