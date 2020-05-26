<template>
    <div class="modal leftright-slide right-align fade" :id="modalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Sales Receipt</h5>
              <div class=" modal-actions">
                <a class="pointer-cursor"><span class="material-icons ">mail_outline</span></a>
                <a class="pointer-cursor"><span class="material-icons ">local_printshop</span></a>
                <a class="pointer-cursor" data-dismiss="modal"><span class="material-icons ">close</span></a>
              </div>
            </div>
            <div class="modal-body text-center overflow-y-auto">
              <div class="row">
                <div v-if="dataPreLoad" class="col-md-12">
                  <data-loading/>
                </div>
                <div v-else class="col-md-12">
                  <etr-sales-receipt :paidOrder="paidOrder" :paymentReceipt="paymentReceipt"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import DataLoading from "../Progress/DataLoading";
import {SHOP_POS_ORDERS_API} from "../../../../router/api";
import { get } from '../../../../helpers/api';
import EtrSalesReceipt from "../../Partials/Previews/Sales/EtrSalesReceipt";
export default {
    name: "EtrReceiptModal",
    props: {
        modalId: {
          type: String,
          default: 'etrReceiptModal'
        },
        orderId: {
          type: String,
          default: null
        }
    },
    components: {DataLoading,EtrSalesReceipt},
    data(){
      return {
        dataPreLoad: false,
        paidOrder: null,
        paymentReceipt: null,
      }
    },
    watch: {
      orderId: function(newData,oldData){
        if(newData){
          this.showPaidOrder(newData);
        }
      }
    },
    methods: {
      showPaidOrder(order_Id){
        this.dataPreLoad = true;
        get(SHOP_POS_ORDERS_API+'/'+order_Id)
        .then((res) => {
            if(res.data.status_code === 200) {
                this.paidOrder = res.data.results;
                if(this.paidOrder.receipts.length){
                  this.paymentReceipt = this.paidOrder.receipts[0];
                }
                this.dataPreLoad = false;
            }
        }).catch((err) => {
            this.dataPreLoad = false;
        });
      },
    }
}
</script>