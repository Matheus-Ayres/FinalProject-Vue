import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '@/views/NFTsPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import NFTsPage from '@/views/NFTsPage.vue'
import HqsPage from '@/views/HqsPage.vue'
import GameAssetsPage from '@/views/GameAssetsPage.vue'
import TCGCardsPage from '@/views/TCGCardsPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import RegisterModerator from '@/views/RegisterModerator.vue'

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
      path: '/NFTsPage',
      name: 'NFTsPage',
      component: NFTsPage
    },
    {
      path: '/GameAssetsPage',
      name: 'GameAssetsPage',
      component: GameAssetsPage
    },
    {
      path: '/HQsPage',
      name: 'HQsPage',
      component: HqsPage
    },
    {
      path: '/TCGCardsPage',
      name: 'TCGCardsPage',
      component: TCGCardsPage
    },
    {
      path: '/RegisterModerator',
      name: 'RegisterModerator',
      component: RegisterModerator
    },
  ],
})

export default router
