<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>تسجيل الدخول</title>

    <!-- Global stylesheets -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet"
        type="text/css">
    <link href="{{asset('dashboard/css/icons/icomoon/styles.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('dashboard/css/bootstrap.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('dashboard/css/core.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('dashboard/css/components.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('dashboard/css/colors.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('dashboard/css/extras/animate.min.css')}}" rel="stylesheet" type="text/css">
    @yield('style')
    <!-- /global stylesheets -->

    <!-- Core JS files -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/plugins/loaders/pace.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/core/libraries/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/core/libraries/bootstrap.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/plugins/loaders/blockui.min.js')}}"></script>
    <!-- /core JS files -->

    <!-- Theme JS files -->
    <script type="text/javascript" src="{{asset('dashboard/js/plugins/forms/validation/validate.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/plugins/forms/styling/uniform.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/core/app.js')}}"></script>
    <script type="text/javascript" src="{{asset('dashboard/js/pages/login_validation.js')}}"></script>

    <style>
    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ Thin\ 250.otf');
        font-weight: 250;
    }

    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ Light\ 300.otf');
        font-weight: 300;
    }

    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ Regular\ 400.otf');
        font-weight: 400;
    }

    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ Medium\ 500.otf');
        font-weight: 500;
    }

    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ SemiBold\ 600.otf');
        font-weight: 600;
    }

    @font-face {
        font-family: 'montserrat-arabic';
        src: url('./assets/font/Montserrat-Arabic\ Bold\ 700.otf');
        font-weight: 700;
    }

    nav {
        display: flex;
        justify-content: space-between;
        padding: 20px 20px;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 99;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        height: 100px;
    }

    .logo {
        font-size: 29px;
        font-weight: 700;
    }

    .link {
        margin-right: 21px;
    }

    .link a {
        font-size: 16px;
        text-decoration: none;
        font-weight: 700;
        color: #5b60f6;
    }

    .hamburger-icon {
        font-size: 32px;
    }

    .hamburger-icon-box {
        padding: 4px;
        border-radius: 35px;
    }

    .dropdown-menu-custom {
        display: none;
        position: absolute;
        top: 100px;
        width: 90%;
        background-color: #0000007a;
        backdrop-filter: blur(5px);
        border-radius: 0px 0px 5px 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .dropdown-menu-custom ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .dropdown-menu-custom ul li {
        padding: 10px;
    }

    .dropdown-menu-custom ul li a {
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-weight: 600;
        font-family: 'montserrat-arabic';
        display: block;
        font-size: 15px;
    }

    .dropdown-menu-custom ul li:hover {
        background-color: #444;
    }

    .dropdown-menu-custom.show {
        display: block;
    }


    .sidebar-custom {
        position: fixed;
        top: -50px;
        opacity: 0;
        width: 100%;
        height: 100%;
        background-color: #FAFBFD;
        transition: all 0.3s ease;
        z-index: -1;
    }

    .sidebar-custom ul {
        list-style: none;
        padding: 20px 35px;
        margin: 0;
    }


    .sidebar-custom ul li {
        position: relative;
        padding: 10px 0px;
        border-radius: 40px;
        margin: 10px 0px;
        background-color: rgb(255, 255, 255);
        text-align: center;
        overflow: hidden;
        transition: color 0.5s ease;
    }

    .sidebar-custom ul li::before {
        content: "";
        position: absolute;
        top: 0;
        opacity: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 100%;
        background-color: #4958fd;
        z-index: 0;
        border-radius: 40px;
    }

    .sidebar-custom ul li a {
        position: relative;
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-weight: 600;
        font-family: 'montserrat-arabic';
        font-size: 16px;
        z-index: 1;
    }

    .sidebar-custom ul li:hover::before {
        opacity: 1;
        width: 200%;
    }

    .sidebar-custom ul li:hover a {
        color: white;
    }

    .tick-icon {
        position: absolute;
        left: 22px;
        top: 14px;
    }

    .menu-bar-link {
        direction: rtl;
        font-weight: 800;
        font-family: 'montserrat-arabic';
        font-size: 24px;
        color: #4f5afa;
    }

    .menu-last-link-box {
        text-align: center;
    }

    .sidebar-custom.show {
        top: 100px;
        opacity: 1;
        z-index: 98;
    }

    .close-btn {
        text-align: right;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .close-btn .close-icon {
        font-size: 24px;
        color: #ffffff;
        cursor: pointer;
        background-color: #4958fd;
        padding: 5px;
        border-radius: 6px;
    }

    #nav-icon4 {
        width: 30px;
        height: 35px;
        position: relative;
        margin-top: 15px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    #nav-icon4 span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: #000000;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    #nav-icon4 span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon4 span:nth-child(2) {
        top: 9px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon4 span:nth-child(3) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    #nav-icon4.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -1px;
        left: 7px;
    }

    #nav-icon4.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    #nav-icon4.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 20px;
        left: 7px;
    }

    .form-section {
        margin-top: 150px;
        padding: 0px 40px;
        overflow: hidden;
    }

    .heading-welcome {
        font-size: 35px;
        margin: 0;
        background: transparent;
        font-family: 'montserrat-arabic';
        font-weight: 800;
    }

    .red {
        color: red;
    }

    .label {
        font-family: 'montserrat-arabic';
        font-weight: 800;
        margin-left: 10px;
    }

    .input-box {
        border: 2px solid #ebebeb;
        display: flex;
        padding: 10px 20px;
        border-radius: 17px;
        gap: 18px;
        margin-top: 7px;
        
    }

    .input-box .icon-box img {
        width: 25px;
    }

    .input-box .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .input-box input {
        width: 100%;
        border: none;
        border-left: 1px solid #d9d9d9;
        height: 37px;
        padding: 0px 13px;
        font-family: 'montserrat-arabic';
    }

    .input-box input::placeholder {
        color:rgb(212, 212, 212);
        opacity: 1;
    }


    .input-box input:focus {
        outline: none;
    }

    .checkbox-inline {
        font-family: 'montserrat-arabic';
        font-weight: 500;
        font-size: 14px;
        margin-top: 30px;
        margin-left: 20px;
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
    }

    .check-box-custom {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;

        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: 1px solid #000000;
        background-color: white;
        cursor: pointer;
        position: relative;
    }

    .check-box-custom::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .check-box-custom:checked {
        background-color: blue;
    }

    .check-box-custom:checked::before {
        opacity: 1;
    }

    .sign-btn {
        border: none;
        background-color: #4958fd;
        padding: 16px 40px;
        color: white;
        width: 100%;
        font-size: 18px;
        border-radius: 40px;
        box-shadow: 0px 4px 7px -1px #4958fd;
        font-family: 'montserrat-arabic';
        font-weight: 800;
        margin: 20px 0px;
        margin-top: 30px;
    }

    .last-text {
        font-family: 'montserrat-arabic';
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        margin-top: 20px;
    }

    .blue {
        color: #4f5afa;
    }
    </style>
