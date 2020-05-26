<template>
    <div class="row">
        <div class="col-md-6 col-lg-3  mb-4 mb-lg-0">
            <div class="media align-items-center">
                <span class="material-icons text-info mr-4 circle p-3 border border-info bg-info-light25">shopping_cart</span>
                <div class="media-body">
                    <h4 class="weight-400 m-0">{{moneyFormater(totals.ordersTotal,0)}}</h4>
                    <small class="text-muted">Order Recevied</small>
                </div>
            </div>
            <div class="progress mt-3" style="height: 6px;">
            <div class="progress-bar bg-info" role="progressbar" :title="totals.ordersPercent+'%'" :style="{width: totals.ordersPercent+'%'}" :aria-valuenow="totals.ordersPercent" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div class="col-md-6 col-lg-3  mb-4 mb-lg-0">
            <div class="media align-items-center">
                <span class="material-icons text-danger mr-3 circle p-3 border border-danger bg-danger-light25">monetization_on</span>
                <div class="media-body">
                    <h4 class="weight-400 m-0">{{currency}}{{moneyFormater(totals.salesTotal)}}</h4>
                    <small class="text-muted">Total Earnings</small>
                </div>
            </div>
            <div class="progress mt-3" style="height: 6px;">
            <div class="progress-bar bg-danger" role="progressbar" :style="{width: totals.salesPercent+'%'}" :aria-valuenow="totals.salesPercent" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3  mb-4 mb-md-0 ">
            <div class="media align-items-center">
                <span class="material-icons text-success mr-3 circle p-3 border border-success bg-success-light25">person_add</span>
                <div class="media-body">
                    <h4 class="weight-400 m-0">{{moneyFormater(totals.totalNewCustomer,0)}}</h4>
                    <small class="text-muted">New Customers</small>
                </div>
            </div>
            <div class="progress mt-3" style="height: 6px;">
            <div class="progress-bar bg-success" role="progressbar" :style="{width: totals.totalNewCustomerPercent+'%'}" :aria-valuenow="totals.totalNewCustomerPercent" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

        <div class="col-md-6 col-lg-3 mb-4 mb-md-0">
            <div class="media align-items-center">
                <span class="material-icons text-warning mr-3 circle p-3 border border-warning bg-warning-light25">group</span>
                <div class="media-body">
                    <h4 class="weight-400 m-0">{{moneyFormater(totals.totalChurnedUser,0)}}</h4>
                    <small class="text-muted">Churned Users</small>
                </div>
            </div>
            <div class="progress mt-3" style="height: 6px;">
            <div class="progress-bar bg-warning" role="progressbar" :style="{width: totals.totalChurnedUserPercent+'%'}" :aria-valuenow="totals.totalChurnedUserPercent" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

    </div>
</template>
<script>
import {formatMoney} from "../../../../../helpers/helpermethods";
export default {
    name: "EcoTotals",
    // props: ['totals','currency'],
    props: {
        currency: {
            type: String,
            default: 'Kes'
        },
        totals: {
            type: Object,
            default: {}
        }
    },
    methods: {
        moneyFormater(money,decimalCount=2){
            return formatMoney(money,decimalCount);
        }
    }
}
</script>