<template>
    <table class="table mb-4 responsive-table table-bordered bg-white">
        <thead class="thead-light2">
            <tr>
                <th scope="col" class="resizeable">Order# <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                <th scope="col" class="resizeable">Reference</th>
                <th scope="col" class="resizeable">Date <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                <th scope="col" class="resizeable">Total({{currency}}) <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                <th scope="col" class="resizeable">Customer <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                <th scope="col" class="resizeable">Status</th>
            </tr>
        </thead>
        <tbody>
            <router-link tag="tr" v-for="(order,index) in orders" :to="ORDERS_URL+'/'+order.id+'?todo=Details'" :key="'orders_'+index" class="pointer-cursor">
                <td data-label="Order#">{{order.trans_number}}</td>
                <td data-label="Reference">{{order.reference_number}}</td>
                <td data-label="Date">{{order.trans_date}}</td>
                <td :data-label="'Total('+currency+')'">{{formatMoney(order.total_amount)}}</td>
                <td data-label="Customer"><span v-if="order.customer">{{order.customer.first_name}}</span></td>
                <td data-label="Status">
                    <order-status :orderStatus="order.status" :key="'OrderStatus_'+index"/>
                </td>
            </router-link>
        </tbody>
    </table>
</template>
<script>
import {formatMoney} from "../../../../../helpers/helpermethods";
import OrderStatus from "../../Badges/Ecommerce/OrderStatus";
export default {
    name: "OrdersTable",
    props: {
        orders: {
            type: Array,
            default: [],
        },
        currency: {
            type: String,
            default: "Ksh"
        },
        ORDERS_URL: {
            type: String,
            default: "",
        },
    },
    components: {OrderStatus},
    methods: {
        formatMoney(money,decimalCount=2){
            return formatMoney(money,decimalCount);
        }
    }
}
</script>