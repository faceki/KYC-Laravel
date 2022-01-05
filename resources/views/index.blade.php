<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content="id varification app" />
    <title>Faceki</title>
    <!-- Favicon -->
    <!--  Google font cdn link -->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">

    <!--  all css files  -->
    <link rel="stylesheet" href="{{ asset('public/assets/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('public/assets/css/style.css') }}">

</head>


<body>

    <!-- faceki section start -->
    <section style="height: 100vh;" class="faceki-section d-flex flex-wrap align-items-center justify-content-center w-100">
        <div class="container">
            <div class="row">
                <div class="col-sm-10 col-lg-6 col-xl-5 mx-auto">
                    <div class="faceki-card faceki-card-dark">
                        <h2 class="faceki-card__title">Verify Your Identity</h2>
                        <span class="faceki-card__sub-title">It will only take few seconds</span>
                        <ul class="faceki-card__list" id="kyc_items">
                        </ul>
                        <button onclick="goToScannerPage()" class="faceki-card__btn">START</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faceki section end -->

    <!--  all js files -->
    <script src="{{ asset('public/assets/js/faceki-startup.js') }}"></script>
</body>

</html>