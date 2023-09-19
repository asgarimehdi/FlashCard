<template>
    <div class="card  bg-gradient d-inline-flex p-2 m-3  bg-warning" style="width: 18rem;">
        <img :src="word.img" alt="">
        <div class="card-body">
            <h5 class="card-title">
                <h2>{{ word.name }}</h2>
            </h5>
            <p class="card-text">{{ word.persian }}</p>

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight">منوی باز شو از سمت چپ
                <i class="bi-tools text-white"></i>
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue"
const { word } = defineProps(['word'])
</script>