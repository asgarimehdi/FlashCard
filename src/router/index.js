import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CardsView from '../views/CardsView.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import ResetPassword from '../components/ResetPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: "/password-reset/:token",
      name: 'reset-password',
      component: ResetPassword
    },
  ]
})

export default router
