<template>
    <span v-if="orderStatus===ORDER_STATUS.AWAITING_PAYMENT" class="badge badge-pill text-white px-3 py-2 badge-danger">{{orderStatus}}</span>
    <span v-else-if="orderStatus===ORDER_STATUS.AWAITING_FULFILL" class="badge badge-pill text-white px-3 py-2 badge-danger">{{orderStatus}}</span>
    <span v-else class="badge badge-pill text-white px-3 py-2 badge-primary">{{orderStatus}}</span>
</template>
<script>
import {ORDER_STATUS} from "../../../../../helpers/processStatus";
export default {
    name: "OrderStatus",
    props: {
        orderStatus: {
            type: String,
            default: 'COD'
        }
    },
    data(){
        return {
            ORDER_STATUS: ORDER_STATUS,
        }
    }
}
</script>