<template>

    <div class="solid fplain">
        <page-header></page-header>
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
                                            <h1>Reset Password</h1>
                                            <div class="validation-summary-valid" data-valmsg-summary="true">
                                                <ul>
                                                    <li style="display:none"></li>
                                                </ul>
                                            </div>
                                            <form @submit.prevent="resetPassword" class="center">
                                                <div class="form-group">
                                                    <label for="password" class="control-label">
                                                        Password <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="false">*</span>
                                                    </label>
                                                    <div class="controls input-group">
                                                        <span class="input-group-label"><i class="pe-7s-lock"></i></span>
                                                        <input v-model="form.password" required class="input-block-level input-large input-group-field" data-val="true" data-val-required="The Password field is required." id="Password" type="password" />
                                                    </div>
                                                </div>
                                                <input type="hidden" v-model="form.token">
                                                <input type="hidden" v-model="form.email">
                                                <div class="form-group">
                                                    <label for="password" class="control-label">
                                                        Confirm Password <span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="false">*</span>
                                                    </label>
                                                    <div class="controls input-group">
                                                        <span class="input-group-label"><i class="pe-7s-lock"></i></span>
                                                        <input required v-model="form.password_confirmation" required class="input-block-level input-large input-group-field" data-val="true" data-val-required="The Password field is required." id="Password" type="password" />
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
                                                        <button value="Log In" class="button alert">Submit</button>
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

</template>

<script type="text/javascript">
    import Config from '../../../config/config'
    import Auth from '../../../store/auth'
    import { post,get } from '../../../helpers/api'
    import NotificationMixin from '../../../helpers/flash'
    import PageHeader from '../../Front/partials/AuthHeader.vue'
    import PageFooter from '../../Front/partials/AuthFooter.vue'

    export default {
        components: {
            PageHeader,
            PageFooter
        },
        data() {
            return {
                sys_config: Config.application,
                sys_notification: NotificationMixin.notify.notificationSystem.options,
                form: {
                    email: '',
                    password: '',
                    password_confirmation: '',
                    token: '',
                },
                error: {},
                isProcessing: false,
                activation: true,
            }
        },
        created(){

            get(`/api/get/reset-data/${this.$route.params.token}`)
                .then((res) => {
                    if(res.data.activation) {
                        this.form = res.data.form;
                        this.activation = true;
                    }
                })
                .catch((err) => {
                    if(err.response.status === 422) {
                        this.error = err.response.data;
                        this.activation = false;
                        this.$toast.error('Something went wrong. Try again later', 'Whoops!', this.sys_notification.error);
                    }
                })
        },
        methods: {
            resetPassword() {
                let loader = this.$loading.show();
                this.error = {};
                //this.$toast.info('Processing...', 'Please wait!', this.sys_notification.processing)
                this.isProcessing = true;
                post('/api/update/user/password', this.form)
                .then((res) => {
                    if(res.data.password_changed) {
                        loader.hide();
                        //this.$toast.success(res.data.message[0], 'Success!', this.sys_notification.success);
                        this.$router.push('/login');
                        //this.$toast.success(res.data.message, 'Success!', this.sys_notification.success)
                    }
                    this.isProcessing = false;
                    loader.hide();
                })
                .catch((err) => {
                    if(err.response.status === 422) {
                        //this.error = err.response.data;
                        //alert("gggggggg");
                        //this.$toast.error(this.error.error[0], 'Whoops!', this.sys_notification.error);
                        loader.hide();
                    }else if (err.response.status === 500){
                        //this.$toast.error('Internal server error', 'Whoops!', this.sys_notification.error);
                    }
                    loader.hide();
                    this.isProcessing = false
                })
            }
        }
    }
</script>