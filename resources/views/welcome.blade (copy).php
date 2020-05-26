
<!DOCTYPE html>
<html lang="zxx">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="description" content="" />
        <meta name="" content="" />
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="canonical" href="" />
        <meta property="og:image" content=""/>
        <meta property="og:site_name" content="Afyamkononi"/>
        <meta property="og:description" content=""/>
        <title>Welcome | Afyamkononi</title>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        @if( Auth::check() )
            <link rel="icon" href="/assets/images/favicon.ico">
            <link href="{{URL::asset('/assets/css/pages/messages.css')}}" rel="stylesheet">
            <link rel="stylesheet" href="{{URL::asset('/assets/css/basestyle/style.css')}}">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" type="text/css" href="{{URL::asset('/assets/css/daterangepicker/daterangepicker.css')}}" />
            <link href="{{URL::asset('/assets/css/fullcalendar/fullcalendar.css')}}" rel="stylesheet">
            <link href="/assets/css/pages/login.css" rel="stylesheet">
            <link rel="stylesheet" href="{{URL::asset('/assets/afyaVideoChat/mgVideoChat-1.13.2.css')}}">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
        @else
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:300,400|Ubuntu:400" />
            <link href="{{URL::asset('/landing/css/DependencyHandler.css')}}" type="text/css" rel="stylesheet"/>
            <link href="{{URL::asset('/landing/css/cmscustomCSSv23.css')}}" type="text/css" rel="stylesheet"/>
            <link href="{{URL::asset('/landing/css/DependencyHandler.css')}}" type="text/css" rel="stylesheet"/>
            <link rel="stylesheet" href="{{URL::asset('/landing/assets/css/foundation.min.css')}}" />
            <link rel="stylesheet" href="{{URL::asset('/landing/assets/css/ppapp.css')}}" />
            <link rel="stylesheet" href="{{URL::asset('/landing/assets/css/dashboard.css')}}" />
            <link rel="stylesheet" href="{{URL::asset('/landinglander/assets/css/jquery.sidr.dark.css')}}">
            <link rel="stylesheet" href="{{URL::asset('/landing/assets/css/style.css')}}" />
            <link rel="stylesheet" href="{{URL::asset('/landing/assets/css/helper.css')}}" />
            <script type="text/javascript" src="{{URL::asset('/landing/assets/js/jquery.js')}}"></script>
            <!-- End Facebook Pixel Code -->
            <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}">
        @endif
    </head>
    <body>
        <div id="root"></div>
        @if( Auth::check() )
            <script src="{{URL::asset('/assets/js/chartjs/Chart.js')}}"></script>
            <script src="{{URL::asset('/assets/js/chartjs/utils.js')}}"></script>
            <script src="{{URL::asset('/assets/js/lib/moment.min.js')}}"></script>
            <script src="{{URL::asset('/assets/js/lib/jquery.min.js')}}"></script>
            <script src="{{URL::asset('/assets/js/lib/popper.min.js')}}"></script>
            <script src="{{URL::asset('/assets/js/bootstrap/bootstrap.min.js')}}"></script>
            <script src="{{URL::asset('/assets/js/chosen-js/chosen.jquery.js')}}"></script>
            <script src="{{URL::asset('/assets/js/fullcalendar/fullcalendar.js')}}"></script>
            <script src="{{URL::asset('/assets/js/daterangepicker/daterangepicker.min.js')}}"></script>
            <script src="{{URL::asset('/assets/js/custom.js')}}"></script>
            <script src="{{URL::asset('/assets/js/pages/dashboard.script.js')}}"></script>
            <script src="{{URL::asset('/dist/js/index.js')}}"></script>
            <script src="{{URL::asset('/assets/afyaVideoChat/mgVideoChat-1.13.2-min.js')}}"></script>
            <script src="{{URL::asset('/assets/common/js/menu.js')}}"></script>
            <script>
                $(document).ready(function(){
                    if (document.getElementById('consult_room_number')){
                        let consult_room = $("#consult_room_number");
                        $('#mgVideoChat').mgVideoChat({
                            wsURL: wsUrlDefault + '?room=3'
                        });
                    }
                });
            </script>
            <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
        @else
            <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
        @endif
    </body>

</html>
