<script setup>
import Card from "../components/Card.vue"
import CardsHeader from "../components/CardsHeader.vue"
import Result from "../components/Result.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
let words = ref(q)
const wordsFull = ref(q)
const level = ref(0)
const done = []
const onRecordOk = (id) => {

  words.value = words.value.filter(i => i.id != id)
  //console.log(words)
  if (words.value.length < 1) {
    words.value = wordsFull.value
    level.value++
  }

  if (level.value > 2) {
    console.log('Done')
    words.value = 0
  }
  if (level.value > 1) {
    done.push(id);
  }
}
const onRecordNotOk = (id) => {

  if (level.value > 1) { // وقتی در لول آخر هستیم
    words.value = words.value.filter(i => i.id != id)
  }
}

</script>

<template>
  <div class="container-fluid">
    <CardsHeader :barPercentage="level" />
    <div class="row  justify-content-center">
      <Card v-if="level < 3" v-for="word in words" :key="word.id" :word="word" @notOkRecord="onRecordNotOk"
        @OkRecord="onRecordOk" />
      <Result v-else :done="done" />
    </div>
  </div>
</template>
