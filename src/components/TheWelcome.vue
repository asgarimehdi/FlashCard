<script setup>
import Card from "../components/Card.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
let words = ref(q)
const wordsFull=ref(q)
//console.log(words)
const onRecordSelected = (id) => {
  
  words.value=words.value.filter(i=>i.id !=id)
  if(words.value.length<1)
  words=wordsFull
  //console.log(wordsFull.value.length)
}
</script>

<template>
  <div class="container-fluid">
    <div class="row  justify-content-center">
      <Card v-for="word in words" :key="word.id" :word="word" @selectRecord="onRecordSelected" />
    </div>
  </div>
</template>
