<template>
    <div class="solid fplain">

        <page-header :current_class="current_class"></page-header>

        <!--BODY-->
        <div class="pp-body dsh">
            <section class="pp-loginblock">
                <div class="row">
                    <div class="column medium-12 large-10 large-offset-1">
                        <div id="main" class="boxgrad">
                            <div id="pp-main" class="tabs-panel is-active" aria-hidden="false">
                                <div class="row">
                                    <div class="column medium-7 lleft">
                                        <fieldset>
                                            <h1>Password Troubles?</h1>
                                            <div class="validation-summary-valid" data-valmsg-summary="true">
                                                <ul>
                                                    <li style="display:none"></li>
                                                </ul>
                                            </div>
                                            <div class="alert alert-info">
                                                Enter the email address associated with your account, and we’ll
                                                email you a link to reset your password.
                                            </div>
                                            <form @submit.prevent="resetPassword" class="center">
                                                <div class="form-group">
                                                    <label class="control-label" for="email">Email<span class="field-validation-valid" data-valmsg-for="UserName" data-valmsg-replace="false">*</span></label>
                                                    <div class="controls input-group">
                                                        <span class="input-group-label"><i class="pe-7s-mail"></i></span>
                                                        <input v-model="form.email" required class="input-block-level input-large input-group-field" id="email" placeholder="Email" type="email"/>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="controls input-group">
                                                        <label class="checkbox">
                                                            <input class="remember" data-val="true" data-val-required="The Remember me? field is required." id="RememberMe" name="RememberMe" type="checkbox" value="true" /><input name="RememberMe" type="hidden" value="false" />
                                                            Remember me?
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="form-group form-buttons">
                                                    <div class="controls">
                                                        <button class="btn-primary btn form-control form-control-custom">Send Reset Link</button>
                                                        <p><router-link to="/login" class="styledlink">Remembered password</router-link></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </fieldset>
                                    </div>
                                    <div class="column medium-5 lright">
                                        <h4>Keep your account Secure</h4>
                                        <ul class="hints">
                                            <li>
                                                <i class="pe-7s-lock"></i>
                                                <h5>Password Safety</h5>
                                                Do not share your password or have it stored on a browser by default unless necessary.
                                            </li>
                                            <li>
                                                <i class="pe-7s-power"></i>
                                                <h5>Always Logout</h5>
                                                Once done, always logout so that no one gains access to your account without your knowledge.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!--END BODY-->

        <!--FOOTER-->
        <page-footer></page-footer>
        <!--END FOOTER-->

    </div>

    <!--<div>-->
        <!--<page-header></page-header>-->
        <!--<section class="pricing-area section-gray-bg" id="pricing-area">-->
            <!--<div class="container">-->
                <!--<div class="row">-->
                    <!--<div class="col-xs-12 col-sm-offset-3 col-sm-6">-->
                        <!--<div class="section-heading">-->
                            <!--<div class="text-center login-icon">-->
                                <!--<a>-->
                                    <!--<img :src="'/assets/images/profile-pictures/doctors/doctor_icon_1.png'">-->
                                <!--</a>-->
                                <!--<h3>Password Troubles?</h3>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="row">-->
                    <!--<div class="col-xs-12 col-sm-offset-3 col-sm-6">-->
                        <!--<div class="section-heading">-->
                            <!--<div class="text-center login-icon">-->
                                <!--<div class="login text-center">-->
                                    <!--<div class="single-plan single-plan-logins single-plan-logins-form center" style="padding: 20px!important;">-->

                                        <!--<form @submit.prevent="resetPassword" class="center">-->
                                            <!--<div class="row">-->

                                                <!--<div class="col-md-12">-->
                                                    <!--<div class="form-group">-->
                                                        <!--<div class="alert alert-info">-->
                                                            <!--Enter the email address associated with your account, and we’ll-->
                                                            <!--email you a link to reset your password.-->
                                                        <!--</div>-->
                                                        <!--<input placeholder="Email address" v-model="form.email" type="email" required class="form-control form-item">-->
                                                        <!--<small class="error-control" v-if="error.email">{{error.email[0]}}</small>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                                <!--<div class="col-md-12">-->
                                                    <!--<div class="">-->
                                                        <!--<button class="btn-primary btn form-control form-control-custom">Send Reset Link</button>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                                <!--<div class="col-md-12">-->
                                                    <!--<div class="text-right">-->
                                                        <!--<p>Remembered password? <router-link to="/login" class="btn-link">Login here</router-link></p>-->
                                                    <!--</div>-->
                                                <!--</div>-->
                                            <!--</div>-->
                                        <!--</form>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</section>-->
    <!--</div>-->

</template>

<script type="text/javascript">
    import Config from '../../../config/config'
    import Auth from '../../../store/auth'
    import { post,get } from '../../../helpers/api'
    import PageHeader from '../../Front/partials/Header.vue'
    import PageFooter from '../../Front/partials/AuthFooter.vue'
    import NotificationMixin from '../../../helpers/flash'

    export default {
        components: {
            PageHeader,
            PageFooter,
        },
        data() {
            return {
                sys_config: Config.application,
                sys_notification: NotificationMixin.notify.notificationSystem.options,
                form: {
                    email: '',
                },
                error: {},
                isProcessing: false,
            }
        },
        created(){

        },
        methods: {
            resetPassword() {
                let loader = this.$loading.show();
                this.error = {};
                this.isProcessing = true;
                post('/api/send/reset/link', this.form)
                .then((res) => {
                    if(res.data.resetpassword) {
                        loader.hide();
                        alert(res.data.message);
                    }
                    this.isProcessing = false;
                    loader.hide();
                })
                .catch((err) => {
                    if(err.response.status === 422) {
                        alert(err.response.status);
                        this.error = err.response.data;
                    }else if (err.response.status === 500){
                    }
                    this.isProcessing = false;
                    loader.hide();
                })
            }
        }
    }
</script>

