<template>
    <div v-if="customer" class="width-70-pc float-right text-right customer-info">
        <div class="width-30-pc float-right">
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">A/R Balance:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(customer.balance)}}</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">A/R Limit:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(customer.credit_limit)}}</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">Point Balance:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(customer.store_credit)}}</div>
            </div>
        </div>
        <div class="width-50-pc float-right">
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Customer:</div>
                <div class="width-60-pc float-right text-left fw-600">
                    <span v-if="!customer" class="txt-uppercase">&nbsp;&nbsp;**Thank You**</span>
                    <span v-else>&nbsp;&nbsp;{{customer.first_name+' - '+customer.mobile}}</span>
                </div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Type:</div>
                <div class="width-60-pc float-right fw-600 text-left">&nbsp;&nbsp;{{customer.type}}</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Store Credit:</div>
                <div class="width-60-pc float-right fw-600 text-left">&nbsp;&nbsp;{{formatMoney(customer.store_credit)}}</div>
            </div>
        </div>
    </div>
    <div v-else class="width-70-pc float-right text-right customer-info">
        <div class="width-30-pc float-right">
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">A/R Balance:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(0)}}</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">A/R Limit:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(0)}}</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-50-pc float-left text-right customer-label">Point Balance:</div>
                <div class="width-50-pc float-right text-right padding-right-10 fw-600">{{formatMoney(0)}}</div>
            </div>
        </div>
        <div class="width-50-pc float-right">
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Customer:</div>
                <div class="width-60-pc float-right text-left fw-600">
                    <span class="txt-uppercase">&nbsp;&nbsp;**Thank You**</span>
                </div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Type:</div>
                <div class="width-60-pc float-right fw-600 text-left">&nbsp;&nbsp;Regular</div>
            </div>
            <div class="width-100-pc float-right">
                <div class="width-40-pc float-left text-right customer-label">Store Credit:</div>
                <div class="width-60-pc float-right fw-600 text-left">&nbsp;&nbsp;{{formatMoney(0)}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatMoney } from '../../../../../helpers/helpermethods'
export default {
    name: "OrderCustomer",
    props: {
        customer: {
            type: Object,
            default: null,
        }
    },
    methods: {
        formatMoney(money){
            return formatMoney(money)
        }
    }
}
</script>
<style scoped>
.customer-info{
    padding-top: 5px;
    font-size: 12px!important;
}
.customer-info .customer-label{
    color: #8e8989;
}
.customer-info img{
    border-radius: 50%;
    width: 110px;
    height: 110px;
    border: dotted #ccc 1px;
}
</style>