<template>
    <div class="col-4 container">
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                
                <label for="exampleInputEmail1">ایمیل</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="form.email" aria-describedby="emailHelp"
                    placeholder="Enter email">
                
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">پسورد</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password" placeholder="Password">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">یادم می مونه</label>
            </div>
            <button type="submit" class="btn btn-primary">ورود</button>
        </form>
    </div>
</template>
<script setup>

import {ref} from "vue";
import axios from "../components/axios";

import { useRouter } from "vue-router";

const router=useRouter();

const getToken=async()=>{
    await axios.get("/sanctum/csrf-cookie")
}
const form=ref({
    email:'',
    password:''
});
const handleLogin=async()=>{
    await getToken();
    await axios.post('/login',{
        email:form.value.email,
        password:form.value.password
    });
    router.push({ name: 'cards' })
}
</script>