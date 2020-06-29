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
            this.$router.push('/') 
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
                return this.auth
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
