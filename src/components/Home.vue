<template>
    <div class="container col-2" v-if="authStore.user">
        <h1>welcome</h1>
        <h2>{{ authStore.user?.name }}</h2>
        <h2>{{ authStore.user?.email }}</h2>
    </div>
    <div class="container col-2" v-else>
        <h1>login first</h1>        
    </div>
</template>
<script setup>

import { onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser();
})
</script>