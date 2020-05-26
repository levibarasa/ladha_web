<template>

    <section class="wrapper">

        <side-bar
            :menu="'Eco'"
            :submenu="'EcoProductAdd'">
        </side-bar>

        <div class="content-area">

            <top-bar></top-bar>

            <div class="content-wrapper">

                <div class="row page-tilte align-items-center">
                  <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">eCommerce Products </h1>
                    <p class="text-muted m-0 desc">Create New Product</p>
                  </div> 
                  <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <router-link :to="ECOMMERCE.PRODUCTS" class="btn btn-secondary py-1 px-2" title="Cancel" ><span class="material-icons align-text-bottom">close</span></router-link>
                        <button class="btn btn-danger" title="Save"> <span class="material-icons align-text-bottom">save</span> Save</button>
                    </div>
                  </div>
                </div>

                <div class="content">
                    <!-- <products-table v-if="dataReady" :BASE_URL="BASE_URL" :PRODUCT_DETAIL="PRODUCT_DETAIL" :inventories="inventories"/>
                    <div v-else class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                                    <data-loading/>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>

            </div>

        </div>

    </section>

</template>

<script>
import SideBar from "../../Partials/Sidebars/SideBar";
import TopBar from "../../Partials/Topbars/TopBar";
import ProductsTable from "../../Partials/Tables/Ecommerce/ProductsTable";
import {paginator} from "../../../../helpers/helpermethods";
import {POS_ECOMMERCE_PRODUCTS,BASE_URL} from "../../../../router/api";
import {ECOMMERCE} from "../../../../router/web";
import {get} from "../../../../helpers/api";
import DataLoading from "../../Partials/Progress/DataLoading";
export default {
    name: "Create",
    components: {SideBar,TopBar,ProductsTable,DataLoading},
    data(){
        return {
            inventories: [],
            filters: {},
            pagination: paginator(),
            dataReady: false,
            BASE_URL: BASE_URL,
            ECOMMERCE: ECOMMERCE,
        }
    },
    created(){
        //this.loadItems();
    },
    methods: {
        //  loadItems(show_progress=false){
        //     this.is_initializing = show_progress;
        //     get(POS_ECOMMERCE_PRODUCTS+'?page='+this.pagination.current_page)
        //     .then((res) => {
        //         if(res.data.status_code === 200) {
        //             this.inventories = res.data.results.data;
        //             this.filters = res.data.results.filters;
        //             this.pagination = res.data.results.pagination;
        //             // this.page_ready = true;
        //             // this.is_initializing = false;
        //             // this.processing = false;
        //             //console.info(this.inventories);
        //             this.dataReady = true;
        //         }
        //     }).catch((err) => {
        //         // this.progress_overlay = "hide";
        //         // this.page_ready = true;
        //     });
        // },
    }
}
</script>
