<script setup>
const { done,notDone } = defineProps(['done','notDone'])
console.log(notDone)
console.log(done)
</script>
<template>
    <div class="container bg-light">
        <div>
            <h1> جلسه با موفقیت به پایان رسید</h1>
            <h3> برای ذخیره در سرور روی گزینه ثبت نهایی کلیک کنید</h3>
        </div>
        <ul>
            <li v-for="word in done" :key="word">
            <span class="title1">{{ word.word }} </span> 
           <span class="title2"> {{ word.fa }} </span>
            </li>
        </ul>
        بلد نبودید: 
        <ul>
            <li v-for="word in notDone" :key="word">
            <span class="title1">{{ word.word }} </span> 
           <span class="title2"> {{ word.fa }} </span>
            </li>
        </ul>
    </div>
</template>