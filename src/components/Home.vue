<template>
    <div class="container col-2">
        <h1>welcome</h1>
        <h2>{{ user?.name }}</h2>
        <h2>{{ user?.email }}</h2>

    </div>
</template>
<script setup>

import {ref,onMounted} from "vue";
import axios from "axios";
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://localhost"
const user=ref();
onMounted(async()=>{
    const data=await axios.get("/api/user");
    user.value=data.data;
})
</script>