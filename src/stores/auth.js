
import { defineStore } from 'pinia'
import api from "../http/api"

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null
  }),
  getters: {
    user: (state) => state.authUser
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
      await this.getToken();
      await api.post('/login', {
        email: data.email,
        password: data.password
      });
      this.router.push({ name: 'home' })
    },
    async handleRegister(data) {
      await this.getToken();
      await api.post('/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      });
      this.router.push({ name: 'home' })
    }
    ,
    async handleLogout(data) {
      
      await api.post('/logout');
      this.authUser=null
      this.router.push({ name: 'login' })
    }
  }

})
