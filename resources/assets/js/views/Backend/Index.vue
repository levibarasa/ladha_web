<template>
<div>
    <DataLoad></DataLoad> 
    <TopBar></TopBar> 
    <SideBar></SideBar>
    <Footer></Footer>
</div> 
</template>
<script>
import SideBar from "./Partials/SideBar";
import TopBar from "./Partials/TopBar";
import DataLoad from "./Partials/DataLoad";
import Footer from "../Front/partials/Footer";
export default {
    name: "Index",
    components: {DataLoad,SideBar,TopBar,Footer},
    data(){
        return {
            customers: [],
            dataReady: true,
        }
    },
}
</script>
