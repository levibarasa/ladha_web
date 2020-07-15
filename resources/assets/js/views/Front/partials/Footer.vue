<template>
<div>
<!-- ======= Footer ======= -->
  <footer id="footer" style="position: relative; left: 0; bottom: 0; width: 100%; height: 150 px; "> 
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Ladha</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ -->
        Designed by <a href="https://virtualglobal.net">Virtual Global</a>
      </div>
    </div>
  </footer><!-- End Footer --> 
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
</div>
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