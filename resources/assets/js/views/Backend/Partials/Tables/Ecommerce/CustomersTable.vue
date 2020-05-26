<template>
    <!-- <div class="card">                       
        <div class="card-body table-responsive p-0">
            <table class="table  m-0">
                <thead>
                    <tr>
                        <th scope="col" width="1" class="border-top-0">#</th>
                        <th scope="col" class="border-top-0">Full Name</th>
                        <th scope="col" class="border-top-0">Address</th>
                        <th scope="col" class="border-top-0">Last seen</th>
                        <th scope="col" class="border-top-0 text-right">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <router-link tag="tr" v-for="(customer,index) in customers" :to="CUSTOMER_URL+'/'+customer.id+'?todo=VIEW&id='" :key="'customers_'+index" class="pointer-cursor">
                        <td class=" align-middle text-center">
                            <span v-if="getNamesChars(customer.first_name,customer.last_name)==='MD'" class="user-initials bg-success-light25 text-success">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else-if="getNamesChars(customer.first_name,customer.last_name)==='AA'" class="user-initials bg-danger-light25 text-danger">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else-if="getNamesChars(customer.first_name,customer.last_name)==='GT'" class="user-initials bg-warning-light25 text-warning">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else-if="getNamesChars(customer.first_name,customer.last_name)==='CO'" class="user-initials bg-primary-light25 text-primary">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else-if="getNamesChars(customer.first_name,customer.last_name)==='LB'" class="user-initials bg-info-light25 text-info">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else-if="getNamesChars(customer.first_name,customer.last_name)==='DD'" class="user-initials bg-danger-light25 text-danger">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                            <span v-else class="user-initials bg-success-light25 text-success">{{getNamesChars(customer.first_name,customer.last_name)}}</span>
                        </td>
                        <td class="align-middle">
                            <small class="text-muted weight-300">{{customer.first_name+' '+customer.last_name}}</small>
                            <div><span class="weight-400">{{customer.email}}</span></div>
                        </td>
                        <td class="align-middle">
                            <small class="text-muted weight-300">{{customer.city}}</small>
                            <div class="weight-400"> {{customer.address}}</div>
                        </td>
                        <td class="align-middle"><span class="material-icons align-middle md-18 text-danger">expand_more</span> {{customer.last_seen}}</td>
                        <td class="align-middle text-right">{{customer.mobile}}</td>
                    </router-link>
                </tbody>
            </table>
        </div>
    </div> -->
    <table class="table mb-4 responsive-table table-bordered bg-white">
        <thead class="thead-light2">
            <tr>
                <th scope="col" class="resizeable">Full Name <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
                <th scope="col" class="resizeable">Address</th>
                <th scope="col" class="resizeable">Mobile <span class="material-icons align-text-bottom ml-1 md-18">sort</span></th>
            </tr>
        </thead>
        <tbody>
            <router-link tag="tr" v-for="(customer,index) in customers" :to="CUSTOMER_URL+'/'+customer.id+'?todo=Details'" :key="'customer_'+index" class="pointer-cursor">
                <td data-label="Order#">{{customer.first_name+' '+customer.last_name}}</td>
                <td data-label="Reference">{{customer.address}}</td>
                <td data-label="Date">{{customer.mobile}}</td>
            </router-link>
        </tbody>
    </table>
</template>
<script>
export default {
    name: "CustomersTable",
    props: {
        customers: {
            type: Array,
            default: []
        },
        CUSTOMER_URL: {
            type: String,
            default: '',
        }
    },
    methods: {
        // getChartAt(str, at=0){
        //     return str.charAt(0);
        // },
        // getNamesChars(first_name,last_name){
        //     return this.getChartAt(first_name,0)+''+this.getChartAt(last_name,0);
        // }
    }
}
</script>