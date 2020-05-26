<template>
    <header class="header sticky-top">
        <nav class="navbar navbar-light bg-white px-sm-4 ">
            <a class="navbar-brand py-2 d-md-none  m-0 material-icons toggle-sidebar" href="#">menu</a>
            <ul class="navbar-nav flex-row ml-auto">
                <li class="nav-item" data-toggle="tooltip" data-placement="bottom" title="Switch Application">
                    <a data-toggle="modal" data-target="#switchApp" class="nav-link cursor-pointer"><span class="material-icons align-middle">apps</span></a>
                </li>
                <li class="nav-item notification">
                    <a href="#" id="notificationDropdown" data-toggle="dropdown" class="nav-link"><span class="material-icons align-middle">notifications_none</span></a>
                </li>
                <li class="nav-item ml-sm-3 user-logedin dropdown">
                    <a href="#" id="userLogedinDropdown" data-toggle="dropdown" class="nav-link weight-400 dropdown-toggle"><img src="/assets/icons/dashboard/staff1.png" class="mr-2 rounded" width="28">User</a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userLogedinDropdown">
                        <a class="dropdown-item cursor-pointer">Log Out</a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "TopBar",
    data(){
        return {
        }
    },
}
</script>