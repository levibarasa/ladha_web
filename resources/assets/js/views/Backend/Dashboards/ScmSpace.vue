<template>

    <section class="wrapper">

        <div class="content-area main-view">

            <work-space-bar></work-space-bar>

            <div class="content-wrapper">

                <div class="content">

                    <div class="row">
                        <div class="col-md-12 mg-20 icon-apps">

                            <div class="o_apps">
                                <a class="o_app o_menuitem text-center pointer-cursor">
                                    <div class="o_app_icon">
                                        <img src="/assets/icons/dashboard/app.png">
                                    </div>
                                    <div class="o_caption">Dashboard</div>
                                </a>
                            </div>

                            <div class="o_apps">
                                <router-link :to="ECOMMERCE.DASHBOARD" class="o_app o_menuitem text-center pointer-cursor">
                                    <div class="o_app_icon">
                                        <img src="/assets/icons/dashboard/invoice.png">
                                    </div>
                                    <div class="o_caption">E-commerce</div>
                                </router-link>
                            </div>

                            <div class="o_apps">
                                <a class="o_app o_menuitem text-center pointer-cursor">
                                    <div class="o_app_icon">
                                        <img src="/assets/icons/dashboard/pos.png">
                                    </div>
                                    <div class="o_caption">POS</div>
                                </a>
                            </div>

                            <div class="o_apps">
                                <a class="o_app o_menuitem text-center pointer-cursor">
                                    <div class="o_app_icon">
                                        <img src="/assets/icons/dashboard/inventory.png">
                                    </div>
                                    <div class="o_caption">Delivery</div>
                                </a>
                            </div>

                            <div class="o_apps">
                                <a class="o_app o_menuitem text-center pointer-cursor">
                                    <div class="o_app_icon">
                                        <img src="/assets/icons/dashboard/setting-cog.png">
                                    </div>
                                    <div class="o_caption">Settings</div>
                                </a>
                            </div>

                        </div>
                    </div>
                          
                </div>

            </div>

        </div>

    </section>

</template>
<script>
import WorkSpaceBar from "../Partials/Topbars/WorkSpaceBar";
import {ECOMMERCE} from "../../../router/web";
export default {
    name: "ScmSpace",
    components: {WorkSpaceBar},
    data(){
        return {
            processing: false,
            ECOMMERCE: ECOMMERCE,
        }
    }
}
</script>
<style scoped>
.main-view {
    min-height: 100vh!important;
    background: url("/assets/images/home-menu-bg-overlay.svg"), linear-gradient(to right bottom, #77717e, #c9a8a9);
    background-size: cover;
}
</style>