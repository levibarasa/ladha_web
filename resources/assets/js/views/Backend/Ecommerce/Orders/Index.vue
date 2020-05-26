<template>

    <section class="wrapper">

        <side-bar
            :menu="'Eco'"
            :submenu="'EcoOrders'">
        </side-bar>

        <div class="content-area">

            <top-bar></top-bar>

            <div class="content-wrapper">

                <div class="row page-tilte align-items-center">
                  <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">eCommerce Orders </h1>
                    <p class="text-muted m-0 desc">All orders (total 0)</p>
                  </div> 
                  <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block ">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <input type="search" class="form-control d-inline-block" placeholder="Search here...">
                        <span class="dropdown">
                            <button type="button" id="downloadGrid" data-toggle="dropdown" class="btn btn-secondary py-1 px-2" ><span class="material-icons align-text-bottom">save_alt</span></button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="downloadGrid">
                                <a class="dropdown-item" href="#">Save as PDF</a>
                                <a class="dropdown-item" href="#">Save as Image</a>
                                <a class="dropdown-item" href="#">Save as Word</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Export Excel</a>
                            </div>
                        </span>
                        <button type="button" class="btn btn-secondary py-1 px-2"><span class="material-icons align-text-bottom">filter_list</span></button>
                    </div>
                  </div>
                </div>

                <div class="content">
                    <orders-table v-if="dataReady" :currency="currency" :ORDER_STATUS="ORDER_STATUS" :ORDERS_URL="ECOMMERCE.ORDERS" :orders="orders"/>
                    <div v-else class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                                    <data-loading/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <paginated v-if="dataReady"/>
                </div>

            </div>

        </div>

    </section>

</template>

<script>
import SideBar from "../../Partials/Sidebars/SideBar";
import TopBar from "../../Partials/Topbars/TopBar";
import OrdersTable from "../../Partials/Tables/Ecommerce/OrdersTable";
import {paginator} from "../../../../helpers/helpermethods";
import {SHOP_POS_ORDERS_API,BASE_URL} from "../../../../router/api";
import {ECOMMERCE} from "../../../../router/web";
import {get} from "../../../../helpers/api";
import DataLoading from "../../Partials/Progress/DataLoading";
import Paginated from "../../Partials/Paginate/Paginated";
import {ORDER_STATUS} from "../../../../helpers/processStatus";
export default {
    name: "Index",
    components: {SideBar,TopBar,OrdersTable,DataLoading,Paginated},
    data(){
        return {
            orders: [],
            filters: {},
            pagination: paginator(),
            dataReady: false,
            BASE_URL: BASE_URL,
            ECOMMERCE: ECOMMERCE,
            currency: "KES",
            ORDER_STATUS: ORDER_STATUS
        }
    },
    created(){
        this.loadOrders();
    },
    methods: {
         loadOrders(){
            get(SHOP_POS_ORDERS_API+'?page='+this.pagination.current_page)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.orders = res.data.results.data;
                    this.filters = res.data.results.filters;
                    this.pagination = res.data.results.pagination;
                    this.dataReady = true;
                }
            }).catch((err) => {
                this.dataReady = true;
            });
        },
    }
}
</script>
