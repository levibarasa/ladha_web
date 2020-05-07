import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/front/Home';
import Login from '../views/auth/Login';

//errors
import NotFound from '../views/errors/NotFound';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {   path: '/', component: Login, meta: { title: 'Home', guestUser: true } },
        //GetStarted
        {   path: '/login', component: Login, meta: { title: 'Login', guestUser: true } },
        //errors pages
        { path: '*', component: NotFound, meta: {  title: ' | 404 - Page Not Found'} },
    ]
});

export default router
