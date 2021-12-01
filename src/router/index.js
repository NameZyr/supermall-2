import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/home/home.vue'
import Cart from 'views/cart/cart.vue'
import Categoty from 'views/categoty/categoty.vue'
import Profile from 'views/profile/profile.vue'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/categoty',
    component: Categoty
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect: "/home"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
