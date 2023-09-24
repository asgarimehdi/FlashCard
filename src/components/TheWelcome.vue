<script setup>
import Card from "../components/Card.vue"
import CardsHeader from "../components/CardsHeader.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
let words = ref(q)
const wordsFull = ref(q)
const level = ref(0)
//console.log(words)
const onRecordSelected = (id) => {

  words.value = words.value.filter(i => i.id != id)

  if (words.value.length < 10) {
    words.value = wordsFull.value
    level.value++
  }
  if (level.value > 2) {
    console.log('Done')
    words.value = 0
  }
}

</script>

<template>
  <div class="container-fluid">
    <CardsHeader :barPercentage="level" />
    <div class="row  justify-content-center">
      <Card v-for="word in words" :key="word.id" :word="word" @selectRecord="onRecordSelected" />
    </div>
  </div>
</template>
