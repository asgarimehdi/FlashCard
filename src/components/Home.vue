<template>
    <div class="container col-2" v-if="authStore.user">
        <h1>welcome</h1>
        <h2>{{ authStore.user?.name }}</h2>
        <h2>{{ authStore.user?.email }}</h2>
    </div>
    <div class="container col-3 p-5" v-else>

        لطفا منتظر باشید

    </div>
</template>
<script setup>
import {  useRouter } from 'vue-router'

const router = useRouter();
import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser();
})
setTimeout(() => {
    check();
}, 500);
const check = () => {
    if (!authStore.user)
        router.push({ name: 'login' })
}


// if(loggedIn)
//      router.push({ name: 'login' })

</script>