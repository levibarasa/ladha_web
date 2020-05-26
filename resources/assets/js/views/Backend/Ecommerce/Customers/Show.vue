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
                    <p class="text-muted m-0 desc">Customer Details</p>
                  </div> 
                  <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block ">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <router-link :to="ECOMMERCE.CUSTOMERS" class="btn btn-secondary py-1 px-2" title="Cancel" ><span class="material-icons align-text-bottom">arrow_back</span></router-link>
                    </div>
                  </div>
                </div>

                <div class="content">
                      <div v-if="dataReady" class="row">
                          <div class="col-lg-4 mb-4">
                              <div class="card h-100">
                                  <div class="card-body">
                                      <div class="mx-5 my-4 px-4">
                                          <img v-if="customer.image" :src="BASE_URL+customer.image" class="img-thumbnail img-fluid rounded-circle">
                                          <img v-else :src="BASE_URL+'/assets/icons/dashboard/staff1.png'" class="img-thumbnail img-fluid rounded-circle">
                                      </div>
                                      <div class="text-center">
                                        <h5 class="weight-400">{{customer.first_name+' '+customer.last_name}}</h5>
                                        <p class=" text-muted">{{customer.city}}</p>
                                        <button class="btn btn-info px-4 rounded mx-1">Edit</button>
                                        <button class="btn btn-danger px-4 rounded mx-1">Delete</button>
                                      </div>
                                      <hr class="my-4 dashed">
                                      <p><span class="weight-400">Mobile : </span><span class="text-muted">{{customer.mobile}}</span></p>
                                      <p><span class="weight-400">Email Address : </span><span class="text-muted">{{customer.email}}</span></p>
                                      <p><span class="weight-400">Address : </span><span class="text-muted">{{customer.address}}</span></p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-8">
                              <div class="card mb-4">
                                <div class="card-header p-0">
                                  <ul class="nav nav-tabs active-thik nav-primary border-0" id="myTab" role="tablist">
                                    
                                    <li class="nav-item">
                                      <a class="nav-link px-4 py-3 active rounded-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Orders</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link px-4 py-3 rounded-0" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="true">Payments</a>
                                    </li>
                                    <li class="nav-item">
                                      <a class="nav-link px-4 py-3 rounded-0" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="true">Messages</a>
                                    </li>

                                    <li class="nav-item">
                                      <a class="nav-link px-4 py-3 rounded-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">History</a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="myTabContent">

                                      <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                          <!-- <orders-table :ORDERS_URL="ECOMMERCE.ORDERS" :orders="customer.orders"/> -->
                                          <table class="table mb-4 responsive-table table-bordered bg-white">
                                            <thead class="thead-light2">
                                                <tr>
                                                    <th scope="col" class="resizeable">Order#</th>
                                                    <th scope="col" class="resizeable">Reference</th>
                                                    <th scope="col" class="resizeable">Date</th>
                                                    <th scope="col" class="resizeable">Total({{currency}})</th>
                                                    <th scope="col" class="resizeable">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(order,index) in customer.orders.data" :key="'orders_'+index" class="pointer-cursor">
                                                    <td data-label="Order#">{{order.trans_number}}</td>
                                                    <td data-label="Reference">{{order.reference_number}}</td>
                                                    <td data-label="Date">{{order.trans_date}}</td>
                                                    <td :data-label="'Total('+currency+')'">{{formatMoney(order.total_amount)}}</td>
                                                    <td data-label="Status">
                                                      <order-status :orderStatus="order.status" :key="'OrderStatus_'+index"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                      </div>
                                      
                                      <div class="tab-pane fade " id="messages" role="tabpanel" aria-labelledby="messages-tab">
                                        <ul class="messgaes mb-4">

                                              <li class="media">
                                                <div class="mr-4"><img src="assets/images/avtar4.png" class="user-thumb"></div>
                                                <div class="media-body messgae-bubble bg-warning-light25 ">
                                                  <h6 class="mt-0 weight-400">kevin Dossey</h6>
                                                  <small class="text-muted weight-300"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</small>
                                                </div>
                                              </li>
                                              <li class="media flex-row-reverse">
                                                <div class="ml-4"><img src="assets/images/avtar3.png" class="user-thumb"></div>
                                                <div class="media-body from-you messgae-bubble bg-light ">
                                                  <h6 class="mt-0 weight-400">kevin Dossey</h6>
                                                  <small class="text-muted weight-300">Fusce condimentum nunc ac nisi vulputate fringilla.</small>
                                                </div>
                                              </li>

                                              <li class="media">
                                                <div class="mr-4"><img src="assets/images/avtar1.png" class="user-thumb"></div>
                                                <div class="media-body messgae-bubble bg-warning-light25 ">
                                                  <h6 class="mt-0 weight-400">kevin Dossey</h6>
                                                  <small class="text-muted weight-300"> Sure. and Thanks !</small>
                                                </div>
                                              </li>
                                              <li class="media">
                                                <div class="mr-4"><img src="assets/images/avtar4.png" class="user-thumb"></div>
                                                <div class="media-body messgae-bubble bg-warning-light25 ">
                                                  <h6 class="mt-0 weight-400">kevin Dossey</h6>
                                                  <small class="text-muted weight-300"> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</small>
                                                </div>
                                              </li>
                                              <li class="media flex-row-reverse">
                                                <div class="ml-4"><img src="assets/images/avtar3.png" class="user-thumb"></div>
                                                <div class="media-body from-you messgae-bubble bg-light ">
                                                  <h6 class="mt-0 weight-400">kevin Dossey</h6>
                                                  <small class="text-muted weight-300">Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</small>
                                                </div>
                                              </li>
                                          </ul>
                                          <div class="media">
                                            <div class="media-body">
                                              <input type="text" class="form-control" placeholder="Type Message here...">
                                            </div>
                                          </div>
                                      </div>
                                      <div class="tab-pane fade " id="photos" role="tabpanel" aria-labelledby="photos-tab">
                                        
                                            <div class="row flex-lg-column" style="max-height: 1530px;">
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/500?image=1" data-gallery="example-gallery" data-toggle="lightbox" >
                                                  <img src="https://picsum.photos/700/500?image=1" class="img-thumbnail bg-white img-fluid mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=2" data-gallery="example-gallery" data-toggle="lightbox" >
                                                  <img src="https://picsum.photos/700/900?image=2" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  data-toggle="lightbox" >
                                                  <img src="https://picsum.photos/700/1024?image=4" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/600?image=19" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/600?image=19" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=18" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/550?image=18" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/950?image=11" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=7" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/400?image=7" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/600?image=22" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=6" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/1024?image=6" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=13" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/800?image=13" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=17" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/600?image=17" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/450?image=5" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/900?image=14" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/800?image=27" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/600?image=3" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              <div class="col-md-6 col-lg-4">
                                                <a href="https://picsum.photos/700/900?image=6" data-gallery="example-gallery" data-toggle="lightbox" >
                                                <img src="https://picsum.photos/700/700?image=6" class="img-thumbnail img-fluid bg-white mb-4">
                                                </a>
                                              </div>
                                              
                                          </div>

                                      </div>
                                      <div class="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                          <p class="mb-4">Nulla mattis pharetra enim, at sodales augue facilisis et. Maecenas vehicula vehicula est sed elementum. Sed sed mi vitae mi molestie commodo. Phasellus in leo ut leo ultricies mattis sit amet sed arcu. Vivamus vehicula dignissim lorem sit amet vulputate. Aenean in elit odio. Aliquam erat volutpat. </p>

                                          <div class="form-row">
                                            <div class="col-md-6 mb-3">
                                              <label for="validationCustom01">First name</label>
                                              <input type="text" class="form-control" id="validationCustom01" placeholder="First name">
                                            </div>
                                            <div class="col-md-6 mb-3">
                                              <label for="validationCustom02">Last name</label>
                                              <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" >
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Message</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                          </div>

                                          <button class="btn btn-success text-white mt-4">Send Message</button>


                                      </div>
                                    </div>

                                </div>
                            </div>

                          </div>
                      </div>
                      <div v-else class="card mb-4">
                        <div class="card-body  p-lg-4">
                            <div class="row justify-content-center">
                                <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
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
import SideBar from "../../Partials/Sidebars/SideBar";
import TopBar from "../../Partials/Topbars/TopBar";
import OrderStatus from "../../Partials/Badges/Ecommerce/OrderStatus";
import {paginator, formatMoney} from "../../../../helpers/helpermethods";
import {SHOP_POS_CUSTOMERS,BASE_URL} from "../../../../router/api";
import {ECOMMERCE} from "../../../../router/web";
import {get} from "../../../../helpers/api";
import DataLoading from "../../Partials/Progress/DataLoading";
export default {
    name: "Show",
    components: {SideBar,TopBar,DataLoading,OrderStatus},
    data(){
        return {
            customer: null,
            dataReady: false,
            BASE_URL: BASE_URL,
            ECOMMERCE: ECOMMERCE,
            currency: "KES",
        }
    },
    created(){
        this.showCustomer(this.$route.params.uuid);
    },
    methods: {
      formatMoney(money){
        return formatMoney(money);
      },
      showCustomer(customerId){
        get(SHOP_POS_CUSTOMERS+'/'+customerId)
        .then((res) => {
            if(res.data.status_code === 200) {
                this.customer = res.data.results;
                this.dataReady = true;
                console.info(this.customer);
            }
        }).catch((err) => {
            this.dataReady = true;
        });
    },
    }
}
</script>
