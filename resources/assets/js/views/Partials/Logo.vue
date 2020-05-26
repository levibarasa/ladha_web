<template>
    <router-link :to="LP_LINKS.HOME" tag="div" class="text-center mb-4 cursor-pointer"><span class="material-icons text-danger" style="font-size:6rem;" >supervised_user_circle</span></router-link>
</template>
<script>
import {LP_LINKS} from "../../router/web";
export default {
    data(){
        return {
            LP_LINKS: LP_LINKS,
        }
    }
}
</script>