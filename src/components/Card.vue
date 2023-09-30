<script setup>
import { ref } from "vue"
const showPersian = ref(false)
const hover = ref(false)

const showSyn = ref(false)
const showOpp = ref(false)
const showDef = ref(false)
const showEx = ref(false)
const { word } = defineProps(['word'])
const emit = defineEmits(['okRecord', 'notOkRecord'])
const emitOkRecord = (id) => {
    emit("okRecord", id)
}

const emitNotOkRecord = (id) => {
    showPersian.value=false
    showSyn.value=false
    showOpp.value=false
    showDef.value=false
    showEx.value=false
    emit('notOkRecord', id)
}
const showAll=()=>{
    showPersian.value=true
    showSyn.value=true
    showOpp.value=true
    showDef.value=true
    showEx.value=true
}
const soundPlay = (file) => {
    const sound = new Audio(`src/assets/voices/${file}.wav`).play()
}
const str2arr = (tmp) => {
    if (typeof (tmp) == "string")
        return tmp.split(',')
}

</script>
<template>
    <div class="card h-120 bg-gradient   m-1  col-xl-3 col-lg-5 col-md-11 col-sm-11 rounded" @mouseover="hover = true"
        @mouseleave="hover = false" :class="{ 'shadow ': hover, 'shadow-lg': !hover }">


        <div class=" row ">
            <div class="btn-group-vertical col-3 p-0 m-0">


                <button @click="soundPlay(word.word)" class="card-link btn btn-sm btn-warning  m-0">
                    تلفظ
                </button>


                <button @click="showPersian = !showPersian" class="card-link btn btn-sm btn-success  m-0">
                    معنی
                </button>


                <button @click="showSyn = !showSyn" class="card-link btn btn-sm btn-primary  m-0">
                    مترادف
                </button>


                <button @click="showOpp = !showOpp" class="card-link btn btn-sm btn-danger  m-0">
                    متضاد
                </button>


                <button @click="showDef = !showDef" class="card-link btn btn-sm btn-secondary  m-0">
                    تعریف
                </button>


                <button @click="showEx = !showEx" class="card-link btn btn-sm btn-dark  m-0">
                    مثال
                </button>

            </div>
            <div  class=" col-9">
                <img :src="`src/assets/words/${word.word}.jpg`" alt="" class=" col-12 rounded" @click="showAll">
                <div class=" text-center" >
                    <br />
                    <a href="#" @click="emitOkRecord(word.id)"
                        class="card-link btn shadow rounded border-success title2">بلد بودم
                        <i class="bi bi-check-circle-fill text-success"></i>
                    </a>
                    <button @click="emitNotOkRecord(word.id)" class="card-link btn shadow rounded border-danger title2">
                        بلد نبودم
                        <i class="bi bi-x-square text-danger"></i>
                    </button>
                </div>
            </div>



        </div>

        <div class="card-body">


            <h5 class="card-title text-center">

                <span class="title1 bg-light border rounded-pill px-2 pt-0 pb-2">{{ word.word }}
                </span>
                <span class="text-success bg-light badge ">{{ word.type }}</span>
                <div class="fs-6 text-end mt-3" v-show="showDef">{{ word.def }}</div>
            </h5>
            <p class="card-text vazir " v-show="showPersian">
                <span class="vazir title2">{{ word.fa }}</span>


            </p>

            <p class="card-text vazir text-center border border-primary" v-show="showSyn">
            <div class="text-start p-1"> مترادف:</div>
            <span class="title2 text-white bg-primary badge m-1" v-for="syn in str2arr(word.syn)"> {{ syn }} </span>
            </p>

            <p class="card-text vazir text-center border border-danger" v-show="showOpp">
            <div class="text-start p-1"> متضاد:</div>
            <span class="title2 text-white bg-danger badge m-1" v-for="opp in str2arr(word.opp)">{{ opp }}</span>
            </p>

            <div v-show="showEx">
                مثال:

                <p class="card-text vazir text-primary text-end " dir="ltr">
                    <span class="vazir title2">{{ word.ex1 }}</span>
                </p>
                <p class="card-text vazir  text-start ">
                    <span class="vazir title2">{{ word.ex1Fa }}</span>
                </p>

                <p class="card-text vazir text-primary text-end " dir="ltr">
                    <span class="vazir title2">{{ word.ex2 }}</span>
                </p>
                <p class="card-text vazir text-start ">
                    <span class="vazir title2">{{ word.ex2Fa }}</span>
                </p>
            </div>
        </div>



        <div>&nbsp</div>
    </div>
</template>

