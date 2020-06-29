<template>
    <div id="home" class="slider-area">
      <div
        class="bd-example"
        style='background-image: url("assets/images/"); background-size: cover; width: 100%;'
      >
      <div style=" background-color: #f3f2f3; align: centre; margin-top:0px; height:60px; width:100%;">
        <form class="search-form py-3 rounded-0 form-inline" @submit.prevent="search">
          <div class="search-form__inner dark-background input-group rounded-0" style="margin-left:900px;">
            <input
              style='width="100%;"'
              v-model="searchParam"
              type="text"
              class="transparent-input form-control rounded-0 search-game search-form__text"
              placeholder="Search Restaurant"
            />
            <button
              class="transparent-input btn btn-outline-secondary rounded-0 search-form__submit"
              type="submit"
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div> 
      
      <div class="row" style="margin-left:150px;margin-right:200px; height: 250px; position: relative;"> 
      <Slider/>
      </div>
      <br/> 
    <div class="row" style="margin-left:150px;">
        <h3>Why Ladha?</h3>
        <p>
           Ladha is a platform that lets you share your dining experience. Download Ladha app to be able to share 
           your thoughts and give a helpful feedback, <br/>give a score of your overall experience.
           Besides, Ladha lets you enjoy best delicious dishes your favourite restaurants in Kenya - without <br/>you having to leave your office
           and/or at the comfort of your home.   Have a taste of the best while avoiding work from pilling up.  
           Enjoy traditional superb Japanese,<br/> Chinese dishes and burgers. 
          </p>
      </div>
      <div class="row" style="margin-left:150px;">
      <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/chknoodles.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.200.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div> 
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/githe.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza</p>
              </a><br/>
              <b>KES.250.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/vege.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.100.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/chicknfry.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.300.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/ricechik.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.150.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
      </div>
        
      </div>
      <!-- bd-example -->
    </div> 
</template>
<script>
import Auth from "../../../store/auth";
import { WEBURL } from "../../../router/web";
import Slider from "./Slider.vue";

export default {
  name: "TopBar",
  components: {
    Slider
  },
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