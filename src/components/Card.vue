<script setup>
import { ref } from "vue"
const showPersian = ref(false)
const hover=ref(false)
const { word } = defineProps(['word'])
const emit = defineEmits("selectRecord")
const emitSelectRecord = (id) => {
    emit("selectRecord", id)
}

</script>
<template>
    <div class="card  bg-gradient  p-1 m-3  col-xl-3 col-lg-3 col-md-5 col-sm-11 rounded-pill"
        @click="showPersian = !showPersian" @mouseover="hover = true" @mouseleave="hover = false"
        :class="{ 'shadow ': hover, 'shadow-lg': !hover }">
        <!-- <img :src="word.img" alt=""> -->


        <div class="card-body text-center">
            <h5 class="card-title">
                <span class="title1">{{ word.name }}</span>
            </h5>
            <p class="card-text vazir " v-if="showPersian">
                <span class="vazir title2">{{ word.persian }}</span>
            </p>

        </div>
        <div class=" text-center" v-if="showPersian">
            <a href="#" @click="emitSelectRecord(word.id)" class="card-link btn shadow rounded border-success">بلد بودم
                <i class="bi bi-check-circle-fill text-success"></i>
            </a>
            <a href="#" class="card-link btn shadow rounded border-danger">
                بلد نبودم
                <i class="bi bi-check-circle-fill text-danger"></i>
            </a>
        </div>
        <div>&nbsp;</div>
    </div>
</template>

