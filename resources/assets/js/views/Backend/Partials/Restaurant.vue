<template>
 
    <div id="home" class="slider-area">
      <Header></Header> 
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
       <br/>
       
      <div class="row" style="margin-left:150px;">
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/africanfoods.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.200.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div> 
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/fd.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza</p>
              </a><br/>
              <b>KES.250.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/fshh.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.100.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/fsh.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.300.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/fish.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.150.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
      </div><br/>
      
        <div class="row" style="margin-left:150px;">
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/beefstew.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.200.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div> 
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/choma.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza</p>
              </a><br/>
              <b>KES.250.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/ugali.jpeg" height="150px" width="200px"   alt="image" />
                <p>African Dish <br/> KFC KMA Plaza </p>
              </a><br/>
              <b>KES.100.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/wngs.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.300.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
          <div class="col-md-2">
            <div class="thumbnail text-center">
              <a href>
                <img src="assets/images/bif.jpeg" height="150px" width="200px" alt="image" />
                <p>African Dish <br/> Choma Mama</p>
              </a><br/>
              <b>KES.150.00</b>
              <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
      </div><br/>
      <!--
         africanfoods.jpeg ,fd.jpeg,fshh.jpeg,fsh.jpeg,fish.jpeg,beefstew.jpeg,choma.jpeg,ugali.jpeg,wngs.jpeg,
githe.jpeg,bif.jpeg,vegs.jpeg,rveges.jpeg,vege.jpeg,veg.jpeg,chick.jpeg,ricechik.jpeg
         -->
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
                <img src="assets/images/vegs.jpeg" height="150px" width="200px"   alt="image" />
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
    <SideBar></SideBar>
    <Footer></Footer>
    </div> 

    
</template>
<script>
    import SideBar from "../Partials/SideBar";
    import Header from "../../Backend/Partials/Header";
    import DataLoad from "../Partials/DataLoad";
    import Footer from "../../Front/partials/Footer"; 
    import Auth from "../../../store/auth";
    import { WEBURL } from "../../../router/web";
    import Slider from "./Slider.vue";

export default {
  name: "TopBar",
  components: {
    Slider,DataLoad,SideBar,Header,Footer
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