<template>

    <div class="content-wrapper pd-0">

        <div class="order-panel-content">

            <div class="row page-tilte align-items-center order-panel-header">
                <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">Shipping/Delivery </h1>
                </div> 
                <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block ">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <input type="search" class="form-control d-inline-block no-shadowed" placeholder="Search...">
                        <a v-if="selectedCustomer!==null" @click="setCustomer()" class="btn mb-2 circle btn-danger cl-white" title="Assign" ><span class="material-icons align-text-bottom cl-white">perm_identity</span> Assign Delivery</a>
                        <a v-else data-toggle="modal" data-target="#newCustomerModal" class="btn mb-2 circle btn-info cl-white" title="Add Customer" ><span class="material-icons align-text-bottom cl-white">perm_identity</span> Add</a>
                        <a @click="clientBackBtn()" class="btn mb-2 circle btn-secondary cl-white" title="Cancel" ><span class="material-icons align-text-bottom cl-white">arrow_back</span> Cancel</a>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="order-panel-border width-100-pc float-left"></div>
                <div class="row order-panel-body">
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100">
                            <div v-if="selectedCustomer" class="card-body">
                                <div class="mx-5 my-4 px-4">
                                    <img :src="BASE_URL+selectedCustomer.image" class="img-thumbnail img-fluid rounded-circle">
                                </div>
                                <div class="text-center">
                                <h5 class="weight-400">{{selectedCustomer.first_name+' '+selectedCustomer.last_name}}</h5>
                                <p class=" text-muted">{{selectedCustomer.city}}</p>
                                <button @click="setCustomer()" class="btn btn-danger px-4 circle mx-1 no-shadowed">Assign Delivery</button>
                                </div>
                                <hr class="my-4 dashed">
                                <p><span class="weight-400">Mobile : </span><span class="text-muted">{{selectedCustomer.mobile}}</span></p>
                                <p><span class="weight-400">Email Address : </span><span class="text-muted">{{selectedCustomer.email}}</span></p>
                                <p><span class="weight-400">Address : </span><span class="text-muted">{{selectedCustomer.address}}</span></p>
                            </div>
                            <div v-else class="card-body">
                                <div class="mx-5 my-4 px-4">
                                    <img :src="BASE_URL+'/assets/icons/dashboard/download.png'" class="img-thumbnail img-fluid rounded-circle">
                                </div>
                                <div class="text-center">
                                    <button data-toggle="modal" data-target="#newCustomerModal" :class="{'btn px-4 circle mx-1 cl-white btn-info no-shadowed':true}">Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <table class="table responsive-table table-bordered bg-white">
                                <thead class="thead-light2">
                                    <tr>
                                        <th scope="col" class="resizeable">Vehicle/Motorcycle/No.</th>
                                        <th scope="col" class="resizeable">Driver</th>
                                        <th scope="col" class="resizeable">Mobile</th>
                                    </tr>
                                </thead>
                                <tr>
                                    <td colspan="3" class="text-center cl-amref" data-label="Order#">No data to show!</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <driver-modal :modalId="'newCustomerModal'" :newCustomerEmitter="newCustomerEmitter" @customer-created-event="getCustomer(newCustomerEmitter)"/>
        </div>

    </div>
    
</template>
<script>
import DriverModal from "../../../Partials/Modals/Delivery/DriverModal";
export default {
    name: "SetDelivery",
    props: {
        active_order: {
            type: Object,
            default: null,
        },
        BASE_URL: {
            type: String,
            default: ""
        },
        customers: {
            type: Array,
            default: []
        },
        calledfrom: {
            type: String,
            default: null,
        }
    },
    data(){
        return {
            newCustomerEmitter: [],
            selectedCustomer: null,
        }
    },
    components: {DriverModal},
    methods: {
        clientBackBtn(){
            this.$emit('ship-cancel-event');
        },
        getCustomer(newCustomerEmitter){
            this.selectedCustomer = newCustomerEmitter[0];
            this.customers.unshift(this.selectedCustomer);
            this.newCustomerEmitter = [];
        },
        setCustomer(){
            this.active_order.customer = this.selectedCustomer;
            this.$emit('customer-cancel-event');
        },
        selectCustomer(selectedCustomer){
            this.selectedCustomer = selectedCustomer;
        }
    }
}
</script>
<style lang="scss" scoped>
tr.active td{
    background-color: #ccc!important;
    font-weight: 600!important;
}
</style>