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
                    <h1 class="weight-300 h3 title">eCommerce Customer Orders </h1>
                    <p class="text-muted m-0 desc">All Orders</p>
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
                    </div>
                  </div>
                </div>

                <div class="content">
                    <table v-if="dataReady" class="table mb-4 responsive-table table-bordered bg-white">
                        <thead class="thead-light2">
                            <tr>  
                                <th scope="col" class="resizeable">Order # <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                                <th scope="col" class="resizeable">Amount</th>
                                <th scope="col" class="resizeable">Date Placed</th>
                                <th scope="col" class="resizeable">Payment Status</th>
                                <th scope="col" class="resizeable">Status <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="pointer-cursor">
                                <td data-label="Order#">1</td>
                                <td data-label="Reference">200</td>
                                <td data-label="Date">27/05/2020</td>
                                <td data-label="Date">Pending</td>
                                <td data-label="Date">Processing</td>
                            </tr>
                            <tr class="pointer-cursor">
                                <td data-label="Order#">2</td>
                                <td data-label="Reference">1000</td>
                                <td data-label="Date">27/05/2020</td>
                                <td data-label="Date">Complete</td>
                                <td data-label="Date">Complete</td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-else class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                                    <!-- ---------Loader here-------- -->
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
export default {
    name: "Index",
    components: {SideBar,TopBar},
    data(){
        return {
            customers: [],
            dataReady: true,
        }
    },
}
</script>
