<script setup>
import Card from "../components/Card.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
const words = ref(q)
//console.log(words)
const onRecordSelected = (id) => {
  console.log("emitted", words.value)
  words.value=words.value.filter(i=>i.id !=id)
}
</script>

<template>
  <div class="container-fluid">
    <div class="row  justify-content-center">
      <Card v-for="word in words" :key="word.id" :word="word" @selectRecord="onRecordSelected" />
    </div>
  </div>
</template>
