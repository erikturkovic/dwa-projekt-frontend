import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Ponude.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ponude',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: HomeView
  },
  {
    path: '/ponude',
    name: 'MojePonude',
    component: HomeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
