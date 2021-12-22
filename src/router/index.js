import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import('../views/home/home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    meta: {
      showTabBar:true
    }
  },
  {
    path: "/category",
    component: Category,
    meta: {
      showTabBar:true
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      showTabBar:true
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      showTabBar:true
    }
  },
  {
    path: "/detail:iid",
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router