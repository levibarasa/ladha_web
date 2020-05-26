<template>

    <div class="content-wrapper pd-0 pos">

        <div class="order-panel-content">

            <div class="row page-tilte align-items-center order-panel-header">
                <div class="col-md-auto">
                    <a href="#" class="mt-3 d-md-none float-right toggle-controls"><span class="material-icons">keyboard_arrow_down</span></a>
                    <h1 class="weight-300 h3 title">Payment </h1>
                </div> 
                <div class="col controls-wrapper mt-3 mt-md-0 d-none d-md-block">
                    <div class="controls d-flex justify-content-center justify-content-md-end">
                        <a @click="backBtn()" class="btn mb-2 circle btn-secondary cl-white" title="Cancel" ><span class="material-icons align-text-bottom cl-white">arrow_back</span> Cancel</a>
                        <a v-if="full_payment_done" @click="setCustomer()" class="btn mb-2 circle btn-danger cl-white" title="Set Customer" ><span class="material-icons align-text-bottom cl-white">check</span> Validate</a>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="order-panel-border width-100-pc float-left"></div>
                <div class="row">
                    <div class="col-lg-4 order-panel-payment">
                        <div v-for="(paymentMethod,index) in paymentMethods" :key="'paymentMethods_'+index" @click="setPay('METHOD',paymentMethod,index)" class="card pay-card">
                            <div class="card-body">
                                <div class="text-center">
                                    <h1 class="">{{paymentMethod.name}}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="width-100-pc float-left">
                            <section v-if="active_order.payments.length" class="paymentlines-container">
                                <table class="paymentlines">
                                    <colgroup>
                                        <col class="due">
                                        <col class="tendered">
                                        <col class="change">
                                        <col class="method">
                                        <col class="controls">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>Due</th>
                                            <th>Tendered</th>
                                            <th>Change</th>
                                            <th>Method</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(payment,index) in active_order.payments" :key="'payments_'+index" :class="{'paymentline pointer-cursor':true,'selected':active_pay===index}">
                                            <td @click="setPay('Activate Pay Item',payment,index)" class="col-due"> {{formatMoney(payment.amount_due)}}</td>
                                            <td @click="setPay('Activate Pay Item',payment,index)" class="col-tendered edit">
                                                {{formatMoney(payment.cash_tendered)}}
                                            </td>
                                            <td @click="setPay('Activate Pay Item',payment,index)" class="col-change">{{formatMoney(payment.cash_change)}}</td>
                                            <td @click="setPay('Activate Pay Item',payment,index)" class="col-name"> {{payment.payment_method.name}} </td>
                                            <td class="delete-button" @click="setPay('Remove Pay Item',payment,index)" data-cid="c64" aria-label="Delete" title="Delete">
                                                <i class="fa fa-times-circle"></i>
                                            </td>
                                        </tr>
                                        <tr v-if="order_due_pay>0" class="paymentline extra">
                                            <td class="col-due"> {{formatMoney(order_due_pay)}} </td>
                                        </tr>
                                        <tr v-if="order_change_amount>0" class="paymentline">
                                            <td colspan="2"></td>
                                            <td class="col-due cl-amref"> {{formatMoney(order_change_amount)}} </td>
                                            <td colspan="2"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                            <section v-else class="paymentlines-container">
                                <div class="paymentlines-empty">
                                    <div class="total">
                                        {{currency}} {{formatMoney(active_order.total_amount)}}
                                    </div>
                                    <div class="message fs-12">
                                        Please select a payment method.
                                    </div>
                                </div>
                            </section>
                        </div>
                        
                        <div class="width-100-pc float-left">
                            <div class="width-50-pc float-left padding-left-15 padding-right-5">
                                <section class="payment-numpad padding-top-15">
                                    <div class="numpad">
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',1)" class="input-button number-char" data-action="1">1</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',2)" class="input-button number-char" data-action="2">2</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',3)" class="input-button number-char" data-action="3">3</button>
                                        <button type="button" @click="keyPadEvents($event,'ADD TEN',10)" class="mode-button" data-action="+10">+10</button>
                                        <br>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',4)" class="input-button number-char" data-action="4">4</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',5)" class="input-button number-char" data-action="5">5</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',6)" class="input-button number-char" data-action="6">6</button>
                                        <button type="button" @click="keyPadEvents($event,'ADD TWENTY',20)" class="mode-button" data-action="+20">+20</button>
                                        <br>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',7)" class="input-button number-char" data-action="7">7</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',8)" class="input-button number-char" data-action="8">8</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',9)" class="input-button number-char" data-action="9">9</button>
                                        <button type="button" @click="keyPadEvents($event,'ADD FIFITY',50)" class="mode-button" data-action="+50">+50</button>
                                        <br>
                                        <button type="button" @click="keyPadEvents($event,'CLEAR',1)" class="input-button numpad-char" data-action="-">+/-</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN',0)" class="input-button number-char" data-action="0">0</button>
                                        <button type="button" @click="keyPadEvents($event,'PAD BTN','.')" class="input-button number-char" data-action=".">.</button>
                                        <button type="button" @click="keyPadEvents($event,'BACKSPACE',0)" class="input-button numpad-backspace" data-action="BACKSPACE">
                                            <img :src="BASE_URL+'/assets/icons/dashboard/backspace.png'" width="24" height="21" alt="Backspace">
                                        </button>
                                    </div>
                                </section>
                            </div>

                            <div class="width-50-pc float-right padding-right-10 padding-left-5">
                                <div class="payment-buttons">
                                    <div v-if="active_order.customer" @click="goCustomer(true)" class="button js_set_customer highlight2 fs-12">
                                        <i class="fa fa-user" role="img" aria-label="Customer" title="Customer"></i>
                                        <span class="js_customer_name">{{active_order.customer.first_name+'-'+active_order.customer.mobile}}</span>
                                    </div>
                                    <div v-else @click="goCustomer(true)" class="button js_set_customer fs-12">
                                        <i class="fa fa-user" role="img" aria-label="Customer" title="Customer"></i>
                                        <span class="js_customer_name">Customer</span>
                                    </div>
                                    <div @click="setPay('EMAIL','','')" :class="{'button js_email fs-12':true,'highlight2':email_notification}">
                                        <i class="fa fa-inbox"></i> Email
                                    </div>
                                    <div @click="setPay('SMS','','')" :class="{'button js_email fs-12':true,'highlight2':sms_notification}">
                                        <i class="fa fa-comment-o"></i> SMS
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
</template>
<script>
import { formatMoney,removeElement } from '../../../../../helpers/helpermethods';
export default {
    name: "SetPay",
    props: {
        active_order: {
            type: Object,
            default: null,
        },
        BASE_URL: {
            type: String,
            default: ""
        },
        paymentMethods: {
            type: Array,
            default: []
        },
        calledfrom: {
            type: String,
            default: null,
        },
        currency: {
            type: String,
            default: "Ksh",
        }
    },
    data(){
        return {
            active_pay: 0,
            order_due_pay: 0,
            order_change_amount: 0,
            email_notification: false,
            sms_notification: false,
            full_payment_done: false,
            saving_order: false,
        }
    },
    methods: {
        formatMoney(money){
            return formatMoney(money);
        },
        calculatorMethod(){

            let total_tendered = 0;
            let order_total = parseInt(this.active_order.total_amount);
            let last_index = this.active_order.payments.length - 1;
            for (let r = 0; r < this.active_order.payments.length; r++) {

                const payment = this.active_order.payments[r];
                let line_tendered = parseInt(payment.cash_tendered);
                total_tendered += parseInt(line_tendered);
                if( r < last_index){
                    let next_r = parseInt(r) + 1;
                    this.active_order.payments[next_r].amount_due = parseInt(order_total) - parseInt(total_tendered);
                }
            }

            this.order_due_pay = parseInt(order_total) - parseInt(total_tendered);
            if( total_tendered >= order_total ){
                this.full_payment_done = true;
                this.order_change_amount = parseInt(total_tendered) - parseInt(order_total);
            }else{
                this.full_payment_done = false;
            }

        },
        backBtn(){
            this.active_order.payments = [];
            this.$emit('payment-cancel-event');
        },
        setPay(set_type,payment_element,global_index){
            switch (set_type) {
                case "EMAIL":
                    if(this.email_notification){
                        this.email_notification = false;
                    }else{
                        this.email_notification = true;
                    }
                    return;
                    break;
                case "SMS":
                    if(this.sms_notification){
                        this.sms_notification = false
                    }else{
                        this.sms_notification = true
                    }
                    break;
                case "METHOD":
                    let payment = {
                        id: null,
                        amount_due: parseInt(this.active_order.total_amount),
                        cash_tendered: 0,
                        cash_change: 0,
                        payment_method: {
                            id: payment_element.id,
                            name: payment_element.name,
                            type: payment_element.type,
                            trans_number: 'SWQ3213308',
                            trans_date: '13/04/2020',
                            trans_time: '12:00 PM',
                            code: 'SWQ3213308',
                            mobile: '254702294148',
                        }
                    }
                    this.active_order.payments.push(payment);
                    this.active_pay = this.active_order.payments.length-1;
                    break;
                case "Activate Pay Item":
                    this.active_pay = global_index;
                    break;
                case "Remove Pay Item":
                    let index_to_removed = this.active_pay;
                    let array_length = this.active_order.payments.length;
                    let old_last_element = array_length - 1;
                    if(array_length > 1){
                        this.active_order.payments = removeElement(this.active_order.payments,this.active_order.payments[this.active_pay] );
                        let new_last_index = this.active_order.payments.length - 1;
                        if(new_last_index >= index_to_removed){
                            this.active_pay = index_to_removed;
                        }else{
                            this.active_pay = parseInt(index_to_removed) - 1;
                        }
                    }else{
                        if(array_length===1){
                            this.active_order.payments = removeElement(this.active_order.payments,this.active_order.payments[this.active_pay] );
                            this.active_pay = 0;
                        }else{
                            this.active_pay = 0;
                        }
                    }
                    break;
            }
            this.calculatorMethod();
        },

        keyPadEvents(event,action_type,global_num_index=0){

            if(this.active_order.payments.length){

                let line_tendered_amount = parseInt(this.active_order.payments[this.active_pay].cash_tendered);
                switch (action_type) {
                    case "ADD TEN":
                    case "ADD TWENTY":
                    case "ADD FIFITY":
                        line_tendered_amount += parseInt(global_num_index)
                        break;
                    case "CLEAR":
                    case "BACKSPACE":
                        line_tendered_amount = 0;
                        break;
                    case "PAD BTN":
                        line_tendered_amount = line_tendered_amount+''+global_num_index;
                        line_tendered_amount = parseInt(line_tendered_amount);
                        break;
                }
                this.active_order.payments[this.active_pay].cash_tendered = parseInt(line_tendered_amount);
                //
                this.calculatorMethod();
            }
        },
    }
}
</script>
<style lang="scss" scoped>
tr.active td{
    background-color: #ccc!important;
    font-weight: 600!important;
}
</style>