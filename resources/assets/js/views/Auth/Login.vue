<template>
    <section class="wrapper">
        <div class="login">
            <div class="image-placeholder">
                <h1>{{APP_INFO.NAME}}</h1>
            </div>
            <div class="form">
                <logo/>
                <h3 class="h4 mb-5 text-center">Admin Login</h3>
                <form @submit.prevent="login()">
                    <div v-if="login_err" class="alert alert-danger border-radius-zero fs-13">
                        {{login_err}}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" :disabled="processing" v-model="form.email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" :disabled="processing" v-model="form.password" class="form-control" required id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" :disabled="processing" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <router-link :to="LP_LINKS.LOSTPASS" class="float-right">Password ?</router-link>
                    </div>
                    <button :disabled="processing" type="submit" class="btn mt-4 btn-primary btn-primary-lp btn-block">
                        <span class="fa fa-ban" v-if="processing">Please wait...</span>
                        <span v-else>Login</span>
                    </button>
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
    import {LOGIN_API} from "../../router/api";
    import {createHtmlErrorString} from "../../helpers/helpermethods";
    import {WEBURL} from "../../router/web";
    import Logo from "../Partials/Logo";
    export default {
        components: {Logo},
        data() {
            return {
                processing: false,
                login_err: '',
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
                form: {
                    email: 'sys@bidhaatele.com',
                    password: ''
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

