<script setup>
import { ref } from "vue"
const showPersian = ref(false)
const hover = ref(false)
const { word } = defineProps(['word'])
const emit = defineEmits(['okRecord','notOkRecord'])
const emitOkRecord = (id) => {
    emit("okRecord", id)
}

const emitNotOkRecord = (id) => {    
    emit('notOkRecord', id)
}

</script>
<template>
    <div class="card  bg-gradient  p-1 m-3  col-xl-3 col-lg-5 col-md-11 col-sm-11 rounded-pill" @mouseover="hover = true"
        @mouseleave="hover = false" :class="{ 'shadow ': hover, 'shadow-lg': !hover }">
        <!-- <img :src="word.img" alt=""> -->


        <div class="card-body text-center">
            
            <h5 class="card-title" @click="showPersian = !showPersian">
                <span class="title1">{{ word.name }}
                    
                <i class="bi bi-translate text-success title2"></i>
            </span>
                
            </h5>
            <p class="card-text vazir " v-if="showPersian">
                <span class="vazir title2">{{ word.persian }}</span>
            </p>

        </div>
        <div class=" text-center" v-if="showPersian">
            <a href="#" @click="emitOkRecord(word.id)" class="card-link btn shadow rounded border-success title2">بلد بودم
                <i class="bi bi-check-circle-fill text-success"></i>
            </a>
            <a href="#" @click="showPersian = !showPersian,emitNotOkRecord(word.id)" class="card-link btn shadow rounded border-danger title2">
                بلد نبودم
                <i class="bi bi-x-square text-danger"></i>
            </a>
        </div>
        <div>&nbsp;</div>
    </div>
</template>

