<template> 
<div> 
    <Header></Header> 
    <div class="row" style="margin-left:150px; margin-top: 120px;height: 500px; ">
        <h2>About Ladha</h2>
        <h5 style="margin-top: 10px;"> <strong>Ladha</strong> is a product of <strong>Envisage Multimedia Company Limited</strong>,
                  a company registered under the laws of Kenya whose registered address is:</h5>
                <h6><address>KMA Centre, 2nd floor, Suit. 2.2, <br/>Along Mara road, Upper Hill,
             P. O. Box 55690-00200 Nairobi.</address></h6>
           <p>
           Ladha is a platform that lets you share your dining experience. <br/>Download Ladha app to be able to share 
           your thoughts and give a helpful feedback, <br/>give a score of your overall experience.
           Besides, Ladha lets you enjoy best delicious dishes your<br/> favourite restaurants in Kenya - without <br/>you having to leave your office
           and/or at the comfort of your home.    Have a taste of the best while avoiding work from pilling up.  <br/>
           Enjoy traditional superb Japanese,<br/> Chinese dishes and burgers. 
          </p>
          
      </div> 
    <SideBar></SideBar>
    <Footer></Footer>
</div>
</template>

<script> 
    import SideBar from "../Partials/SideBar";
    import Header from "../Partials/Header";
    import DataLoad from "../Partials/DataLoad";
    import Footer from "../../Front/partials/Footer"; 

    export default {
        name: 'About',
        components: { DataLoad,SideBar,Header,Footer}
    }
</script>

<style scoped > 
</style>
