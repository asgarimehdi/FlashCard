<template>
    <div class="col-4 container">
        <form @submit.prevent="authStore.handleRegister(form)">
            <div class="form-group">
                <label for="Input">نام</label>
                <input type="text" class="form-control" id="Input" v-model="form.name" aria-describedby="nameHelp"
                    placeholder="Enter Your Name">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">ایمیل</label>
                <input type="email" class="form-control" id="exampleInputEmail1" v-model="form.email"
                    aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="InputPassword1">پسورد</label>
                <input type="password" class="form-control" id="InputPassword1" v-model="form.password" placeholder="پسورد">
            </div>
            <div class="form-group">
                <label for="password_confirmation">تکرار پسورد </label>
                <input type="password" class="form-control" id="password_confirmation" v-model="form.password_confirmation"
                    placeholder="تکرار پسورد">
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

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();


const form = ref({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
});

</script>