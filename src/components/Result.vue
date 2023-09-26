<script setup>
const { done,notDone } = defineProps(['done','notDone'])
console.log(notDone)
</script>
<template>
    <div class="container">
        <div>
            <h1> جلسه با موفقیت به پایان رسید</h1>
            <h3> برای ذخیره در سرور روی گزینه ثبت نهایی کلیک کنید</h3>
        </div>
        <ul>
            <li v-for="word in done" :key="word">
            <span class="title1">{{ word.name }} </span> 
           <span class="title2"> {{ word.persian }} </span>
            </li>
        </ul>
        بلد نبودید: 
        <ul>
            <li v-for="word in notDone" :key="word">
            <span class="title1">{{ word.name }} </span> 
           <span class="title2"> {{ word.persian }} </span>
            </li>
        </ul>
    </div>
</template>