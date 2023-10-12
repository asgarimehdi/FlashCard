<template>
    <div class="col-4 container bg-light rounded p-3 mt-3 vazir">
        <h2>فراموشی رمز عبور</h2>
        <div class="m-2 p-2 text-success" v-if="authStore.status">{{ authStore.status }}</div>
        <form @submit.prevent="authStore.handleForgetPassword(email)">
            <div class="form-group">
                
                <label for="exampleInputEmail1">ایمیل</label>
                <input type="email" class="form-control " :class="{'is-invalid' : authStore.errors.email}"  id="exampleInputEmail1" v-model="email" aria-describedby="emailHelp"
                    placeholder="Enter email" >
                    <div class="invalid-feedback" v-if="authStore.errors.email">ایمیل صحیح را وارد کنید</div>
            </div>            
            
            <button type="submit" class="btn btn-primary mt-1">ثبت</button>
        </form>
    </div>
</template>
<script setup>

import {ref} from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
const email=ref('');

</script>