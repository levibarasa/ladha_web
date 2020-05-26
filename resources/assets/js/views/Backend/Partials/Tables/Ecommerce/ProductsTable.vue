<template>
    <div class=" table-responsive">

        <table v-if="dataGrid" class="table mb-4 responsive-table table-bordered bg-white">
            <thead class="thead-light2">
                <tr>
                    <th scope="col" width="1">Product Image</th>
                    <th scope="col" class="resizeable">Name <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Code <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Price <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Pack Weight <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Stock <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable">Reorder Level <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <!-- <th scope="col" width="1">Actions</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-if="!inventories.length">
                    <td class="align-middle cl-red text-center" colspan="8" data-label="Product Name">No product to display!</td>
                </tr>
                <router-link tag="tr" v-for="(inventory,index) in inventories" :key="'inventory_'+index" :to="PRODUCT_DETAIL+'?todo=Details&id='+inventory.id" class="pointer-cursor">
                    <td class="align-middle" data-label="Product Image"><img :src="BASE_URL+inventory.avatar" width="100"></td>
                    <td class="align-middle" data-label="Name:">{{inventory.name}}</td>
                    <td class="align-middle" data-label="Code:">{{inventory.sku_code}}</td>
                    <td class="align-middle" data-label="Price">
                        {{inventory.price}}
                        <i v-if="inventory.taxes.length" class="tax-text">VAT@{{inventory.taxes[0].sales_rate}}%</i>
                    </td>
                    <td class="align-middle" data-label="Pack Weight">{{inventory.pack_weight}}</td>
                    <td class="align-middle" data-label="Stock">{{inventory.inStock}}</td>
                    <td class="align-middle" data-label="Reorder Level">
                        {{inventory.reorder_point}}
                        <span v-if="inventory.inStock < inventory.reorder_point" class="badge badge-pill text-white px-3 py-2 badge-danger">Low</span>
                    </td>
                </router-link>
            </tbody>
        </table>

        <table v-else class="table mb-4 table-bordered bg-white width-100-pc">
            <thead class="thead-light2">
                <tr>
                    <th scope="col" class="resizeable-40">Name <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable-12">Code <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable-12">Price <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable-12">Pack Weight <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable-12">Stock <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                    <th scope="col" class="resizeable-12">Reorder Level <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!inventories.length">
                    <td class="align-middle cl-red text-center" colspan="8" data-label="Product Name">No product to display!</td>
                </tr>
                <router-link tag="tr" v-for="(inventory,index) in inventories" :key="'inventory_'+index" :to="PRODUCT_DETAIL+'?todo=Details&id='+inventory.id" class="pointer-cursor">
                    <td class="align-middle" data-label="Name:">{{inventory.name}}</td>
                    <td class="align-middle" data-label="Code:">{{inventory.sku_code}}</td>
                    <td class="align-middle" data-label="Price">
                        {{formatMoney(inventory.price)}}
                        <i v-if="inventory.taxes.length" class="tax-text">VAT@{{formatMoney(inventory.taxes[0].sales_rate)}}%</i>
                    </td>
                    <td class="align-middle" data-label="Pack Weight">{{inventory.pack_weight}}</td>
                    <td class="align-middle" data-label="Stock">{{formatMoney(inventory.inStock,0)}}</td>
                    <td class="align-middle" data-label="Reorder Level">
                        {{formatMoney(inventory.reorder_point,0)}}
                        <span v-if="inventory.inStock < inventory.reorder_point" class="badge badge-pill text-white px-3 py-2 badge-danger">Low</span>
                    </td>
                </router-link>
            </tbody>
        </table>

    </div>
</template>
<script>
import {formatMoney} from "../../../../../helpers/helpermethods";
export default {
    name: "ProductsTable",
    props: {
        inventories: {
            type: Array,
            default: [],
        },
        BASE_URL: {
            type: String,
            default: "",
        },
        PRODUCT_DETAIL: {
            type: String,
            default: "",
        },
        dataGrid: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        formatMoney(money,decimalCount=2){
            return formatMoney(money,decimalCount);
        }
    }
}
</script>