</head>

<body class="login-cover">

    <nav>
        <div class="logo">
            <img src="./assets/img/Go-Now-logo.png" alt="" style="width: 192px">
        </div>
        <div class="left d-flex align-items-center">
            <div class="link">
                <a href="./login-arabic.blade.php">Arabic</a>
            </div>
            <div class="hamburger-icon-box d-flex align-items-center">
                <div id="nav-icon4">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </nav>

    <div class="sidebar-custom" id="sidebar">
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="index.html">الرئيسية</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="#">الخدمات</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="#">معرفة المزيد</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="#">استثمر معنا</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="#">تواصل معنا</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" class="tick-icon"
                    viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(8.53333,8.53333)">
                            <path
                                d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z">
                            </path>
                        </g>
                    </g>
                </svg>
                <a href="#">الدفع والإئتمان</a>
            </li>
        </ul>
        <div class="menu-last-link-box">
            <a href="captain.html" class="menu-bar-link">حقق أرباح بالقيادة <br> !أنضم كَكابتن وابدأ الآن</a>
        </div>
    </div>


    <!-- Page container -->
    <div class="page-container login-container">
        <!-- Page content -->
        <div class="page-content">
            <!-- Main content -->
            <div class="content-wrapper">
                <!-- Content area -->
                <div class="content">
                    <!-- Form with validation -->
                    <section class="form-section">
                        <div class="heading-welcome">
                            Welcome, 👋
                        </div>
                        <form action="{{route('admin/login')}}" method="POST" role="form" class="form-validate">
                            {{csrf_field()}}
                            <div class="input-box-main">
                                <div class="label">Email <span class="red">*</span></div>
                                <div class="input-box">
                                    <div class="icon-box"><img src="./assets/img/man-icon.png" alt=""></div>
                                    <input type="email" class="form-control" placeholder="Email" name="email"
                                        required="required">
                                </div>
                            </div>

                            <div class="input-box-main mt-4">
                                <div class="label">Password <span class="red">*</span></div>
                                <div class="input-box">
                                    <div class="icon-box"><img src="./assets/img/security-tick.png" alt=""></div>
                                    <input type="password" class="form-control" placeholder="Password" name="password"
                                        required="required">
                                </div>
                            </div>

                            <label class="checkbox-inline">
                                <input type="checkbox" class="styled check-box-custom" checked="checked">
                                Remember Me
                            </label>

                            <button type="submit" class="sign-btn">Sign In</button>
                        </form>

                        <p class="last-text">Are you having a problem? <a href="#" class="blue">technical support</a>
                        </p>

                    </section>

                    <!-- <form action="{{route('admin/login')}}" method="POST" role="form" class="form-validate">
                        {{csrf_field()}}
                        <div class="panel panel-body login-form">
                            <div class="text-center">
                                <div class="icon-object border-slate-300 text-slate-300"><i class="icon-reading"></i>
                                </div>
                                <h5 class="content-group"> تسجيل دخول <small class="display-block"> لوحة تحكم
                                        {{setting('site_title')}} </small></h5>
                                {{session('error')}}
                            </div>

                            <div class="form-group ">
                                <input type="email" class="form-control" placeholder="البريد الالكترونى" name="email"
                                    required="required">
                                <div class="form-control-feedback">
                                    <i class="icon-user text-muted"></i>
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="الرقم السرى" name="password"
                                    required="required">
                                <div class="form-control-feedback">
                                    <i class="icon-lock2 text-muted"></i>
                                </div>
                            </div>

                            <div class="form-group login-options">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" class="styled" checked="checked">
                                            تذكرنى
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn bg-blue btn-block">دخول <i
                                        class="icon-arrow-left13 position-right"></i></button>
                            </div>

                        </div>
                    </form> -->
                    <!-- /form with validation -->

                    <!-- Footer -->
                    <div class="footer text-white">
                        <a href="#" class="text-white">جميع الحقوق محفوظه {{setting('site_title')}} &copy;
                            {{date('Y')}}. </a>
                    </div>
                    <!-- /footer -->
                </div>
                <!-- /content area -->
            </div>
            <!-- /main content -->
        </div>
        <!-- /page content -->
    </div>
    <!-- /page container -->
</body>

</html>
<script>
$(document).ready(function() {
    $('.hamburger-icon-box').on('click', function() {
        console.log("hmaburger clicked !")
        $('.sidebar-custom').toggleClass('show');
        // $('.overlay').addClass('show');
        $('#nav-icon4').toggleClass('open');
    });

    // $('.close-btn').on('click', function () {
    //     $('.sidebar-custom').removeClass('show');
    //     $('.overlay').removeClass('show'); 
    // });

    // $('.overlay').on('click', function () {
    //     $('.sidebar-custom').removeClass('show');
    //     $(this).removeClass('show');
    // });
});
</script>