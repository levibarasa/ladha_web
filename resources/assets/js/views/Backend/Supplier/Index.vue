<template>

    <section class="wrapper">

        <side-bar>
        </side-bar>

        <div class="content-area">
            <top-bar></top-bar>
            <div class="content-wrapper">
                <div class="row page-tilte align-items-center">
                  <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">eCommerce Suppliers </h1>
                    <p class="text-muted m-0 desc">All Suppliers</p>
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
                        <button type="button" data-toggle="modal" data-target="#newCustomerModal" class="btn btn-danger">Add Supplier</button>
                    </div>
                  </div>
                </div>

                <div class="content">
                    <table v-if="dataReady" class="table mb-4 responsive-table table-bordered bg-white">
                        <thead class="thead-light2">
                            <tr>
                                <th scope="col" class="resizeable">Supplier Name <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                                <th scope="col" class="resizeable">Address</th>
                                <th scope="col" class="resizeable">Email</th>
                                <th scope="col" class="resizeable">Mobile <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(supplier,index) in suppliers" :key="'suppliers_'+index" class="pointer-cursor">
                                <td data-label="Order#">{{supplier.name}}</td>
                                <td data-label="Reference">{{supplier.address}}</td>
                                <td data-label="Date">{{supplier.email}}</td>
                                <td data-label="Date">{{supplier.phone}}</td>
                            </tr>
                            <tr v-if="!suppliers.length" class="pointer-cursor">
                                <td colspan="4" class="text-center" data-label="Order#">No data to show!</td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                                    <data-load/>
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
import SideBar from "../Partials/SideBar";
import TopBar from "../Partials/TopBar";
import DataLoad from "../Partials/DataLoad";
import {SUPPLIERS_API} from "../../../router/api";
import { get } from '../../../helpers/api';
export default {
    name: "Index",
    components: {SideBar,TopBar,DataLoad},
    data(){
        return {
            suppliers: [],
            dataReady: false,
        }
    },
    created(){
        this.loadSuppliers();
    },
    methods: {
        loadSuppliers(){
            get(SUPPLIERS_API)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.suppliers = res.data.results.data;
                    this.dataReady = true;
                }
            }).catch((err) => {
                this.dataReady = true;
            });
        },
    }
}
</script>
