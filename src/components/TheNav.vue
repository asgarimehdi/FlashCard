<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top border border-3" style="background-color: rgb(33, 53, 95);">
        <div class="container-fluid">
            <a class="navbar-brand vazir" href="#">
                <span class="title1 ">
                    لغت یاد بگیر
                </span>
                <i class="bi bi-translate text-warning"></i>
                
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">صفحه اول</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  " type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    راهنما
                                </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            تنظیمات
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">تغییر رمز</a></li>
                            <li><a class="dropdown-item" href="#">تغییر پروفایل</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><button class="btn btn-success" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">منوی باز شو از سمت
                                    چپ</button></li>
                        </ul>
                    </li>
                </ul>

                <div class="d-flex">
                    <i class="bi bi-bell text-white btn"></i> 
                    
                    <i class="bi bi-power text-warning btn"></i>
                    
                    
                </div>

            </div>
        </div>
    </nav>
</template>