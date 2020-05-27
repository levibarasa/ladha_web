// import {DASHBOARDS} from "../router/web";
export default {
    state: {
        api_token: "",
        token_type: "",
        expires_at: "",
        current_account: {},
    },
    initialize() {

        this.state.api_token = localStorage.getItem('api_token');
        this.state.token_type = localStorage.getItem('token_type');
        this.state.expires_at = localStorage.getItem('expires_at');
        this.state.all_accounts = JSON.parse(localStorage.getItem('all_accounts'));
        this.state.current_account = JSON.parse(localStorage.getItem('current_account'));

    },
    set(api_token,token_type,expires_at,current_account) {
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('token_type', token_type);
        localStorage.setItem('expires_at', expires_at);
        localStorage.setItem('current_account', JSON.stringify(current_account));
        this.initialize()
    },
    remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('current_account');
        this.initialize();
    },

    isAuth(){

        if ( localStorage.getItem('api_token') ){
            return true;
        }else { 
            return false; 
        }
    },

}
