<template>
    <div class="col-4 container">
        <form @submit.prevent="authStore.handleLogin(form)">
            <div class="form-group">

                <label for="exampleInputEmail1">ایمیل</label>
                <input type="email" class="form-control " :class="{ 'is-invalid': authStore.errors.email }"
                    id="exampleInputEmail1" v-model="form.email" aria-describedby="emailHelp" placeholder="Enter email">
                <div class="invalid-feedback" v-if="authStore.errors.email">ایمیل صحیح را وارد کنید</div>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">پسورد</label>
                <input type="password" class="form-control" :class="{ 'is-invalid': authStore.errors.password }"
                    id="exampleInputPassword1" v-model="form.password" placeholder="Password">
                <div class="invalid-feedback" v-if="authStore.errors.password"> پسورد را وارد کنید</div>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">یادم می مونه</label>
            </div>
            <button type="submit" class="btn btn-primary">ورود</button>
        </form>
        <router-link :to="{ name: 'forgot-password' }" class="nav-link active" aria-current="page">
            فراموشی رمز عبور
        </router-link>
    </div>
</template>
<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();

const form = ref({
    email: '',
    password: ''
});

</script>