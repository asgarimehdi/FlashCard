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
const soundPlay = (file) => {
    const sound = new Audio(`src/assets/voices/${file}.wav`).play()
}

</script>
<template>
    <div class="card h-100 bg-gradient  p-2 m-2  col-xl-3 col-lg-5 col-md-11 col-sm-11 rounded"
        @mouseover="hover = true" @mouseleave="hover = false" :class="{ 'shadow ': hover, 'shadow-lg': !hover }"
        @click="showPersian = !showPersian">
<div><img :src="`src/assets/words/${word.name}.jpg`" alt="" class=" col-12  rounded"></div>
        
        <div class="fs-6">
                <button href="#" @click="soundPlay(word.name)" class="card-link btn ">
                    <i class="bi bi-volume-up-fill text-primary"></i>
                </button>
                <span class="text-primary bg-light badge ">{{ word.type }}</span>
            </div>

        <div class="card-body">
            

            <h5 class="card-title text-center">

                <span class="title1 bg-light border rounded-pill px-2 pt-0 pb-2">{{ word.name }}
                </span>
                <div class="fs-6 text-end mt-3">{{ word.dif }}</div>
            </h5>
            <p class="card-text vazir " v-show="showPersian">
                <span class="vazir title2">{{ word.persian }}</span>


            </p>

            <p class="card-text vazir text-center border border-success" v-show="showPersian">
            <div class="text-start p-1"> مترادف:</div>
            <span class="title2 text-white bg-success badge m-1" v-for="syn in word.syn"> {{ syn }} </span>
            </p>

            <p class="card-text vazir text-center border border-danger" v-show="showPersian">
            <div class="text-start p-1"> متضاد:</div>
            <span class="title2 text-white bg-danger badge m-1" v-for="opp in word.opp">{{ opp }}</span>
            </p>

            <div v-show="showPersian">
                مثال:

                <p class="card-text vazir text-primary text-end " dir="ltr">
                    <span class="vazir title2">{{ word.ex1 }}</span>
                </p>
                <p class="card-text vazir  text-start ">
                    <span class="vazir title2">{{ word.ex1Trans }}</span>
                </p>

                <p class="card-text vazir text-primary text-end " dir="ltr">
                    <span class="vazir title2">{{ word.ex2 }}</span>
                </p>
                <p class="card-text vazir text-start ">
                    <span class="vazir title2">{{ word.ex2Trans }}</span>
                </p>
            </div>
        </div>
        <div class=" text-center" v-show="showPersian">

            <a href="#" @click="emitOkRecord(word.id)" class="card-link btn shadow rounded border-success title2">بلد بودم
                <i class="bi bi-check-circle-fill text-success"></i>
            </a>
            <button @click="emitNotOkRecord(word.id)" class="card-link btn shadow rounded border-danger title2">
                بلد نبودم
                <i class="bi bi-x-square text-danger"></i>
            </button>
        </div>


        <div>&nbsp</div>
    </div>
</template>

