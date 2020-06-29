<template> 
<div>
    
    <Header></Header> 
    <h5 style="margin-top: 10px;"> <strong>Ladha</strong> is a product of <strong>Envisage Multimedia Company Limited</strong>,
            a company registered under the laws of Kenya whose registered address is:</h5>
        <h6><address>KMA Centre, 2nd floor, Suit. 2.2, <br/>Along Mara road, Upper Hill,
             P. O. Box 55690-00200 Nairobi.</address></h6>
    <div class="component pb-4">
        
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12 offset-md-2">
                    <ContactUsForm></ContactUsForm>
                </div>
            </div>
        </div>
    </div>
    <SideBar></SideBar>
    <Footer></Footer>
</div>
</template>

<script>
    import ContactUsForm from './ContactUsForm';
    import SideBar from "../Backend/Partials/SideBar";
    import Header from "./Partials/Header";
    import DataLoad from "./Partials/DataLoad";
    import Footer from "../Front/partials/Footer"; 

    export default {
        name: 'Contact',
        components: { ContactUsForm,DataLoad,SideBar,Header,Footer}
    }
</script>

<style scoped > 
</style>
