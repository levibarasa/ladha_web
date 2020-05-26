<template>

    <section class="wrapper">

        <side-bar
            :menu="'Eco'"
            :submenu="'EcoCustomers'">
        </side-bar>

        <div class="content-area">

            <top-bar></top-bar>

            <div class="content-wrapper">

                <div class="row page-tilte align-items-center">
                  <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">eCommerce Customers </h1>
                    <p class="text-muted m-0 desc">All Customers have placed order</p>
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
                        <!-- <router-link :to="ECOMMERCE.PRODUCTS" class="btn btn-secondary py-1 px-2" title="Cancel" ><span class="material-icons align-text-bottom">arrow_back</span></router-link> -->
                        <button type="button" data-toggle="modal" data-target="#newCustomerModal" class="btn btn-danger">Add Customer</button>
                    </div>
                  </div>
                </div>

                <div class="content">
                    <customers-table v-if="dataReady" :CUSTOMER_URL="ECOMMERCE.CUSTOMERS" :customers="customers"/>
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
                    <add-customer :modalId="'newCustomerModal'" @customer-created-event="loadCustomers()"/>
                </div>

            </div>

        </div>

    </section>

</template>

<script>
import SideBar from "../../Partials/Sidebars/SideBar";
import TopBar from "../../Partials/Topbars/TopBar";
import CustomersTable from "../../Partials/Tables/Ecommerce/CustomersTable";
import {paginator} from "../../../../helpers/helpermethods";
import {SHOP_POS_CUSTOMERS,BASE_URL} from "../../../../router/api";
import {ECOMMERCE} from "../../../../router/web";
import {get} from "../../../../helpers/api";
import DataLoading from "../../Partials/Progress/DataLoading";
import Paginated from "../../Partials/Paginate/Paginated";
import AddCustomer from "../../Partials/Modals/Ecommerce/AddCustomer";
export default {
    name: "Show",
    components: {SideBar,TopBar,CustomersTable,DataLoading,Paginated,AddCustomer},
    data(){
        return {
            customers: [],
            filters: {},
            pagination: paginator(),
            dataReady: false,
            BASE_URL: BASE_URL,
            ECOMMERCE: ECOMMERCE,
        }
    },
    created(){
        this.loadCustomers();
    },
    methods: {
         loadCustomers(){
            get(SHOP_POS_CUSTOMERS+'?page='+this.pagination.current_page)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.customers = res.data.results.data;
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
