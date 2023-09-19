<template>
    <div class="card  bg-gradient  p-1 m-3  shadow-lg col-xl-3 col-lg-3 col-md-5 col-sm-11 rounded-pill">
        <!-- <img :src="word.img" alt=""> -->


        <div class="card-body text-center">
            <h5 class="card-title">
                <span class="title1">{{ word.name }}</span>
            </h5>
            <p class="card-text vazir">
            <h3>{{ word.persian }}</h3>
            </p>

        </div>
        <div class=" text-center">
            <a href="#" class="card-link btn shadow rounded border-success">بله
                <i class="bi bi-check-circle-fill text-success"></i>
            </a>
            <a href="#" class="card-link btn shadow border-danger rounded">خیر
                <i class="bi bi-x-circle text-danger"></i>
            </a>
        </div>
        <div>&nbsp;</div>
    </div>
</template>
<script setup>
import { defineProps } from "vue"
const { word } = defineProps(['word'])
</script>
