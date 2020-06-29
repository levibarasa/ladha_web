<template>
<div>
  <section class="header-area">
    <div class="navbar-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <router-link to="/" class="nav-link">
                  <font-awesome-icon icon="user-plus" />
                  <img src="assets/images/ladha.png" height="80px" alt="Logo" />
                </router-link>  

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarEight"
                aria-controls="navbarEight"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar float-right" id="navbarEight">
                <ul class="navbar-nav ml-auto float-right">
                  <li class="nav-item active">
                    <router-link to="/" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Home
                </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/download" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Download
                </router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/restaurant" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Restaurants
                </router-link>
                  </li>
                  
                  <li class="nav-item"> 
                    <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Login
                </router-link>
                  </li>
                  <li class="nav-item">
                    <li class="nav-item"> 
                    <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" />SignUp
                </router-link> 
                  </li> 
                </ul>
              </div>

              <div class="navbar-btn d-none mt-15 d-lg-inline-block"> 
                <a class="menu-bar" href="#side-menu-right">
                  <i class="lni-menu"></i>
                </a>
              </div>
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navbar area --> 
  </section>
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
import Auth from "../../../store/auth";
import { WEBURL } from "../../../router/web"; 

export default {
  name: "Header", 
  data() {
    return {};
  },
  methods: {
    logout() {
      Auth.remove();
      this.$router.push("/");
    }
  }
};
</script>
<style scoped> 

</style>