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
                    <h1 class="weight-300 h3 title">Dashboard </h1>
                    <p class="text-muted m-0 desc">Dashboard</p>
                  </div> 
                  <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block ">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <input type="search" class="form-control d-inline-block" placeholder="Search here...">
                        
                    </div>
                  </div>
                </div>

                <div class="content">
                    <!-- ----- -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import SideBar from "./Partials/SideBar";
import TopBar from "./Partials/TopBar";
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
