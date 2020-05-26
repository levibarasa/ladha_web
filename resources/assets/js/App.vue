<template>
	<router-view></router-view>
</template>
<script type="text/javascript">
    import Auth from './store/auth'
    import Flash from './helpers/flash'
    import { post, interceptors } from './helpers/api'
    import Config from './config/config'
    export default {
        created() {
            // global error http handler
            interceptors((err) => {
                if(err.response.status === 401) {
                    Auth.remove();
                    this.$router.push('/login')
                }

                if(err.response.status === 500) {
                    Flash.setError(err.response.statusText)
                }

                if(err.response.status === 404) {
                    this.$router.push('/not-found')
                }
            })
            Auth.initialize()
        },
        data() {
            return {
                authState: Auth.state,
                flash: Flash.state,
                apps: Config.application
            }
        },
        computed: {
            auth() {
                if(this.authState.api_token) {
                    return true
                }
                return false
            },
            guest() {
                return !this.auth
            }
        },
        methods: {
            logout() {
                post('/api/logout')
                    .then((res) => {
                        if(res.data.done) {
                            // remove token
                            Auth.remove();
                            Flash.setSuccess('You have successfully logged out.');
                            this.$router.push('/login')
                        }
                    })
            },
        }
    }
</script>
