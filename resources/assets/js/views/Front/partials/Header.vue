<template>
    <header class="lp-header">
        <div class="container">
            <!-- <nav class="navbar navbar-expand-lg navbar-dark px-0">
                <h1 class="weight-400 m-0"><router-link :to="LP_LINKS.HOME" class="navbar-brand text-white align-middle fw-600">{{APP_INFO.NAME}}</router-link></h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav ml-auto">
                        <li class="px-3 nav-item"><router-link class="nav-link cl-white" :to="LP_LINKS.ABOUT">About</router-link> </li>
                        <li class="px-3 nav-item nav-link"> <a class="">Solutions</a> </li>
                        <li class="px-3 nav-item nav-link"> <a class="">Industry Applications</a> </li>
                        <router-link :to="LP_LINKS.LOGIN_URL" class="nav-item nav-link px-3 btn btn-primary btn-primary-lp circle fs-12 text-uppercase fw-600">My Account</router-link>
                    </ul>
                </div>
            </nav> -->
            <nav class="navbar navbar-expand-lg navbar-dark mb-4">
                <a class="navbar-brand" href="#">{{APP_INFO.NAME}}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto landing-nav">
                        <li class="nav-item active">
                            <router-link class="nav-link hd" :to="LP_LINKS.ABOUT">About</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hd" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Solutions
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                <a class="dropdown-item dropdown-toggle" href="#" id="navbarSubDropdown1" role="button" aria-haspopup="true" aria-expanded="false" data-toggle="dropdown">Retailer Management</a>
                                <div class="dropdown-menu" aria-labelledby="navbarSubDropdown1">
                                    <router-link :to="LP_LINKS.E_RETAIL_COMMERCE" class="dropdown-item" href="#">E-commerce</router-link>
                                    <a class="dropdown-item" href="#">Point of Sale</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle hd" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Industry Applications
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link :to="LP_LINKS.RETAIL" class="dropdown-item">Retail</router-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link :to="LP_LINKS.LOGIN_URL" class="nav-link btn btn-primary btn-primary-lp circle fs-12 text-uppercase fw-600" href="#">My Account</router-link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import APP_INFO from "../../../helpers/config";
    import {LP_LINKS} from "../../../router/web";
    export default {
        name: "Header",
        data(){
            return {
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
            }
        }
    }
</script>