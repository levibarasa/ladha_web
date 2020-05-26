<template>
    <aside class="sidebar">
        <nav class="navbar navbar-dark bg-primary">
            <router-link to="/" class="navbar-brand m-0 py-2 brand-title">e-Retailer</router-link>
            <span></span>
            <a class="navbar-brand py-2 material-icons toggle-sidebar" href="#">menu</a>
        </nav>
        <nav class="navigation" >
            <ul>
                <li >
                    <a href="#" title="Blogger"><span class="nav-icon material-icons">comment</span> Customers <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li><a title="Feed List"> All</a></li>
                        <li><router-link :to="WEBURL.CUSTOMERS" title="All"> All</router-link></li>
                        <li><router-link :to="WEBURL.ADD_CUSTOMERS" title="All"> Add customer</router-link></li>
                    </ul>
                </li>
                <li >
                    <a href="#" title="Blogger"><span class="nav-icon material-icons">comment</span> Delivery <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li><router-link :to="WEBURL.DRIVERS" title="Drivers"> Drivers</router-link></li>
                        <li><router-link :to="WEBURL.VEHICLES" title="Vehicles"> Vehicle/Motorbike</router-link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script>
import {WEBURL} from "../../../router/web";
export default {
    name: "SideBar",
    data(){
        return {
            WEBURL: WEBURL
        }
    },
}
</script>