<template>
    <aside class="sidebar">
        <nav class="navbar navbar-dark bg-primary">
            <router-link :to="DASHBOARDS.SCM_WORKSPACE" class="navbar-brand m-0 py-2 brand-title">{{APP_INFO.NAME}}</router-link>
            <span></span>
            <a class="navbar-brand py-2 material-icons toggle-sidebar" href="#">menu</a>
        </nav>
        <nav class="navigation" >
            <ul>
                <li :class="{'open active':menu==='Dashboards'}">
                    <a href="#" title="Layout Options"><span class="nav-icon material-icons">dashboard</span> Dashboards<span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li :class="{'active':submenu==='EcoDash'}"><router-link :to="ECOMMERCE.DASHBOARD" title="E-Commerce">E-Commerce</router-link></li>
                        <li><router-link :to="DASHBOARDS.SCM_WORKSPACE" title="E-Commerce">Workspace</router-link></li>
                    </ul>
                </li>
            </ul>
            <!-- <label title="Applications and Pages"><span>Applications and Pages</span></label> -->
            <ul>
                <li :class="{'open active':menu==='Eco'}">
                    <a href="#" title="eCommerce"><span class="nav-icon material-icons ">shopping_cart</span> eCommerce <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li :class="{'active':submenu==='EcoDash'}"><router-link :to="ECOMMERCE.DASHBOARD" title="Dashboard">Dashboard</router-link></li>
                        <li :class="{'active':submenu==='EcoProduct'}"><router-link :to="ECOMMERCE.PRODUCTS" title="Products">Products</router-link></li>
                        <li :class="{'active':submenu==='EcoProductShow'}"><router-link :to="ECOMMERCE.PRODUCT_DETAIL+'?todo=Details&id='" title="Product Details">Product Details</router-link></li>
                        <li :class="{'active':submenu==='EcoProductAdd'}"><router-link :to="ECOMMERCE.PRODUCT_ADD" title="Add Product">Add Product</router-link></li>
                        <li :class="{'active':submenu==='EcoOrders'}"><router-link :to="ECOMMERCE.ORDERS" title="Orders">Orders</router-link></li>
                        <li :class="{'active':submenu==='EcoCart'}"><router-link :to="ECOMMERCE.CART" title="Cart">Cart</router-link></li>
                        <li :class="{'active':submenu==='EcoCustomers'}"><router-link :to="ECOMMERCE.CUSTOMERS" title="Customers">Customers</router-link></li>
                        <li :class="{'active':submenu==='EcoPayments'}"><router-link :to="ECOMMERCE.PAYMENTS" title="Payments">Payments</router-link></li>
                    </ul>
                </li>
                <li >
                    <a href="#" title="Blogger"><span class="nav-icon material-icons">comment</span> Point of Sale <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li><a href="blogger-feed-list.html" title="Feed List">Feed List</a></li>
                        <li><a href="blogger-post.html" title="Post">Post</a></li>
                        <li><a href="blogger-add-post.html" title="Add Post">Add Post</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" title=""><span class="nav-icon material-icons ">widgets</span> Delivery <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li><a href="mailbox.html" title="MailBox">MailBox</a></li>
                        <li><a href="messages.html" title="Messages">Messages</a></li>
                        <li><a href="task-manager.html" title="Task Manager">Task Manager</a></li>
                        <li><a href="notes.html" title="Notes">Notes</a></li>
                        <li><a href="calendar.html" title="Calendar">Calendar</a></li>
                        <li><a href="photos-videos.html" title="Photos & Videos">Photos & Videos </a></li>
                    </ul>
                </li>
                <li>
                    <a href="#" title="System Pages"><span class="nav-icon material-icons">settings</span> Settings <span class="toogle-sub-nav material-icons">keyboard_arrow_right</span></a>
                    <ul class="sub-nav">
                        <li><a href="sign-in.html" title="Signin">Signin</a></li>
                        <li><a href="sign-up.html" title="Signup">Signup</a></li>
                        <li><a href="coming-soon.html" title="Coming Soon">Coming Soon</a></li>
                        <li><a href="404-page.html" title="404 Page">404 Page</a></li>
                        <li><a href="500-page.html" title="500 Page">500 Page</a></li> 
                    </ul>
                </li>
            </ul>
            <label title="Knowlage Center"><span>Knowlage Center</span></label>
            <ul>
                <li><a href="" title="Documentation"><span class="nav-icon material-icons">school</span> Documentation</a></li>
                <li><a target="_blank" href="" title="Help & Support"><span class="nav-icon material-icons">help</span> Help &amp; Support</a></li>
                <li><a href="" title="Utilities"><span class="nav-icon material-icons">build</span> Utilities</a></li>
            </ul>
        </nav>
    </aside>
</template>
<script>
import auth from '../../../../store/auth';
import APP_INFO from "../../../../helpers/config";
import {ECOMMERCE,DASHBOARDS} from "../../../../router/web";
export default {
    name: "SideBar",
    props: ['menu','submenu'],
    data(){
        return {
            email: auth.getEmail(),
            ECOMMERCE: ECOMMERCE,
            APP_INFO: APP_INFO.APP_INFO,
            DASHBOARDS: DASHBOARDS
        }
    },
    methods: {
        logout(){
            auth.remove();
            this.$router.push(LP_LINKS.HOME);
        }
    }
}
</script>