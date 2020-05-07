import axios from 'axios'
export default {
    state: {
        api_token: "",
        token_type: "",
        expires_at: "",
        //current_user: null,
        all_accounts: [],
        current_account: {},
    },
    initialize() {

        this.state.api_token = localStorage.getItem('api_token');
        this.state.token_type = localStorage.getItem('token_type');
        this.state.expires_at = localStorage.getItem('expires_at');
        //this.state.current_user = localStorage.getItem('current_user');
        this.state.all_accounts = JSON.parse(localStorage.getItem('all_accounts'));
        this.state.current_account = JSON.parse(localStorage.getItem('current_account'));

    },
    set(api_token,token_type,expires_at,all_accounts, current_account) {
        localStorage.setItem('api_token', api_token);
        localStorage.setItem('token_type', token_type);
        localStorage.setItem('expires_at', expires_at);
        //localStorage.setItem('current_user', JSON.stringify(current_user));
        localStorage.setItem('all_accounts', JSON.stringify(all_accounts));
        localStorage.setItem('current_account', JSON.stringify(current_account));
        this.initialize()
    },
    remove() {
        localStorage.removeItem('api_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('all_accounts');
        localStorage.removeItem('current_account');
        localStorage.removeItem('entryUrl');
        localStorage.removeItem('accountings');
        localStorage.removeItem('products');
        localStorage.removeItem('reports');
        this.initialize();
        this.traceActive(null,null);
        this.deleteCurrentBranch();
    },

    isAuth(){

        if ( localStorage.getItem('api_token') ){
            return true;
        }else { 
            return false; 
        }

    },
}
