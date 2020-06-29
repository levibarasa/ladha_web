<template>
<div>
    <div class="sidebar-right">
        <div class="sidebar-close">
            <a class="close" href="#close"><i class="lni-close"></i></a>
        </div>
        <div class="sidebar-content"> 
            <div class="sidebar-menu">
                <ul>
                    <li class="nav-item ">
                    <router-link to="/" class="nav-link">
                  <font-awesome-icon icon="user-plus" />News
                </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/contact" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Contact
                </router-link>
                  </li>
                    <li>
                        <router-link to="/about" class="nav-link">
                  <font-awesome-icon icon="user-plus" />About
                </router-link>
                    </li>
                    <li><a href="#">Terms & Conditions</a></li>  
                </ul>
            </div> <!-- menu -->
            <div class="sidebar-social d-flex align-items-center justify-content-center">
                <span>FOLLOW US</span>
                <ul>
                    <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                </ul>
            </div> <!-- sidebar social -->
        </div> <!-- content -->
    </div>
    <div class="overlay-right"></div>
    </div>
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