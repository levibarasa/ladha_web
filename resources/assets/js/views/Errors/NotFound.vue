<template>
    <section class="wrapper">
        <div class="features-section main-view" id="main-view">
            <div class="content-wrapper">
                <div class="content text-center">
                    <h1 class="display-1 weight-400 mt-5" style="font-size: 10rem;">404</h1>
                    <p class="lead mb-2">The Page you requested does not exist</p>
                    <p class="text-muted small">Either the webpage was removed or moved and the URL wasn't changed accordingly</p>
                    <router-link :to="LP_LINKS.HOME" class="btn btn-primary btn-primary-lp px-4 mt-4 rounded">Go Back Home</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script type="text/javascript">
    import Auth from '../../store/auth';
	import {LP_LINKS} from "../../router/web";
    export default {
        data() {
            return {
                LP_LINKS: LP_LINKS,
            }
        },
        methods: {
            
        },
        mounted(){
            //Auth.remove();
        }
    }
</script>
<style scoped>
    .main-view {
        min-height: 100vh!important;
    }
</style>
