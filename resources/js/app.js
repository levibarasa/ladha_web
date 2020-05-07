import Vue from 'vue';

import App from './components/App';
import router from './router';
import Auth from './store/auth';

const app = new Vue({
    el: '#root',
    template: `<app></app>`,
    components: { App },
    router
});