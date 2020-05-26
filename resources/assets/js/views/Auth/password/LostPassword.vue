<template>
    <section class="wrapper">
        <div class="login">
            <div class="image-placeholder">
                <h1>{{APP_INFO.NAME}}</h1>
            </div>
            <div class="form">
                <router-link :to="LP_LINKS.HOME" tag="div" class="text-center mb-4 cursor-pointer"><span class="material-icons text-danger" style="font-size:6rem;" >wifi_tethering</span></router-link>
                <h3 class="h4 mb-5 text-center">Password Problem!</h3>
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
                        <router-link :to="LP_LINKS.LOGIN" class="float-right">Remembered?</router-link>
                    </div>
                    <button type="submit" class="btn mt-4 btn-primary btn-primary-lp btn-block">Submit</button>
                </form>
            </div>
        </div>
    </section>

</template>

<script type="text/javascript">
    import Auth from '../../../store/auth';
    import { post, get } from '../../../helpers/api';
    import APP_INFO from "../../../helpers/config";
    import {LP_LINKS} from "../../../router/web";
    // import Config from '../../../config/config'
    // import Auth from '../../../store/auth'
    // import { post,get } from '../../../helpers/api'
    // import NotificationMixin from '../../../helpers/flash'
    // import PageHeader from '../../Front/partials/AuthHeader.vue'
    // import PageFooter from '../../Front/partials/AuthFooter.vue'
    export default {
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