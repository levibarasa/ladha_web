<template>
    <div class="col-lg-4 mb-4">
        <div v-for="(item,index) in regionalSalesComparison" :key="'regionalSalesComparison_'+index" class="card mb-4">
            <div class="card-body">
                <h6 class="weight-400 mb-3 border-left border-warning pl-2 border-width-medium">{{item.name}} <span class="text-muted">Sales Report</span></h6>
                <div class="row">
                    <div class="col">
                        <small class="text-muted weight-300">{{item.prev_period.sales_period}}</small>
                        <div class="weight-400">{{currency}}{{moneyFormater(item.prev_period.sales_amount)}}</div>
                    </div>
                    <div class="col">
                        <small class="text-muted weight-300">{{item.current_period.sales_period}}</small>
                        <div class="weight-400">{{currency}}{{moneyFormater(item.current_period.sales_amount)}}</div>
                    </div>
                </div>
                <div class="progress mt-3" style="height: 6px;">
                    <div class="progress-bar" role="progressbar" :style="{width: item.prev_period.sales_percent+'%'}" :aria-valuenow="item.prev_period.sales_percent" aria-valuemin="0" aria-valuemax="100"></div>
                    <div class="progress-bar bg-warning" role="progressbar" :style="{width: item.current_period.sales_percent+'%'}" :aria-valuenow="item.current_period.sales_percent" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {formatMoney} from "../../../../../helpers/helpermethods";
    export default {
        name: "RegionsSalesReport",
        props:{
            regionalSalesComparison: {
                type: Array,
                default: [],
            },
            currency: {
                type: String,
                default: "Ksh"
            }
        },
        methods: {
            moneyFormater(money,decimalCount=2){
                return formatMoney(money,decimalCount);
            }
        }
    }
</script>