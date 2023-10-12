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
                        <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">صفحه اول</router-link>
                    </li>
                    <template v-if="!authStore.user">
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link active" aria-current="page">
                                لاگین</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" class="nav-link active" aria-current="page"> ثبت
                                نام</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link :to="{ name: 'cards' }" class="nav-link active" aria-current="page">
                                کارتها</router-link>
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
                    </template>


                    <li class="nav-item">
                        <a class="nav-link  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            راهنما
                        </a>
                    </li>
                    
                </ul>

                <div class="d-flex" v-if="authStore.user">
                    <i class="bi bi-bell text-white btn"></i>

                    <i class="bi bi-power text-warning btn" @click="authStore.handleLogout"></i>


                </div>

            </div>
        </div>
    </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
</script>