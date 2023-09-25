<script setup>
import Card from "../components/Card.vue"
import CardsHeader from "../components/CardsHeader.vue"
import Result from "../components/Result.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
const num=1
let words = ref(q)
const wordsFull = ref(q)
const level = ref(0)
const done = []

const onRecordOk = (id) => {

  words.value = words.value.filter(i => i.id != id)
  //console.log(words)
  if (level.value == 2) {
    done.push(id);

  }
  if (words.value.length < num) {
    words.value = wordsFull.value
    level.value++
  }


}
const onRecordNotOk = (id) => {

  if (level.value > 1) { // وقتی در لول آخر هستیم
    words.value = words.value.filter(i => i.id != id)
    if (words.value.length < num) {

      level.value++
    }
  }

}
//console.log(done)
</script>

<template>
  <div class="container-fluid">
    <CardsHeader :barPercentage="level" />
    <div class="row  justify-content-center">
      <Card v-if="level < 3" v-for="word in words" :key="word.name" :word="word" @notOkRecord="onRecordNotOk"
        @OkRecord="onRecordOk" />
      <Result v-else :done="done" />
    </div>
  </div>
</template>
