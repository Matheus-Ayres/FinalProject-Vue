import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import CatalogPage from '@/views/CatalogPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import RegisterModerator from '@/views/RegisterModerator.vue'
import AdminArea from '@/views/AdminArea.vue'
import ModeratorArea from '../views/ModeratorArea.vue'
import ProductPage from '../views/ProductPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CatalogPage',
      component: CatalogPage
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
    },
    {
      path: '/ModeratorArea',
      name: 'ModeratorArea',
      component: ModeratorArea
    },
    {
      path: '/ProductPage/:id',
      name: 'ProductPage',
      component: ProductPage
    }
  ],
})

export default router
