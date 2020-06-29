<template> 
<div>
  <Header></Header> 
<section class="header-area"> 
    <!-- navbar area -->
    <div class="component pb-4">
        
        <div class="container">
            <div class="row" style="margin-top: 80px;">
                <div class="col-md-6 col-sm-12 col-xs-12 offset-md-2">
                    
    <form @submit.prevent="sendMessage()">
        <br/>
        <h5 class="text-center p-4"> Sign Up</h5>
        <!-- Name --> 
        <div class="form-group">
            <label for="name"> Name</label>

            <input type="text" class="form-control rounded-0" 
                   required
                   id="name"  placeholder="Enter your Name">
              </div>

        <!-- Email --><br/>
        <div class="form-group">
            <label for="email">Email address</label>

            <input type="text" class="form-control rounded-0" 
                   required 
                   id="email"   placeholder="Enter email address"> 
        </div>
        <!-- Subject --><br/>
        <div class="form-group">
            <label for="phone">Phone Number</label>

            <input type="text"  class="form-control rounded-0" 
                   required 
                   id="phone"   placeholder="Phone Number"> 
        </div>
        <!-- Message -->  
        <div class="form-group">
            <label for="message">Password:</label>

            <input type="password"  class="form-control rounded-0" 
                   required 
                   id="password"   placeholder=""> 
        </div> 
        <div class="form-group">
            <label for="message">Confirm Password:</label>

            <input type="password"  class="form-control rounded-0" 
                   required 
                   id="cpassword"   placeholder=""> 
        </div>
        <button type="submit" 
                class="btn btn-primary rounded-0">Submit</button>
          <br/><br/><br/>
    </form> 
                </div>
            </div>
        </div>
    </div>
  </section>
    <SideBar></SideBar>
    <Footer></Footer>
</div>
</template>

<script type="text/javascript">

    import Header from "../Backend/Partials/Header";
    import SideBar from "../Backend/Partials/SideBar"; 
    import DataLoad from "../Backend/Partials/DataLoad"; 
    import Footer from "../Front/partials/Footer";
    import Auth from '../../store/auth';
    import { post, get } from '../../helpers/api';
    import APP_INFO from "../../helpers/config";
    import {LP_LINKS} from "../../router/web";
    import {LOGIN_API} from "../../router/api";
    import {createHtmlErrorString} from "../../helpers/helpermethods";
    import {WEBURL} from "../../router/web";
    import Logo from "../Partials/Logo";
    export default {  
        components: {Logo,DataLoad,SideBar,Header,Footer},
        data() {
            return {
                processing: false,
                login_err: '',
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
                form: {
                    email: 'sysadmin@bidhaatele.com',
                    password: '123456'
                },
            }
        },
        methods: {

            login() {
                this.processing = true;
                post(LOGIN_API, this.form)
                .then((res) => {
                    if(res.data.status_code === 200) {
                        this.$awn.success("Welcome back!");
                        let access_token = res.data.access_token;
                        let token_type = res.data.token_type;
                        let expires_at = res.data.expires_at;
                        Auth.set(access_token,token_type,expires_at,res.data.results);
                        this.$router.push(WEBURL.DASHBOARD);
                        this.processing = false;
                    }
                })
                .catch((err) => {
                    this.processing = false;
                    if(err.response.status === 422) {
                        this.form.password = "";
                        this.$awn.warning(createHtmlErrorString(err.response.data.errors));
                    }
                    else{
                        this.processing = false;
                        this.form.password = "";
                        this.login_err = err.response.data.description;
                        let globalThis = this;
                        setTimeout( function(){ globalThis.login_err = '' }, 5000);
                    }
                });
            },
            
        },
    }
</script>

