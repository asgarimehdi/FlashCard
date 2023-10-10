<script setup>
import { ref, onMounted } from "vue"
import Card from "../components/Card.vue"
import CardsHeader from "../components/CardsHeader.vue"
import Result from "../components/Result.vue"
import { allWords } from "../http/words-api"
//import q from "../assets/dic.json"
let words = ref([])
let wordsFull = ref([])
onMounted(async () => {
  const { data } = await allWords()

  words.value= ref(data.data)
  wordsFull.value = ref(data.data)
  //console.log(typeof(words.value.value))
})
const num = 1
const level = ref(0)
const done1 = []
const notDone1 = []

const onRecordOk = (id) => {

  words.value.value = words.value.value.filter(i => i.id != id)

  //console.log(wordsFull)
  if (level.value == 2) {
    done1.push(findWord(id));
    console.log((done1))
  }
  if (words.value.value.length < num) {
    words.value.value = wordsFull.value.value
    level.value++
  }


}
const onRecordNotOk = (id) => {

  if (level.value == 2) { // وقتی در لول آخر هستیم
    words.value.value = words.value.value.filter(i => i.id != id)
    notDone1.push(findWord(id));
    if (words.value.value.length < num) {

      level.value++
    }
  }
  words.value.value=shuffleArray(words.value.value)

}
const shuffleArray = array => {
  // تابعی برای تصادفی کردن یک آرایه
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
const findWord = (idd) => {
  return wordsFull.value.value.find(({ id }) => id === idd)
}

</script>

<template>
  <div class="container-fluid ">

    <CardsHeader :barPercentage="level" />

    <div class="row  justify-content-center  bg-gradient">

      <Card v-if="level < 3" v-for="word in words.value" :key="word.word" :word="word" @notOkRecord="onRecordNotOk"
        @OkRecord="onRecordOk" />
      <Result v-if="level==3" :done="done1" :notDone="notDone1" />

    </div>
  </div>
</template>
