<script setup>
import Card from "../components/Card.vue"
import q from "../assets/dic.json"
import { ref } from "vue"
const words = ref(q)
//console.log(words)
</script>

<template>
  <div class="container-fluid">
    <div class="row  justify-content-center">
      <Card v-for="word in words" :key="word.id" :word="word" />
    </div>
  </div>
</template>
