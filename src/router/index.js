import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterPage
    }
  ],
})

export default router
