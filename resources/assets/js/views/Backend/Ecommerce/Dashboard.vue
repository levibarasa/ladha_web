<template>

    <section class="wrapper">

        <side-bar
            :menu="'Eco'"
            :submenu="'EcoDash'">
        </side-bar>

        <div class="content-area">

            <top-bar></top-bar>

            <div class="content-wrapper">

                <div class="row page-tilte align-items-center">
                  <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">eCommerce Dashboard</h1>
                    <p class="text-muted m-0 desc">Get a quick overview of eCommerce</p>
                  </div> 
                  <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block ">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                      <input type="text" class="form-control date-rage width-260" >
                      <button type="button" class="btn btn-danger">Apply Range</button>
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
                    </div>
                  </div>
                </div>

                <div class="content">
                    <!-- -----Top Totals---- -->
                    <div class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <eco-totals 
                                v-if="totalsLoaded"
                                :totals="totals"
                                :currency="currency">
                            </eco-totals>
                            <div v-else class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                                    <data-loading/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- -----------------Totals-------- -->
                    <div class="row">
                        <div class="col-lg-8 mb-4 mxh-475">
                            <div v-if="salesGraph" class="card  h-100">
                                <div class="card-header py-3">Sales &amp; Users Report</div>
                                <div class="card-body">
                                    <apex-bar
                                        :unit="currency"
                                        :colors="salesGraphData.colors"
                                        :api_series="salesGraphData.series"
                                        :api_categories="salesGraphData.categories">
                                    </apex-bar>
                                </div>
                            </div>
                            <div v-else class="card  h-100 text-center">
                                <data-loading/>
                            </div>
                        </div>
                        <div v-if="!regionalSales" class="col-lg-4 mb-4 text-center">
                            <div class="card mb-4 text-center">
                                <div class="card-body text-center">
                                    <data-loading/>
                                </div>
                            </div>
                        </div>
                        <regions-sales-report v-else :regionalSalesComparison="regionalSalesComparison"/>
                    </div>

                    <!-- --------------------------------------- -->
                    <div class="row">
                        <div class="col-lg-4 mb-4 mb-lg-0 ">
                            <div v-if="orderPie" class="card h-100 ">
                                <div class="card-header">Order Status</div>
                                <div class="card-body">
                                    <h3 class="weight-400 text-center mb-0"><span class="material-icons mr-2 text-success">arrow_upward</span>73,239</h3>
                                    <p class="text-muted text-center">Lorem ipsum dolor sit amet</p>
                                    <canvas id="chart-area" height="220"></canvas>
                                </div>
                            </div>
                            <div v-else class="card h-100 text-center">
                                <data-loading/>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div v-if="recentCustomer" class="card h-100">
                                <div class="card-body table-responsive p-0">
                                    <customers-table :customers="customers"/>
                                </div>
                            </div>
                            <div v-else class="card h-100">
                                <div class="card-body table-responsive p-0 text-center">
                                    <data-loading/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    </section>

</template>
<script>
import TopBar from "../Partials/Topbars/TopBar";
import SideBar from "../Partials/Sidebars/SideBar";
import EcoTotals from "./Partials/Dashboard/EcoTotals";
import DataLoading from "../Partials/Progress/DataLoading";
import RegionsSalesReport from "./Partials/Dashboard/RegionsSalesReport";
import CustomersTable from "../Partials/Tables/Ecommerce/CustomersTable";
import ApexBar from "../Charts/Apex/ApexBar";
import {POS_ECOMMERCE_DASHBOARD} from "../../../router/api";
import {get} from "../../../helpers/api";
export default {
    name: "Dashboard",
    components: {TopBar,SideBar,EcoTotals,RegionsSalesReport,DataLoading,ApexBar,CustomersTable},
    data(){
        return {
            currency: 'Ksh',
            dataReady: false,
            totalsLoaded: false,
            regionalSales: false,
            salesGraph: false,
            orderPie: false,
            recentCustomer: false,

            totals: {},
            regionalSalesComparison: [],
            salesGraphData: {},
            orderPieData: {},
            customers: [],
        }
    },
    created(){
        this.loadTotals();
    },
    methods: {

        loadTotals(){
            get(POS_ECOMMERCE_DASHBOARD)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.totals = res.data.results;
                    this.totalsLoaded = true;
                    this.loadSalesGraph();
                }
            }).catch((err) => {
            });
        },

        loadSalesGraph(){
            get(POS_ECOMMERCE_DASHBOARD+'/sales/graph')
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.salesGraphData = res.data.results;
                    this.salesGraph = true;
                    this.loadRegionalSales();
                }
            }).catch((err) => {
            });
        },

        loadOrderPie(){
            get(POS_ECOMMERCE_DASHBOARD+'/orders/pie')
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.orderPieData = res.data.results;
                    this.orderPie = true;
                    this.loadRecentCustomer();
                }
            }).catch((err) => {
            });
        },

        loadRecentCustomer(){
            get(POS_ECOMMERCE_DASHBOARD+'/recent/customers')
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.customers = res.data.results;
                    this.recentCustomer = true;
                }
            }).catch((err) => {
            });
        },

        loadRegionalSales(){
            get(POS_ECOMMERCE_DASHBOARD+'/regional/sales')
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.regionalSalesComparison = res.data.results;
                    this.regionalSales = true;
                    this.loadOrderPie();
                }
            }).catch((err) => {
            });
        },

    }
}
</script>