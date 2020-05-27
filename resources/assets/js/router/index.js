import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Front/Home.vue';
import Dashboard from "../views/Backend/Dashboard";
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
        { path: WEBURL.DASHBOARD, component: Dashboard, meta: { authenticatedUser: true } },
        { path: WEBURL.CUSTOMERS, component: Customers, meta: { authenticatedUser: true } }, 
        { path: WEBURL.VEHICLES, component: Vehicles, meta: { authenticatedUser: true } },
        { path: WEBURL.DRIVERS, component: Drivers, meta: { authenticatedUser: true } },
        { path: WEBURL.SUPPLIERS, component: Suppliers, meta: { authenticatedUser: true } },
        { path: WEBURL.ADD_SUPPLIERS, component: AddSupplier, meta: { authenticatedUser: true } },
        { path: WEBURL.PRODUCTS, component: Products, meta: { authenticatedUser: true } },
        { path: WEBURL.ADD_PRODUCTS, component: AddProduct, meta: { authenticatedUser: true } },
        { path: WEBURL.ORDERS, component: Orders, meta: { authenticatedUser: true } },
        { path: WEBURL.USER_ACTIVITIES, component: UserActivity, meta: { authenticatedUser: true } },
		{ path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
	]
});

export default router
