<script setup>
import { ref } from "vue"
const showPersian = ref(false)
const hover = ref(false)
const { word } = defineProps(['word'])
const emit = defineEmits(['okRecord', 'notOkRecord'])
const emitOkRecord = (id) => {
    emit("okRecord", id)
}

const emitNotOkRecord = (id) => {
    emit('notOkRecord', id)
}

</script>
<template>
    <div class="card  bg-gradient  p-1 m-3  col-xl-3 col-lg-5 col-md-11 col-sm-11 rounded" @mouseover="hover = true" 
        @mouseleave="hover = false" :class="{ 'shadow ': hover, 'shadow-lg': !hover }" @click="showPersian = !showPersian">
        <img :src="`/src/assets/words/${word.name}.jpg`" alt="" class=" col-10 container rounded">


        <div class="card-body text-center">

            <h5 class="card-title">
                <span class="title1">{{ word.name }}


                </span>

            </h5>
            <p class="card-text vazir " v-show="showPersian">
                <span class="vazir title2">{{ word.persian }}</span>
            </p>

        </div>
        <div class=" text-center" v-show="showPersian">
            <a href="#" @click="emitOkRecord(word.id)" class="card-link btn shadow rounded border-success title2">بلد بودم
                <i class="bi bi-check-circle-fill text-success"></i>
            </a>
            <button  @click="emitNotOkRecord(word.id)"
                class="card-link btn shadow rounded border-danger title2">
                بلد نبودم
                <i class="bi bi-x-square text-danger"></i>
            </button>
        </div>


        <div>&nbsp</div>
    </div>
</template>

