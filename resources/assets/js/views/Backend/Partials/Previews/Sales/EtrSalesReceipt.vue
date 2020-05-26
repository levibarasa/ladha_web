<template>
    <div v-if="paidOrder" class="pos-receipt-container fs-13">
        <div v-if="paymentReceipt" class="pos-receipt" id="pos_receipt_print">
            <img v-if="c_logo" class="pos-receipt-logo" :src="BASE_URL+c_logo">
            <img v-else class="pos-receipt-logo" :src="BASE_URL+'/sr-logo.png'">
            <div class="pos-receipt-contact fs-13">
                <div>{{branch_name}}</div>
                <div>P.O BOX {{postal_code}} {{city}}</div>
                <div>TEL: {{telephohe}}</div>
                <div>VAT #: {{paymentReceipt.trans_number}}</div>
                <div>PIN: {{vat_pin}}</div>
                <div class="barcode mg-top-10"><img class="pos-receipt-logo" :src="BASE_URL+'/assets/icons/dashboard/barcode.png'"></div>
                <div>{{paymentReceipt.trans_number}}</div>
                <div class="fs-12 fw-600 text-uppercase mg-top-10">Sales Receipt</div>
                <div class="text-left">Transaction No: {{paymentReceipt.trans_number+' '+paymentReceipt.trans_date+' '+paymentReceipt.trans_time}}</div>
                <div class="text-left">Receipt No: {{paymentReceipt.reference_number}}</div>
                <div class="text-left">Served By: {{paymentReceipt.cashier.first_name}}</div>
            </div>
            <br>
            <div class="orderlines">

                <div class="item-header width-100-pc float-left item-header mg-bottom-10 fs-13">
                    <div class="width-25-pc float-left">Item</div>
                    <div class="width-25-pc float-left text-right">Qty</div>
                    <div class="width-25-pc float-left text-right">Price</div>
                    <div class="width-25-pc float-left text-right">Amount</div>
                </div>

                <div v-for="(item,index) in paymentReceipt.items" :key="'paidOrder'+index" class=" width-100-pc float-left mg-bottom-5 fs-13">
                    <div class=" width-50-pc float-left">{{item.sku_code}}</div>
                    <div class=" width-50-pc float-left text-right">{{item.qty}} X {{formatMoneys(item.price)}}</div>
                    <div class=" width-100-pc float-left">
                        <div class=" width-80-pc float-left">{{item.brand_sector}} {{item.unit_weight+''+item.uom}}</div>
                        <div class=" width-20-pc float-left text-right">{{formatMoneys(item.extprice)}}</div>
                    </div>
                </div>

                <!-- <div class=" width-100-pc float-left">
                    <div class=" width-50-pc float-left">COGR321</div>
                    <div class=" width-50-pc float-left text-right">1 x 120.00</div>
                    <div class=" width-100-pc float-left">
                        <div class=" width-70-pc float-left">Kimbo Premium Oil Blend - 2L</div>
                        <div class=" width-30-pc float-left text-right">600.00</div>
                    </div>
                </div>

                <div class=" width-100-pc float-left mg-top-5">
                    <div class=" width-50-pc float-left">COGR321</div>
                    <div class=" width-50-pc float-left text-right">1 x 120.00</div>
                    <div class=" width-100-pc float-left">
                        <div class=" width-70-pc float-left">Kimbo Premium Oil Blend - 2L</div>
                        <div class=" width-30-pc float-left text-right">600.00</div>
                    </div>
                </div> -->

                <div class=" width-100-pc float-left mg-top-5 sub-total fs-13">
                    <div class=" width-50-pc float-left">Sub Total</div>
                    <div class=" width-50-pc float-left text-right">{{formatMoneys(paymentReceipt.sub_total)}}</div>
                </div>
                <div class=" width-100-pc float-left mg-top-5 sub-total fs-13">
                    <div class=" width-50-pc float-left">Total</div>
                    <div class=" width-50-pc float-left text-right">{{currency+' '+formatMoneys(paymentReceipt.total_amount)}}</div>
                </div>
                <div class=" width-100-pc float-left mg-top-5 sub-total">
                    <div class=" width-50-pc float-left">Total Items: &nbsp;&nbsp;{{paymentReceipt.items.length}}</div>
                    <div class="width-100-pc float-left mg-bottom-10">
                        <div class="width-15-pc float-left">Code</div>
                        <div class="width-15-pc float-left text-right">Rate</div>
                        <div class="width-35-pc float-left text-right">Vatable Amt</div>
                        <div class="width-35-pc float-left text-right">Vat Amt</div>
                    </div>
                    <div class="width-100-pc float-left mg-bottom-10 fs-13">
                        <div class="width-15-pc float-left">A</div>
                        <div class="width-15-pc float-left text-right">16%</div>
                        <div class="width-35-pc float-left text-right">{{paymentReceipt.total_amount}}</div>
                        <div class="width-35-pc float-left text-right">{{paymentReceipt.tax}}</div>
                    </div>
                </div>
                <div class=" width-100-pc float-left mg-top-5 sub-total fs-13">
                    <div class=" width-100-pc float-left">Cash Tendered: &nbsp;&nbsp;{{paymentReceipt.cash_tendered}}</div>
                    <div class=" width-100-pc float-left">Discount: &nbsp;&nbsp;{{paymentReceipt.discount}}</div>
                    <div class=" width-100-pc float-left">Change: &nbsp;&nbsp;{{paymentReceipt.cash_change}}</div>
                    <div class=" width-100-pc float-left">Price Inclusive of Tax where applicable</div>
                </div>
            </div>

            <br>
            <div class="pos-receipt-contact mg-top-20"></div>
            <div class="pos-receipt-order-data text-left fs-13">
                <div class="txt-uppercase">******{{paymentReceipt.payments[0].payment_method.type+' '+paymentReceipt.payments[0].trans_date+' '+paymentReceipt.payments[0].trans_time }}*****</div>
                <div>Register No: {{paymentReceipt.payments[0].trans_number}}</div>
                <div>Datetime: {{paymentReceipt.payments[0].trans_date}} {{paymentReceipt.payments[0].trans_time}}</div>
                <div>Mobile: {{paymentReceipt.payments[0].mobile}}</div>
                <div>Code: {{paymentReceipt.payments[0].code}}</div>
                <div>Order: {{paidOrder.trans_number}} {{paidOrder.trans_date}}, {{paidOrder.trans_time}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import Auth from "../../../../../store/auth";
import { formatMoney } from '../../../../../helpers/helpermethods';
import {BASE_URL} from "../../../../../router/api";
export default {
    name: "EtrSalesReceipt",
    props: {
        paidOrder: {
            type: Object,
            default: null,
        },
        paymentReceipt: {
            type: Object,
            default: null,
        },
        currency: {
            type: String,
            default: "KES"
        }
    },
    data(){
        return {
            c_logo: Auth.getCompanyLogo(),
            vat_pin: Auth.getCompanyTaxPin(),
            city: Auth.getBranchCity(),
            postal_code: Auth.getBranchPostalCode(),
            branch_name: Auth.getBranchName(),
            telephohe: Auth.getBranchPhone(),
            BASE_URL: BASE_URL,
        }
    },
    methods: {
        formatMoneys(money){
            return formatMoney(money);
        }
    }
}
</script>
<style scoped>
    .pos-receipt-container {
        font-size: 0.75em;
        text-align: center;
        direction: ltr;
        font-size: 12px;
        /* font-family:'Noto Sans', Arial,sans-serif!important; */
        /* font-family: Times, "Times New Roman", serif; */
        /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
    }
    .pos-receipt-container > div {
        text-align: left;
        width: 340px;
        background-color: white;
        margin: 20px;
        padding: 15px;
        /* font-size: 16px; */
        font-size: 13px;
        padding-bottom: 30px;
        display: inline-block;
        border: solid 1px rgb(220,220,220);
        border-radius: 3px;
        overflow: hidden;
    }
    .pos-receipt .pos-receipt-logo {
        width: 30%;
        display: block;
        margin: 0 auto;
    }
    .pos-receipt .pos-receipt-contact {
        text-align: center;
        font-size: 75%;
    }
    .pos-receipt .pos-receipt-contact {
        text-align: center;
        font-size: 75%;
    }
    .pos-receipt .pos-receipt-amount {
        font-size: 125%;
        padding-left: 6em;
    }
    .pos-receipt .pos-receipt-right-align {
        float: right;
    }
    .pos-receipt .pos-receipt-amount {
        font-size: 125%;
        padding-left: 6em;
    }
    .pos-receipt .pos-receipt-order-data {
        text-align: center;
        font-size: 75%;
    }

    .served-by{
        border-top: 1px #444 dashed;
    }
    .barcode img{
        height: 30px;
        width: 100px;
    }
    .item-header{
        border-top: 1px solid #444;
        border-bottom: 1px solid #444;
        text-transform: uppercase;
        font-size: 13px;
        padding: 3px 0 5px 0;
    }
    .sub-total{
        border-bottom: 1px #444 dashed;
        font-size: 14px!important;
        font-weight: 600!important;
    }
</style>