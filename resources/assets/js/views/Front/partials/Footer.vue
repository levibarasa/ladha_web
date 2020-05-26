<template>
    <footer class="footer pb-5 bg-navy pt-5">
        <div class="container flex-grow-1">
            <div class="row">
                <div class="col-md">
                    <h6 class="weight-600 text-white mb-3">Solutions</h6>
                    <ul class="list-unstyled">
                        <li><router-link :to="LP_LINKS.E_RETAIL_COMMERCE" class="text-muted">E-Commerce</router-link></li>
                        <li><router-link :to="LP_LINKS.E_RETAIL_POS" class="text-muted">Point of Sale</router-link></li>
                    </ul>
                </div>
                <div class="col-md">
                    <h6 class="weight-600 text-white mb-3">Industries</h6>
                    <ul class="list-unstyled">
                        <li><router-link :to="LP_LINKS.RETAIL" class="text-muted">Retail</router-link></li>
                    </ul>
                </div>
                <div class="col-md">
                    <h6 class="weight-600 text-white mb-3">Learn</h6>
                    <ul class="list-unstyled">
                        <li><router-link :to="LP_LINKS.ABOUT" class="text-muted">About</router-link></li>
                    </ul>
                </div>
                <div class="col-md">
                    <ul class="list-unstyled">
                        <li><router-link :to="LP_LINKS.HOME" class="text-muted">{{APP_INFO.NAME}}</router-link></li>
                        <li><a :href="'mailto:'+APP_INFO.EMAIL" class="text-muted">{{APP_INFO.EMAIL}}</a></li>
                        <li><a class="text-muted">address : {{APP_INFO.ADDRESS}}</a></li>
                        <li><a :href="APP_INFO.MOBILE" class="text-muted">{{APP_INFO.MOBILE}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    import APP_INFO from "../../../helpers/config";
    import {LP_LINKS} from "../../../router/web";
    export default {
        data(){
            return {
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
            }
        }
    }
</script>