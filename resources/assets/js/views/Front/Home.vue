<template>

    <section class="wrapper">

        <div class="features-section main-view" id="main-view">
            <page-header></page-header>
            <div class="container align-items-center d-flex flex-grow-1">
                <div class="row  ">
                    <div class="col-md-10 order-md-1 text-center text-md-left mg-top-140 home-page-info">
                        <h1 class="mb-3 cl-white">{{APP_INFO.NAME}}</h1>
                        <h4 class="mb-3 cl-white">Power of e-commerce in the hands of informal retailers</h4>
                        <p class="cl-white"><span class="fw-600">{{APP_INFO.NAME}}</span> enables informal retailers to order products at anytime via SMS 
                            or mobile app, and receive free same-day delivery to their store. This makes it easier for 
                            shopkeepers to source goods and helps manufacturers ensure that their products are consistently 
                            available to consumers</p>
                        <div class="mt-5">
                            <router-link :to="LP_LINKS.GET_STARTED" class="btn btn-primary btn-primary-lp px-4 mr-1 py-2 circle">Request Demo</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="features-section bg-f4" id="features">
            <div class="container">
                <div class="row py-5" >
                    <div class="col-md mb-4">
                        <div class="card p-4 h-100 mb-4 text-center">
                            <div class="card-body">
                                <!-- <img src="assets/images/features/feature-one.png" class="mb-4"> -->
                                <h2 class="weight-400 h5 mb-4">Goods When Needed</h2>
                                <p class="text-muted weight-300">{{APP_INFO.NAME}} enables informal retailers to order products at anytime via SMS 
                                    or mobile app, and receive free same-day delivery to their store. This makes it easier for shopkeepers 
                                    to source goods and helps manufacturers ensure that their products are consistently available to consumers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md mb-4">
                        <div class="card p-4 mb-4 h-100 mb-4 text-center">
                            <div class="card-body">
                                <!-- <img src="assets/images/features/feature-two.jpg" class="mb-4"> -->
                                <h2 class="weight-400 h5 mb-4">Financing For Growth</h2>
                                <p class="text-muted weight-300">Leveraging historic purchasing data, {{APP_INFO.NAME}} evaluates retailers to provide them
                                     with access to credit and other financial services typically not available to informal businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md mb-4">
                        <div class="card p-4 mb-4 h-100 mb-4 text-center">
                            <div class="card-body">
                                <!-- <img src="assets/images/features/feature-three.jpg" class="mb-4"> -->
                                <h2 class="weight-400 h5 mb-4">Data To Learn</h2>
                                <p class="text-muted weight-300">{{APP_INFO.NAME}} systems track real-time sales and orders across thousands of stores. 
                                    Access to market trends and purchasing habits enables manufacturers to tailor their marketing strategies and 
                                    allows {{APP_INFO.NAME}} to offer personalized promotions and business insights to individual retailers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-e8" id="modules">
            <div class="container ">

                <div class="row py-5 align-items-center">
                    <div class="col-md-7 pl-md-5 order-md-2 animator-wrapper">
                        <img src="assets/images/retail-industry.jpg" class="img-fluid mb-4">
                        <span class="animating-element two"></span>
                    </div>
                    <div class="col-md-5 pr-md-5 order-md-1">
                        <h3 class="weight-400 h5 mb-3">Goods & Services At The Tap Of A Button</h3>
                        <p class="text-muted">Engage customers digitally anytime, anywhere, increasing conversion with a smarter and more personalized journey.</p>
                        <p class="text-muted">With a centralized commerce system your retail information (from prices, items, and product availability) is always consistent.</p>
                        <p class="text-muted">Enable your customers decide how to receive their purchases; directly to their home, or pick them up at any store location or warehouse.</p>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-md-12 pl-md-5 animator-wrapper">
                        <h3 class="weight-400 h5 mb-3">Service Promise</h3>
                        <p class="text-muted">Deliver a consistent shopping experience to your customers. All information on items, prices and discounts is maintained in the retail management system which seamlessly communicates with your e-Retail platform. This ensures that your online store always has up-to-date product information, and allows customers to easily order special, out-of-stock and customized items.</p>
                        <span class="animating-element five"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center container">
            <div class="row my-5 py-5">
                <div class="col-md-6 offset-md-3">
                    <h4 class="weight-400 h2 mb-3">Ready to Experience the Difference with our Retail Management System?</h4>
                    <p class="text-muted">Stop worrying about technology problems. Focus on your business. Let us provide the support you deserve.</p>
                    <router-link :to="LP_LINKS.GET_STARTED" class="btn btn-primary btn-primary-lp px-4 py-2 circle">Request Demo</router-link>
                </div>
            </div>
        </div>
        <page-footer></page-footer>
    </section>

</template>

<script type="text/javascript">
    import APP_INFO from "../../helpers/config";
    import PageHeader from './partials/Header.vue';
    import PageFooter from './partials/Footer.vue';
    import {LP_LINKS} from "../../router/web";
    export default {
        components: {
            PageHeader,
            PageFooter,
        },
        data() {
            return {
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
            }
        },
        methods: {
            
        },
    }
</script>
<style scoped>
    .main-view {
        background: url("/assets/images/app.jpg")no-repeat center center;
        background-size: cover;
    }
    .main-view {
        min-height: 100vh!important;
    }
</style>
