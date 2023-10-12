<template>
    <div class="col-4 container">
        <form @submit.prevent="authStore.handleRegister(form)">
            <div class="form-group">
                <label for="Input">نام</label>
                <input type="text" class="form-control" :class="{'is-invalid' : authStore.errors.name}" id="Input" v-model="form.name" aria-describedby="nameHelp"
                    placeholder="Enter Your Name">
                    <div class="invalid-feedback" v-if="authStore.errors.name"> نام را وارد کنید</div>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">ایمیل</label>
                <input type="email" class="form-control" :class="{'is-invalid' : authStore.errors.email}" id="exampleInputEmail1" v-model="form.email"
                    aria-describedby="emailHelp" placeholder="Enter email">
                    <div class="invalid-feedback" v-if="authStore.errors.email"> ایمیل را وارد کنید</div>
            </div>
            <div class="form-group">
                <label for="InputPassword1">پسورد</label>
                <input type="password" class="form-control" :class="{'is-invalid' : authStore.errors.password}" id="InputPassword1" v-model="form.password" placeholder="پسورد">
                <div class="invalid-feedback" v-if="authStore.errors.password"> پسورد را وارد کنید</div>
            </div>
            <div class="form-group">
                <label for="password_confirmation">تکرار پسورد </label>
                <input type="password" class="form-control" :class="{'is-invalid' : authStore.errors.password}" id="password_confirmation" v-model="form.password_confirmation"
                    placeholder="تکرار پسورد">
                    <div class="invalid-feedback" v-if="authStore.errors.password"> {{authStore.errors.password[0]}}</div>
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