import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '@/views/CatalogPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import RegisterModerator from '@/views/RegisterModerator.vue'
import AdminArea from '@/views/AdminArea.vue'

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
      path: '/Profile',
      name: 'Profile',
      component: ProfilePage
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/RegisterModerator',
      name: 'RegisterModerator',
      component: RegisterModerator
    },
    {
      path: '/AdminArea',
      name: 'AdminArea',
      component: AdminArea
    }
  ],
})

export default router
