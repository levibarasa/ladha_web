<template>
    <footer id="footer" class="footer-area" style="position: relative; left: 0; bottom: 0; width: 100%; height: 150 px; "> 
        <div class="footer-copyright">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="copyright text-center text-lg-left mt-10">
                            <p class="text">Powered by <a style="color: #38f9d7" rel="nofollow" href="https://virtualglobal.net">Virtual Global</a> </p>
                        </div> <!--  copyright -->
                    </div>
                    <div class="col-lg-2">
                        <div class="footer-logo text-center mt-10"> 
                            <a class="page-scroll" href="#about">About Ladha</a>
                        </div> <!-- footer logo -->
                    </div>
                    <div class="col-lg-5">
                        <ul class="social text-center text-lg-right mt-10">
                            <li><a href="https://facebook.com"><i class="lni-facebook-filled"></i></a></li>
                            <li><a href="https://twitter.com"><i class="lni-twitter-original"></i></a></li>
                            <li><a href="https://instagram.com"><i class="lni-instagram-original"></i></a></li>
                            <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                        </ul> <!-- social -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- footer copyright -->
    </footer>
</template>
<script>
    import APP_INFO from "../../../helpers/config";
    import {LP_LINKS} from "../../../router/web";
    export default {
        data(){
            return {
                APP_INFO: APP_INFO.APP_INFO,
                LP_LINKS: LP_LINKS,
            }
        }
    }
</script>