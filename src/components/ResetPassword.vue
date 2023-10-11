<template>
    <div class="col-4 container">
        <form @submit.prevent="authStore.handleResetPassword(form)">
             
           
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
           
            <button type="submit" class="btn btn-primary">ورود</button>
        </form>
    </div>
</template>
<script setup>

import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
const authStore = useAuthStore();
import {  useRoute } from 'vue-router'

const route = useRoute();

const form = ref({
    password: '',
    passwordConfirmation: '',
    email: route.query.email,    
    token:route.params.token
});

</script>