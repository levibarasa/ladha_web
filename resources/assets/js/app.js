import Vue from 'vue';

import Auth from './store/auth';
import App from './App.vue';
import router from './router';
// import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.min.css';
// Vue.use(Loading);

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

import VueAWN from "vue-awesome-notifications"
import 'vue-awesome-notifications/dist/styles/style.css';
Vue.use(VueAWN, {
    position: 'top-right',
    labels: {
        warning: 'Whoops!',
        success: 'Success',
        confirm: 'Confirmation Required'
    },
    icons: {
        confirm: 'question-circle'
    },
    modal: {
        okLabel: 'OK',
        cancelLabel: 'Close',
    }
});

router.beforeEach((to, from, next) => {

    const authenticatedUser = to.matched.some(record => record.meta.authenticatedUser);
    const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
    const accessToUsers = to.matched.some(record => record.meta.accessToUsers);
    const accessToRoles = to.matched.some(record => record.meta.accessToRoles);
    const editCompany = to.matched.some(record => record.meta.editCompany);

    if ( requiresGuest ){
        if (Auth.isAuth()) {
            const url_to = Auth.redirect_route();
            if (url_to === 'next') {
                next();
            } else {
                next(url_to);
            }
        } else {
            next();
        }
    }
    else if ( authenticatedUser ){

        if (Auth.isAuth()) {

            //Requires Access to Users & Roles
            if(accessToUsers || accessToRoles){
                if( Auth.hasPermission(ADMIN_PERM.USERS.VIEW) || Auth.hasPermission(ADMIN_PERM.ROLES.VIEW)){ next(); }else{ next('/403'); }
            }else if( editCompany ){
                if( Auth.hasPermission(COMPANY_PERM.COMPANY.EDIT)){ next() }else{ next('/403'); }
            }
            else{
                next();
            }

            next();

        } else {
            let entryUrl = to.path;
            Auth.setEntry(entryUrl);
            next('/login')
        }

    }
    else {
        next();
    }

});

const app = new Vue({
    el: '#root',
    template: `<app></app>`,
    components: { App },
    router
})

