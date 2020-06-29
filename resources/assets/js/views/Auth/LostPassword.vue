<template>
    <div>
  <Header></Header> 
<section class="header-area"> 
    <!-- navbar area -->
    <div class="component pb-4">
        
        <div class="container">
            <div class="row" style="margin-top: 80px;">
                <div class="col-md-6 col-sm-12 col-xs-12 offset-md-2">    
                <form>
                    <div class="alert alert-info border-radius-zero fs-13">
                        Enter the email address associated with your account, and we’ll
                        email you a link to reset your password.
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" v-model="form.email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <router-link :to="LP_LINKS.LOGIN_URL" class="float-right">Remembered?</router-link>
                    </div>
                    <button type="submit" class="btn mt-4 btn-primary btn-primary-lp btn-block">Submit</button> 
                    <br/><br/><br/><br/><br/><br/>
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
    import Logo from "../Partials/Logo";
    export default {
        components: {Logo,DataLoad,SideBar,Header,Footer},
        data(){
            return {
                LP_LINKS: LP_LINKS,
                APP_INFO: APP_INFO.APP_INFO,
                form: {
                    email: '',
                }
            }
        }
    }
</script>