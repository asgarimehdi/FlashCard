
import { defineStore } from 'pinia'
import api from "../http/api"

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null,
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus
  },
  actions: {
    async getToken() {
      await api.get("/sanctum/csrf-cookie")
    },
    async getUser() {
      this.getToken();
      const data = await api.get("/api/user");
      this.authUser = data.data
    },
    async handleLogin(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await api.post('/login', {
          email: data.email,
          password: data.password
        });
        this.router.push({ name: 'home' })
      }
      catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async handleRegister(data) {
      this.authErrors = [];
      await this.getToken();
      try {
        await api.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        });
        this.router.push({ name: 'home' })
      }
      catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
    ,
    async handleForgetPassword(email) {
      this.authErrors = [];
      await this.getToken();
      try {
        const response = await api.post('/forgot-password', {
          email: email,
        });
        this.authStatus = response.data.status;
      }
      catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
    ,
    async handleResetPassword(resetData) {
      this.authErrors = [];
      await this.getToken();
      try {
        const response = await api.post('/reset-password', resetData);
        this.router.push({ name: 'login' })
        this.authStatus = response.data.status;
      }
      
      catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
    ,
    async handleLogout(data) {

      await api.post('/logout');
      this.authUser = null
      this.router.push({ name: 'login' })
    }
  }

})
