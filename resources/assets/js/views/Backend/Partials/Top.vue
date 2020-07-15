<template> 
    <header id="header"  class="fixed-top foot-places-outer">
    <div class="container d-flex align-items-center">

      <router-link to="/" class="nav-link">
                  <font-awesome-icon icon="user-plus" />
                  <img src="assets/images/ladha_icon.jpg" height="80px" alt="Logo" />
       </router-link>  
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        
        <!--<ul>
          <li class="active"><a href="index.html">Home</a></li>   
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="service.html">Service</a></li>
          <li><a href="About.html">About</a></li>
          <li><a href="contact.html">Contact</a></li> 
        </ul>-->

      </nav><!-- .nav-menu -->  
      <div class="product_search_form rounded_input  offset-lg-1">
                        <form>
                            <div class="input-group">
                                <div class="input-group-prepend"> 
                                </div>
                                <input class="form-control" placeholder="Search ..." required="" type="text">
                                <button type="submit" class="search_btn2"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
        </div>
      <a href="index.html" class="get-started-btn ml-auto">Get Started</a>  
    </div>
  </header><!-- End Header --> 
</template>
<script>
export default {
   name: "Top",
   data(){
        return {} 
   }
}
</script>
