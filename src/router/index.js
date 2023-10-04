import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import CardsView from '../views/CardsView.vue'
import Login from '../components/Login.vue'

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
    }
  ]
})

export default router
