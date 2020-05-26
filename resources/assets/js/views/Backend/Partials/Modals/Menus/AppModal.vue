<template>
    <div class="modal fade" :id="modal_id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header px-4">
              <h5 class="modal-title" id="exampleModalLabel">Select Application</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span class="material-icons ">close</span>
              </button>
            </div>
            <div class="modal-body p-4">
              
              <div class="row align-items-stretch app-switcher">
                <div class="col-lg-3 col-6 mb-4">
                    <a href="index.html" class="text-dark app-icon">
                        <div class="card h-100">
                        <div class="card-body text-center">
                            <span class="material-icons md-48 " style="color:#21C3E0;">bubble_chart</span>
                            <p class="weight-400 m-0">Dashboard</p>
                            <small class="weight-300 text-muted">Get a quick overview of your applications</small>
                        </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-6 mb-4">
                    <router-link :to="ECOMMERCE.DASHBOARD" class="text-dark app-icon">
                        <div class="card h-100">
                        <div class="card-body text-center">
                            <span class="material-icons md-48 text-primary">security</span>
                            <p class="weight-400 m-0">Ecommerce</p>
                            <small class="weight-300 text-muted">Get a quick overview of eCommerce</small>
                        </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-lg-3 col-6 mb-4">
                    <a href="mailbox.html" class="text-dark app-icon">
                        <div class="card h-100 active-app">
                        <div class="card-body text-center">
                            <span class="material-icons md-48 text-danger">blur_on</span>
                            <p class="weight-400 m-0">Point of Sale</p>
                            <small class="weight-300 text-muted">Get a quick overview of POS</small>
                            <span class="material-icons app-selected md-16">check</span>
                        </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-6 mb-4">
                    <a href="blogger-feed-list.html" class="text-dark app-icon">
                        <div class="card h-100">
                        <div class="card-body text-center">
                            <span class="material-icons md-48 text-warning">camera</span>
                            <p class="weight-400 m-0">Delivery</p>
                            <small class="weight-300 text-muted">Get a quick overview of Supply</small>
                        </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-6 mb-4">
                    <a href="blogger-feed-list.html" class="text-dark app-icon">
                        <div class="card h-100">
                        <div class="card-body text-center">
                            <span class="material-icons md-48 text-warning">settings</span>
                            <p class="weight-400 m-0">Settings</p>
                            <small class="weight-300 text-muted">Get a quick overview of Supply</small>
                        </div>
                        </div>
                    </a>
                </div>
                
              </div>

            </div>
            <!-- <div class="modal-footer px-4">
              <div class="custom-control custom-checkbox mr-auto">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Default open this application</label>
              </div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Switch Application</button>
            </div> -->
          </div>
        </div>
    </div>
</template>
<script>
import {ECOMMERCE} from "../../../../../router/web";
export default {
    name: "AppModal",
    props: ['modal_id'],
    data(){
        return {
            ECOMMERCE: ECOMMERCE,
        }
    }
}
</script>