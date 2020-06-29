import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Front/Home.vue';
import Index from "../views/Backend/Index"; 
import Login from '../views/Auth/Login.vue'; 
import Register from '../views/Auth/Register.vue'; 
import Contact from '../views/Backend/Contact.vue'; 
import About from '../views/Backend/Partials/About.vue'; 
import Download from '../views/Backend/Partials/Download.vue'; 
import Restaurant from '../views/Backend/Partials/Restaurant.vue'; 
import LostPassword from '../views/Auth/password/LostPassword.vue'; 
import NotFound from '../views/Errors/NotFound.vue'; 

import {LP_LINKS,WEBURL} from "./web";
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',  
	routes: [
        { path: LP_LINKS.HOME, component: Index, meta: { requiresGuest: true } },
        { path: LP_LINKS.LOGIN_URL, component: Login, meta: { requiresGuest: true } }, 
        { path: LP_LINKS.LOSTPASS, component: LostPassword, meta: { requiresGuest: true } }, 
        { path: WEBURL.Register, component: Register, meta: { requiresGuest: true } },
        { path: WEBURL.Contact, component: Contact, meta: { requiresGuest: true } },  
        { path: WEBURL.Download, component: Download, meta: { requiresGuest: true } },  
        { path: WEBURL.About, component: About, meta: { requiresGuest: true } }, 
        { path: WEBURL.Restaurant, component: Restaurant, meta: { requiresGuest: true } }, 
        { path: WEBURL.Index, component: Index, meta: { authenticatedUser: true } }, 
		{ path: '/not-found', component: NotFound },
        { path: '*', component: NotFound },
	]
});

export default router
