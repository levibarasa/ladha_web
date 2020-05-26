
import Vue from 'vue';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.min.css';
// Init plugin
Vue.use(Loading);
// Using axios for the demo only
import axios from 'axios';

export default {
    data() {
        return {
            fullPage: false,
            loader: '',
        }
    },
    showProgress(){
        this.loader = this.$loading.show();
    },
    closeProgress(){
        this.loader.hide();
    }
}