// import {DASHBOARDS} from "../router/web";
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

    setMenu(outer_level, inner_level){
        let current_account = JSON.parse(localStorage.getItem('current_account'));
        let permissions = current_account.company.user.role.permissions;
        if(outer_level){
            for( let i = 0; i < permissions.length; i++ ){
                if(permissions[i].description === inner_level){
                    return true;
                }
            }
        }
    },

    getAccounting(){
        return JSON.parse(localStorage.getItem("accountings"));
    },
    getProducts(){
        return JSON.parse(localStorage.getItem("products"));
    },

    // menuChecker(check_value){
    //     let current_account = JSON.parse(localStorage.getItem('current_account'));
    //     let permissions = current_account.company.user.role.permissions;
    //     let pin_ = false;
    //     for( let i = 0; i < permissions.length; i++ ){
    //         if(permissions[i].slug === check_value){
    //             pin_ = true;
    //         }
    //     }
    //     return pin_;
    // },

    hasPermission(check_value){
        let current_account = JSON.parse(localStorage.getItem('current_account'));
        let permissions = current_account.company.user.role.permissions;
        let pin_ = false;
        for( let i = 0; i < permissions.length; i++ ){
            if(permissions[i].slug === check_value){
                pin_ = true;
            }
        }
        return pin_;
    },

    // export function isInArray(value, array) {
    //     return array.includes(value);
    // }

    getRole(){
        return JSON.parse(localStorage.getItem('current_account'));
    },

    // getCurrentPracticePermission(){
    //     let current_account = JSON.parse(localStorage.getItem('current_account'));
    //     //console.info(current_account);
    //     return current_account.data[0].practice_user.roles[0].permissions;
    // },

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('current_user'));
    },

    getKey(){
        let logged_user = JSON.parse(localStorage.getItem('current_user'));
        return logged_user.id;
    },
    getId(){
        let logged_user = JSON.parse(localStorage.getItem('current_user'));
        return logged_user.id;
    },
    getUsername(){
        let logged_user = JSON.parse(localStorage.getItem('current_user'));
        return logged_user.username;
    },
    getFname(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.first_name;
    },
    getPhone(){
        // let logged_user = JSON.parse(localStorage.getItem('current_user'));
        // return logged_user.phone;
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.mobile;
    },
    getEmail(){
        // let logged_user = JSON.parse(localStorage.getItem('current_user'));
        // return logged_user.email;
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.email;
    },
    getUserId(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.id;
    },
    getRoleName(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.role.name;
    },
    getOtherName(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.user.other_name;
    },
    getCompanyName(){
        let current_account = this.getCurrentAccount('account');
        return current_account.name;
    },
    getCompanyLogo(){
        let current_account = this.getCurrentAccount('account');
        return current_account.logo;
    },
    getCompanyTaxPin(){
        let current_account = this.getCurrentAccount('account');
        return current_account.taxation.tax_number;
    },
    getBranchId(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.id;
    },
    getBranchName(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.name;
    },
    getBranchCity(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.city;
    },
    getBranchPostalCode(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.postal_code;
    },
    getBranchPhone(){
        let current_account = this.getCurrentAccount('account');
        return current_account.company.mobile;
    },
    
    getAccount(){
        let current_account = this.getCurrentAccount('account');
        return current_account;
    },

    isPracticeUser(){
        let current_account = JSON.parse(localStorage.getItem('current_account'));
        return true;
    },

    getAvatar(){
        let logged_user = JSON.parse(localStorage.getItem('current_user'));
        return logged_user.avatar;
    },

    getPname(){
        let logged_user = JSON.parse(localStorage.getItem('current_user'));
        return logged_user.name;
    },

    redirect_route(){
        return "/dashboard"
    },

    isDoctor(){
        let  role = this.getRole();
        if (role === 'Doctor'){
            return true
        }else {
            return false
        }
    },
    isPharmacy(){
        // let current_account = JSON.parse(localStorage.getItem('current_account'));
        // if (current_account.account_type === 'Pharmacy'){
        //     return true
        // }else {
        //     return false
        // }
        return true
    },
    isApproved(){
        let current_account = JSON.parse(localStorage.getItem('current_account'));
        if (current_account.data.approval_status === 'approved'){
            return true
        }else {
            return true
        }
    },

    getCurrentAccount(type_ = null){
        let current_account = JSON.parse(localStorage.getItem('current_account'));
        let responder = null;
        if (type_){
            switch (type_) {
                case "clinic": //Current Account
                    responder = current_account.data.facility;
                    break;
                case "id":
                    responder = current_account.data.facility.id;
                    break;
                case "facility":
                    responder = current_account.data.facility.name;
                    break;
                case "account":
                    responder = current_account;
                    break;
                case "work_place":
                        //responder = current_account.data.facility;
                    responder = current_account;
                    break;
                case "staff_id":
                    responder = current_account.data.id;
                    break;
                case "address":
                    let src_facility_id = null;
                    let src_store_id = null;
                    let src_department_id = null;
                    let src_sub_store_id = null;
                    if(current_account.data.work_station){
                        src_facility_id = current_account.data.work_station.id;
                    }
                    if(current_account.data.department){
                        src_department_id = current_account.data.department.id;
                    }
                    if(current_account.data.store){
                        src_store_id = current_account.data.store.id;
                    }
                    if(current_account.data.sub_store){
                        src_sub_store_id = current_account.data.sub_store.id;
                    }
                    responder = {
                        source_address: {
                            facility_id: src_facility_id,
                            store_id: src_store_id,
                            department_id: src_department_id,
                            sub_store_id: src_sub_store_id,
                        },
                        destination_address: {
                            facility_id: src_facility_id,
                            store_id: '',
                            department_id: '',
                            sub_store_id: ''
                        },
                        staff_address: {
                            staff_id: current_account.data.id,
                            email: current_account.data.email,
                            role: current_account.data.role.name,
                            facility_id: src_facility_id,
                            store_id: current_account.data.work_station.store.id,
                            department_id: current_account.data.work_station.department.id,
                            sub_store_id: current_account.data.work_station.sub_store.id,
                        },
                        service_data: {
                            service_type: '',
                            service_action: '',
                            posted_data: null,
                        }
                    };
                break;
            }
            return responder
        }
        return current_account;
    },

    getLoggedUser(){
        return  JSON.parse(localStorage.getItem('current_user'));
    },

    isAdmin(){
        let  role = this.getRole();
        if (role === 'admin'){
            return true
        }else {
            return false
        }
    },

    setCurrentBranch(current_branch){
        localStorage.setItem('current_account', JSON.stringify(current_branch));
    },

    getCurrentBranch(){
        
        if(localStorage.getItem('current_account')){
            return JSON.parse( localStorage.getItem('current_account') );
        }else{
            return false;
        }
    },

    deleteCurrentBranch(){
        localStorage.removeItem('current_account');
    },

    redirect_to_branch(){
        let branchs = this.getCurrentBranch();
        if (branchs){
            //return "/facility/dashboard";
            return "/accounting/dashboard";
        } else {
            return "/";
        }
    },

    setEntry(entryUrl){
        localStorage.setItem("entryUrl",entryUrl)
    },

    delEntry(){
        localStorage.removeItem("entryUrl")
    },
    
    getEntryUrl(){
        if (localStorage.getItem("entryUrl")){
            return localStorage.getItem("entryUrl")
        }else {
            return  false;
        }
    },
    traceActive(action_to,current_active){
        switch (action_to) {
            case "get":
                if (localStorage.getItem("activeLink")) {
                    return localStorage.getItem("activeLink");
                }else {
                    return 0;
                }
                break;
            case "set":
                localStorage.setItem("activeLink",current_active);
                break;
            case "remove":
                localStorage.removeItem("activeLink");
                break;
        }
    },
    validateTokenExpiry(){
        return false;
    }


}
