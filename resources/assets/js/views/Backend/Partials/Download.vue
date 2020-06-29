<template> 
<div>
    
    <Header></Header> 
    
    <div class="component pb-4">
        
        <div class="container">
            <div class="row">
                <h5 style="margin-top: 10px;"> <strong>Ladha</strong> is a product of <strong>Envisage Multimedia Company Limited</strong>,
            a company registered under the laws of Kenya whose registered address is:</h5>
        <h6><address>KMA Centre, 2nd floor, Suit. 2.2, <br/>Along Mara road, Upper Hill,
             P. O. Box 55690-00200 Nairobi.</address></h6>
            </div>
        </div>
    </div>
    <SideBar></SideBar>
    <Footer></Footer>
</div>
</template>

<script> 
    import SideBar from "../Partials/SideBar";
    import Header from "../../Backend/Partials/Header";
    import DataLoad from "../Partials/DataLoad";
    import Footer from "../../Front/partials/Footer"; 

    export default {
        name: 'Download',
        components: { DataLoad,SideBar,Header,Footer}
    }
</script>

<style scoped > 
</style>
