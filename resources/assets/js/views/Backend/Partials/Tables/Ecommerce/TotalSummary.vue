<template>
    <div v-if="active_order" class="width-100-pc float-right">
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Total Items:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{formatMoney(active_order.items.length)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Discount:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(active_order.discount)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Sub Total:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(active_order.sub_total)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Tax:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(active_order.tax)}}</div>
        </div>
        <div class=" width-100-pc float-left">
            <div class=" width-25-pc float-left text-right padding-top-20 fs-16 fw-600">Total&nbsp;&nbsp;</div>
            <div class=" width-75-pc float-left text-right fs-20 cl-444 fw-600 padding-top-10 padding-bottom-10 padding-right-10">{{formatMoney(active_order.total_amount)}}</div>
        </div>
    </div>
    <div v-else class="width-100-pc float-right">
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Total Items:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{formatMoney(0)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Discount:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(0)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Sub Total:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(0)}}</div>
        </div>
        <div class=" width-100-pc float-left fs-12 mg-bottom-5">
            <div class=" width-40-pc float-left text-right">Tax:</div>
            <div class=" width-60-pc float-left text-right fw-600 padding-right-10">{{currency+' '+formatMoney(0)}}</div>
        </div>
        <div class=" width-100-pc float-left">
            <div class=" width-25-pc float-left text-right padding-top-20 fs-16 fw-600">Total&nbsp;&nbsp;</div>
            <div class=" width-75-pc float-left text-right fs-20 cl-444 fw-600 padding-top-10 padding-bottom-10 padding-right-10">{{formatMoney(0)}}</div>
        </div>
    </div>
</template>
<script>
import { formatMoney } from '../../../../../helpers/helpermethods';
export default {
    name: "TotalSummary",
    props: {
        currency: {
            type: String,
            default: 'Ksh'
        },
        active_order: {
            type: Object,
            default: null,
        }
    },
    methods: {
        formatMoney(money){
            return formatMoney(money);
        },
    }
}
</script>