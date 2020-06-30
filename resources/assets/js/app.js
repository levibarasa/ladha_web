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
//Vue.config.devtools = false
const app = new Vue({
    el: '#root',
    template: `<app></app>`,
    components: { App },
    router
})

