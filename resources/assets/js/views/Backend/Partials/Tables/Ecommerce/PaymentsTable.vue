<template>
    <div>
        <table class="table mb-4 responsive-table table-bordered bg-white">
            <thead class="thead-light2">
                <tr>
                    <th scope="col" class="resizeable">Date <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Ref <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Payment Method</th>
                    <th scope="col" class="resizeable">Order <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Total Amount({{currency}}) <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(payment,index) in payments" @click="showPaidOrder(payment.order.id)" data-toggle="modal" data-target="#slideRightModal" :key="'payments_'+index"  class="pointer-cursor">
                    <td data-label="Date:">{{payment.trans_date}}</td>
                    <td data-label="Ref:">{{payment.trans_number}}</td>
                    <td data-label="Method:">{{payment.payment_method.name}}</td>
                    <td data-label="Order:">{{payment.order.trans_number}}</td>
                    <td :data-label="'Amount('+currency+'):'">{{formatMoney(payment.amount_due)}}</td>
                </tr>
            </tbody>
        </table>
        <etr-receipt-modal :orderId="orderId" :modalId="'slideRightModal'"/>
    </div>
</template>
<script>
import {formatMoney} from "../../../../../helpers/helpermethods";
import EtrReceiptModal from "../../Modals/EtrReceiptModal";
import { get } from '../../../../../helpers/api';
export default {
    name: "PaymentsTable",
    props: {
        payments: {
            type: Array,
            default: [],
        },
        currency: {
            type: String,
            default: "Ksh"
        }
    },
    components:{EtrReceiptModal},
    data(){
        return {
            orderId: null,
        }
    },
    methods: {
        showPaidOrder(orderId){
            this.orderId = orderId;
        },
        formatMoney(money,decimalCount=2){
            return formatMoney(money,decimalCount);
        }
    }
}
</script>