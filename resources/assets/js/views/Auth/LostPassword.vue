<template>
    <section class="wrapper">
        <div class="login">
            <div class="image-placeholder">
                <h1>{{APP_INFO.NAME}}</h1>
            </div>
            <div class="form">
                <logo/>
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
                        <router-link :to="LP_LINKS.LOGIN_URL" class="float-right">Remembered?</router-link>
                    </div>
                    <button type="submit" class="btn mt-4 btn-primary btn-primary-lp btn-block">Submit</button>
                </form>
            </div>
        </div>
    </section>

</template>

<script type="text/javascript">
    import Auth from '../../store/auth';
    import { post, get } from '../../helpers/api';
    import APP_INFO from "../../helpers/config";
    import {LP_LINKS} from "../../router/web";
    import Logo from "../Partials/Logo";
    export default {
        components: {Logo},
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