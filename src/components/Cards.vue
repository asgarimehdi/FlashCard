<script setup>
import { ref, onMounted } from "vue"
import Card from "../components/Card.vue"
import CardsHeader from "../components/CardsHeader.vue"
import Result from "../components/Result.vue"
import { allWords } from "../http/words-api"
import q from "../assets/dic.json"
let words = ref([])
const wordsFull = ref([])
onMounted(async () => {
  const { data } = await allWords()
  words.value = ref(data)
  wordsFull.value = ref(data.value)
  console.log(words)
})
const num = 1
const level = ref(0)
const done = []
const notDone = []

const onRecordOk = (id) => {

  words.value = words.value.filter(i => i.id != id)
  //console.log(words)
  if (level.value == 2) {
    done.push(findWord(id));

  }
  if (words.value.length < num) {
    words.value = wordsFull.value
    level.value++
  }


}
const onRecordNotOk = (id) => {

  if (level.value > 1) { // وقتی در لول آخر هستیم
    words.value = words.value.filter(i => i.id != id)
    notDone.push(findWord(id));
    if (words.value.length < num) {

      level.value++
    }
  }

}
const findWord = (idd) => {
  return wordsFull.value.find(({ id }) => id === idd)
}
//console.log(done)
</script>

<template>
  <div class="container-fluid ">

    <CardsHeader :barPercentage="level" />

    <div class="row  justify-content-center bg-dark bg-gradient">

      <Card v-if="level < 3" v-for="word in words.value" :key="word.word" :word="word" @notOkRecord="onRecordNotOk"
        @OkRecord="onRecordOk" />
      <Result v-else :done="done" :notDone="notDone" />

    </div>
  </div>
</template>
