<template>

    <section class="wrapper">
        <div v-if="dataReady" class="content-area">
            <header class="header sticky-top mh-50 bg-37">
                <div class="posleftpane header mh-50">
                    <router-link :to="ECOMMERCE.DASHBOARD" class="pos-app-title">e-Retailer</router-link>
                </div>
                <div class="posrightpane mh-50">
                    <div class="order-selector">
                        <button v-for="(orde,index) in current_session.orders" @click="activateOrder(orde.qn)" type="button" :class="{'btn py-1 px-2 no-shadowed':true,'btn-warning':active_order_id===orde.qn,'btn-outline-link':active_order_id!==orde.qn}" :key="'current_session'+index">
                            <span class="material-icons mr-1 align-top">shopping_cart</span>
                            <span v-if="active_order_id===orde.qn">{{orde.trans_time}}</span>
                            <span v-else>{{orde.qn}}</span>
                        </button>
                        <button type="button" @click="removeAddOrder('ADD')" class="btn btn-outline-link py-1 px-2 neworder-button no-shadowed" title="New order">+</button>
                        <button type="button" @click="removeAddOrder('REMOVE')" class="btn btn-outline-link py-1 px-2 deleteorder-button no-shadowed" title="Delete order">-</button>
                    </div>
                    <div class="current-user">
                        <router-link :to="ECOMMERCE.DASHBOARD">Close</router-link>
                    </div>
                </div>
            </header>

            <div v-if="active_order_processing" class="content-wrapper padding-0">
                <div class="posleftpane body">
                    <div class="posleftpane-content">
                        <div v-if="!active_order.items.length" class="row">
                            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 col-xl-12 pd-r-0 pd-l-resp mg-b-resp">
                                <div class="order">
                                    <div class="order-empty">
                                        <i class="material-icons d-block mb-1" role="img" aria-label="Shopping cart" title="Shopping cart">add_shopping_cart</i>
                                        <h1>Your shopping cart is empty</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row">
                            <div v-for="(item,indexy) in active_order.items" @click="keyPadActions($event,'Active Item',indexy)" :key="'inventories'+indexy" class="col-md-4 col-lg-4 pd-r-0 pd-l-resp mg-b-resp">
                                <div :class="{'card cart-item':true,'active':active_item_index===indexy}">
                                    <div class="card-body padding-0">
                                        <img :src="BASE_URL+item.image" :alt="item.brand">
                                    </div>
                                    <div class="card-footer text-center">4Kg Net</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="posrightpane body">
                    <div class="posrightpane-content">
                        <div class="width-100-pc float-left rightpane-header">
                            <div class="width-30-pc float-left">
                                <search-item
                                    :product_items="product_items"
                                    :show_label="true"
                                    :barcode="true"
                                    :tabulated_view="true"
                                    :search_result_width="825"
                                    :field_wdth="100"
                                    :field_cover_wdth="250"
                                    :search_result_min_height="450"
                                    @item-event="add_searched_item(product_items)"/>
                            </div>
                            <order-customer :customer="active_order.customer"/>
                        </div>
                        <div class="width-100-pc float-left bg-f4">
                            <div class="width-100-pc float-left pos-item-list-panel">
                                <table class="pos-table table-hover">
                                    <tr class="head">
                                        <th style="width:15%">Code</th>
                                        <th style="width:44%" class="bdl">Description</th>
                                        <th style="width:12%" :class="{'text-right bdl':true,'active':active_key_input==='Qty Mode'}">Qty</th>
                                        <th style="width:8%" :class="{'text-right bdl':true,'active':active_key_input==='Price Mode'}">Price</th>
                                        <th style="width:8%" :class="{'text-right bdl':true,'active':active_key_input==='Disc Mode'}">Disc</th>
                                        <th style="width:13%" class="text-right bdl">Ext Price</th>
                                    </tr>
                                    <tr v-for="(table_item,index) in active_order.items" @click="keyPadActions($event,'Active Item',index)" :key="'table_item'+index" :class="{'body pointer-cursor':true,'active':active_item_index===index}">
                                        <td>{{table_item.sku_code}}</td>
                                        <td class="bdl">{{table_item.brand_sector}} - {{table_item.unit_weight+table_item.uom}}</td>
                                        <td class="npd">
                                            <input type="number" v-model="active_order.items[index].qty" required @keyup="keyPadActions($event,'PC KEYBOARD INPUT',index)" min="1" class="form-control height-30 br-2 no-shadowed">
                                        </td>
                                        <td class="bdl text-right">{{formatMoney(table_item.unit_retail_price)}}</td>
                                        <td class="bdl text-right">{{formatMoney(table_item.discount)}}</td>
                                        <td class="bdl text-right">{{formatMoney(table_item.extprice)}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="force-to-bottom">
                            <div v-if="show_virtual_keyboard" class="width-70-pc float-left virtual-keyboard">
                                <div class="subwindow-container-fix pads"> 
                                    <div class="control-buttons oe_hidden"></div>
                                    <div class="actionpad">
                                        <button type="button" @click="doCustomer(true,'POS')" class="button set-customer ">
                                            <i class="fa fa-user" role="img" aria-label="Customer" title="Customer"></i>
                                            Customer
                                        </button>
                                        <button type="button" @click="doPayment(true)" class="button pay">
                                            <div class="pay-circle">
                                                <i class="fa fa-chevron-right" role="img" aria-label="Pay" title="Pay"></i>
                                            </div>
                                            Payment
                                        </button>
                                    </div>
                                    <div class="numpad">
                                        <button @click="keyPadActions($event,'Pad Button',1)" class="input-button number-char">1</button>
                                        <button @click="keyPadActions($event,'Pad Button',2)" class="input-button number-char">2</button>
                                        <button @click="keyPadActions($event,'Pad Button',3)" class="input-button number-char">3</button>
                                        <button :class="{'mode-button':true,'selected-mode':active_key_input==='Qty Mode'}" @click="keyPadActions($event,'Qty Mode')" data-mode="quantity">Qty</button>
                                        <br>
                                        <button @click="keyPadActions($event,'Pad Button',4)" class="input-button number-char">4</button>
                                        <button @click="keyPadActions($event,'Pad Button',5)" class="input-button number-char">5</button>
                                        <button @click="keyPadActions($event,'Pad Button',6)" class="input-button number-char">6</button>
                                        <button :class="{'mode-button':true,'selected-mode':active_key_input==='Disc Mode'}" @click="keyPadActions($event,'Disc Mode')" data-mode="discount">Disc</button>
                                        <br>
                                        <button @click="keyPadActions($event,'Pad Button',7)" class="input-button number-char">7</button>
                                        <button @click="keyPadActions($event,'Pad Button',8)" class="input-button number-char">8</button>
                                        <button @click="keyPadActions($event,'Pad Button',9)" class="input-button number-char">9</button>
                                        <button :class="{'mode-button':true,'selected-mode':active_key_input==='Price Mode'}" @click="keyPadActions($event,'Price Mode')" data-mode="price">Price</button>
                                        <br>
                                        <button @click="keyPadActions($event,'Clear')" class="input-button numpad-minus">C</button>
                                        <button @click="keyPadActions($event,'Pad Button',0)" class="input-button number-char">0</button>
                                        <button @click="keyPadActions($event,'Pad Button','.')" class="input-button number-char">.</button>
                                        <button @click="virtualKeyBoard(false)" class="input-button numpad-backspace">
                                            <img style="pointer-events: none;" :src="BASE_URL+'/assets/icons/dashboard/backspace.png'" width="24" height="21" alt="Back">
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="width-50-pc float-left pos-action-btn-panel">
                                <div class="float-left width-100-pc">
                                    <button type="button" @click="doCustomer(true,'POS')" class="myButton">Customer</button>
                                    <button @click="doShip(true,'POS')" class="myButton">Shipping</button>
                                    <button type="button" @click="keyPadActions($event,'Qty Mode')" :class="{'myButton special':true,'selected-mode':active_key_input==='Qty Mode'}">Qty</button>
                                </div>
                                <div class="float-left width-100-pc">
                                    <button type="button" @click="doPayment(true)" class="myButton2">Payment</button>
                                    <!-- <button class="myButton">Returns</button> -->
                                    <button type="button" @click="keyPadActions($event,'Disc Mode')" :class="{'myButton special':true,'selected-mode':active_key_input==='Disc Mode'}">Disc</button>
                                </div>
                                <div class="float-left width-100-pc">
                                    <button class="myButton">Paid In/Out</button>
                                    <button class="myButton">Returns</button> 
                                    <!-- <button type="button" @click="doWebOrder(true)" class="myButton">Insert Line</button> -->
                                    <button type="button" @click="keyPadActions($event,'Price Mode')" :class="{'myButton special':true,'selected-mode':active_key_input==='Price Mode'}">Price</button>
                                </div>
                                <div class="float-left width-100-pc">
                                    <button class="myButton">Delete Item</button>
                                    <button type="button" @click="doWebOrder(true)" class="myButton">Delete All</button>
                                    <button type="button" @click="virtualKeyBoard(true)" title="Virtual Keyboard" :class="{'myButton special':true}"><i class="fa fa-keyboard-o"></i></button>
                                </div>
                            </div>
                            <div class="width-30-pc float-right pos-item-touch-pad-panel">
                                <total-summary :active_order="active_order"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <set-customer v-else-if="active_order_customers"
                :active_order="active_order"
                :calledfrom="calledfrom"
                :BASE_URL="BASE_URL"
                :customers="customers"
                @customer-cancel-event="doCustomer(false,calledfrom)"/>
            <set-pay v-else-if="active_order_payment"
                :active_order="active_order"
                :paymentMethods="paymentMethods" 
                @payment-cancel-event="doPayment(false)"/>
            <set-delivery v-else-if="active_order_delivery" 
                :active_order="active_order"
                :paymentMethods="paymentMethods"
                @ship-cancel-event="doShip(false)"/>
            <div v-else></div>

        </div>
        <div v-else class="content-area">
            <div class="content-wrapper">
                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-12  mb-12 mb-lg-0 text-center">
                            <data-loading/>
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
import ProductsTable from "../../Partials/Tables/Ecommerce/ProductsTable";
import {paginator,formatMoney,removeElement} from "../../../../helpers/helpermethods";
import {posOrderEntity,posSessionEntity} from "../../../../helpers/entities";
import {SHOP_POS_ORDERS_API,BASE_URL,SHOP_POS_CUSTOMERS,SHOP_POS_PAYMENT_METHODS} from "../../../../router/api";
import {ECOMMERCE} from "../../../../router/web";
import {get} from "../../../../helpers/api";
import DataLoading from "../../Partials/Progress/DataLoading";
import OrderCustomer from "./Partials/OrderCustomer";
import SearchItem from "../../Partials/Search/SearchItem";
import TotalSummary from "../../Partials/Tables/Ecommerce/TotalSummary";
import SetCustomer from "./Partials/SetCustomer";
import SetDelivery from "./Partials/SetDelivery"
import SetPay from "./Partials/SetPay";
export default {
    name: "Show",
    components: {SideBar,TopBar,ProductsTable,DataLoading,OrderCustomer,SearchItem,TotalSummary,SetCustomer,SetPay,SetDelivery},
    data(){
        return {
            product_items: [],
            pendingOrders: [],
            customers: [],
            paymentMethods: [],
            filters: {},
            pagination: paginator(),
            dataReady: false,
            BASE_URL: BASE_URL,
            ECOMMERCE: ECOMMERCE,

            active_key_input: 'Qty Mode',
            active_order: null,
            current_session: null,
            active_item_index: 0,
            show_virtual_keyboard: false,
            active_order_processing: false,
            active_order_customers: false,
            active_order_payment: false,
            active_order_delivery: false,
            calledfrom: 'POS',
            // confirm_exit: false,
            currency: "KES",
        }
    },
    created(){
        this.loadCustomers();
    },
    methods: {
        loadOrders(){
            get(SHOP_POS_ORDERS_API+'?page='+this.pagination.current_page)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.pendingOrders = res.data.results.data;
                    console.info(this.pendingOrders);
                    this.filters = res.data.results.filters;
                    this.pagination = res.data.results.pagination;
                    this.current_session = posSessionEntity();
                    if(this.pendingOrders.length){
                        let orderId = this.pendingOrders[0].id;
                        this.showOrder(orderId);
                    }else{
                        let new_order = posOrderEntity();
                        new_order.id = '';
                        new_order.qn = parseInt(this.current_session.orders.length);
                        this.current_session.orders.push(new_order);
                        this.activateOrder(new_order.qn);
                        this.active_order_processing = true;
                        this.dataReady = true;
                    }
                }
            }).catch((err) => {
                //this.dataReady = true;
            });
        },

        loadCustomers(){
            get(SHOP_POS_CUSTOMERS)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.customers = res.data.results.data;
                    this.loadPaymentMethods();
                }
            }).catch((err) => {
                //this.dataReady = true;
            });
        },

        loadPaymentMethods(){
            get(SHOP_POS_PAYMENT_METHODS)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.paymentMethods = res.data.results.data;
                    //alert(this.paymentMethods.length);
                    this.loadOrders();
                }
            }).catch((err) => {
                //this.dataReady = true;
            });
        },

        showOrder(orderId){
            get(SHOP_POS_ORDERS_API+'/'+orderId)
            .then((res) => {
                if(res.data.status_code === 200) {
                    this.pendingOrders = res.data.results.data;
                    this.filters = res.data.results.filters;
                    this.pagination = res.data.results.pagination;
                    this.current_session = posSessionEntity();
                    //
                    let new_order = res.data.results;
                    //console.info(res.data.results);
                    new_order.qn = parseInt(this.current_session.orders.length);
                    this.current_session.orders.push(new_order);
                    this.activateOrder(new_order.qn);
                    this.active_order_processing = true;
                    this.dataReady = true;
                }
            }).catch((err) => {
                //this.dataReady = true;
            });
        },

        doCustomer(status_, called_from=null){
            if(status_){
                this.calledfrom = called_from;
                this.active_order_customers = true;
                this.active_order_processing = false;
                this.active_order_payment = false;
            }else{
                if(this.calledfrom==='POS'){
                    this.active_order_customers = false;
                    this.active_order_payment = false;
                    this.active_order_processing = true;
                }else{
                    this.active_order_processing = false;
                    this.active_order_customers = false;
                    this.active_order_payment = true;
                }
            }
        },

        doShip(status_){
            if(status_){
                this.active_order_delivery = true;
                this.active_order_processing = false;
            }else{
                this.active_order_delivery = false;
                this.active_order_processing = true;
            }
        },

        doPayment(status_){
            if(status_){
                this.active_order_payment = true;
                this.active_order_processing = false;
            }else{
                this.active_order_payment = false;
                this.active_order_processing = true;
            }
        },

        activateOrder(order_qn=null){
            let activated_order = false;
            this.active_order = null;
            for (let index = 0; index < this.current_session.orders.length; index++) {
                const element = this.current_session.orders[index];
                if(element.qn===order_qn){
                    this.active_order = element;
                    this.active_order_id = element.qn;
                    activated_order = true;
                    break;
                }
            }
            if(!activated_order){
                this.active_order = this.current_session.orders[0];
                this.active_order_id = this.active_order.qn;
            }
        },

        removeAddOrder(action_){
            switch (action_) {
                case "REMOVE":
                    let index_to_removed = this.current_session.orders.indexOf(this.active_order);
                    let array_length = this.current_session.orders.length;
                    let old_last_element = this.current_session.orders.length - 1;
                    if(this.current_session.orders.length > 1){
                        this.current_session.orders = removeElement(this.current_session.orders,this.active_order);
                        let new_last_index = this.current_session.orders.length - 1;
                        if(new_last_index >= index_to_removed){
                            let new_active_element = this.current_session.orders[index_to_removed];
                            this.activateOrder(new_active_element.qn);
                        }else{
                            let new_active_element = this.current_session.orders[parseInt(index_to_removed)-1];
                            this.activateOrder(new_active_element.qn);
                        }
                    }else{
                        return;
                    }
                    break;
                case "ADD":
                    let new_order = posOrderEntity();
                    new_order.id = "new_odr_"+this.current_session.orders.length;
                    new_order.qn = parseInt(this.current_session.orders.length);
                    this.current_session.orders.push(new_order);
                    this.activateOrder(new_order.qn);
                    break;
            }
        },

        keyPadActions(event,action_type,global_num_index=0){
                switch (action_type) {
                    case 'PC KEYBOARD INPUT':
                        break;
                    case 'Qty Mode':
                    case 'Price Mode':
                    case 'Disc Mode':
                        this.active_key_input = action_type;
                        break;
                    case 'Active Item':
                        this.active_item_index = global_num_index;
                        break;
                    case 'Pad Button':
                        if(!this.active_order.items.length){ return; }
                        switch (this.active_key_input) {
                            case 'Price Mode':
                                let cur_price = this.active_order.items[this.active_item_index].unit_retail_price;
                                if(cur_price === 0){
                                    this.active_order.items[this.active_item_index].unit_retail_price = parseInt(global_num_index );
                                }else{
                                    this.active_order.items[this.active_item_index].unit_retail_price = parseInt(cur_price+''+global_num_index );
                                }
                                break;
                            case 'Qty Mode':
                                let cur_qty = this.active_order.items[this.active_item_index].qty;
                                if(cur_qty === 0){
                                    this.active_order.items[this.active_item_index].qty = parseInt(global_num_index );
                                }else{
                                    this.active_order.items[this.active_item_index].qty = parseInt(cur_qty+''+global_num_index );
                                }
                                break;
                            case 'Disc Mode':
                                let cur_disc = this.active_order.items[this.active_item_index].discount;
                                if(cur_disc === 0){
                                    this.active_order.items[this.active_item_index].discount = parseInt(global_num_index );
                                }else{
                                    this.active_order.items[this.active_item_index].discount = parseInt(cur_disc+''+global_num_index );
                                }
                                break;
                        }
                        break;
                    case 'Backspace':
                        if(!this.active_order.items.length){ return; }
                        switch (this.active_key_input) {
                            case 'Disc Mode':
                                this.active_order.items[this.active_item_index].discount = 0;
                                break;
                            case 'Price Mode':
                                this.active_order.items[this.active_item_index].unit_retail_price = 0;
                                break;
                            case 'Qty Mode':
                                this.active_order.items[this.active_item_index].qty = 0;
                                break;
                        }
                        break;
                    case 'Clear':
                        if(!this.active_order.items.length){ return; }
                        switch (this.active_key_input) {
                            case 'Disc Mode':
                                this.active_order.items[this.active_item_index].discount = 0;
                                break;
                            case 'Price Mode':
                                this.active_order.items[this.active_item_index].unit_retail_price = 0;
                                break;
                            case 'Qty Mode':
                                this.active_order.items[this.active_item_index].qty = 0;
                                break;
                        }
                        break;
                }

                //Calculation
                let total_tax = 0;
                let total_amount = 0;
                let sub_total = 0;
                let total_discount = 0;
                for (let c = 0; c < this.active_order.items.length; c++) {

                    const element = this.active_order.items[c];
                    let qty = element.qty;
                    let excl_price = element.price_excl;
                    let incl_price = element.unit_retail_price;
                    let discount = element.discount;
                    let line_total_with_tax = parseInt(qty*incl_price);
                    let line_total_without_tax = parseInt(qty*excl_price);
                    let line_tax = parseInt(line_total_with_tax) - parseInt(line_total_without_tax);
                    total_tax += parseInt(line_tax);
                    this.active_order.items[c].tax = parseInt(line_tax);
                    //total_tax += parseInt(line_total_with_tax) - parseInt(line_total_without_tax);
                    total_amount += parseInt(line_total_with_tax);
                    sub_total += parseInt(line_total_without_tax);
                    total_discount += parseInt(discount);
                    this.active_order.items[c].extprice = parseInt(line_total_with_tax) - parseInt(discount);
                }

                this.active_order.tax = parseInt(total_tax);
                this.active_order.total_amount = parseInt(total_amount) - parseInt(total_discount);
                this.active_order.sub_total = parseInt(sub_total);
                this.active_order.discount = parseInt(total_discount);
            },

        add_searched_item(product_items){
            //console.info(product_items);
            let item_id_array = [];
            for (let index = 0; index < product_items.length; index++) {
                let exist_checker = false;
                const item_product = product_items[index];
                let image = null;
                if(item_product.assets.length){
                    image = item_product.assets[0].file_path;
                }
                let item_obj = {
                    id: item_product.id,
                    product_id: item_product.id,
                    name: item_product.item_name.name,
                    brand: item_product.brand.name,
                    brand_sector: item_product.brand_sector.name,
                    sku_code: item_product.sku_code,
                    unit_weight: item_product.single_unit_weight,
                    qty: 0,
                    discount: 0,
                    extprice: 0,
                    uom: item_product.uom.slug,
                    tax: 0,

                    unit_retail_price: item_product.price.unit_retail_price,
                    unit_cost: item_product.price.unit_cost,
                    pack_retail_price: item_product.price.pack_retail_price,
                    pack_cost: item_product.price.pack_cost,

                    price_excl: item_product.price_after_tax.unit_retail_price,
                    unit_weight: item_product.single_unit_weight,
                    image: image,
                    taxes: item_product.taxes,
                };
                for (let w = 0; w < this.active_order.items.length; w++) {
                    const elementinner = this.active_order.items[w];
                    if(elementinner.id === item_product.id){
                        exist_checker = true;
                        break;
                    }
                }
                if(!exist_checker){
                    this.active_order.items.push(item_obj);
                }
            }   
        },

        formatMoney(money){
            return formatMoney(money);
        },

        // confirmExit(){
        //     this.confirm_exit = true;
        //     let globalThis = this;
        //     setTimeout( function(){ globalThis.confirm_exit = false }, 5000);
        // },
    }
}
</script>

<style scoped>

.pos-item-list-panel{
    background-color: #fff;
    border: 1px solid #c7c7c7;
    overflow-y: auto;
}
table{ width: 100%; }
table.pos-table tr.head th{
    border-bottom: #DDD solid 1px!important;
    position: sticky;
    top: 0px;
    color: #fff;
    padding: 4px 10px;
    text-transform: capitalize!important;
    font-size: 13px;
    background-color: #787887;
}
table.pos-table tr.head th.active{
    background-color: #48a1af!important;
    border: #48a1af solid 1px!important;
    color: #fff!important;
}

table.pos-table tr.head th.bdl{
    border-left: #DDD solid 1px!important;
}

table.pos-table tr.body td{
    border-bottom: #DDD dotted 1px!important;
    color: #444;
    padding: 4px 10px;
    font-size: 12px;
}
table.pos-table tr.body td.bdl{
    border-left: #DDD dotted 1px!important;
}
table.pos-table tr.body td.npd{
    padding: 2px!important;
}

table.pos-table tr.active td{
    background-color: #ccc!important;
    font-weight: 600;
}
</style>
