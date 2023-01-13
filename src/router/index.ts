import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: ()=>import('@/views/Brazil.vue') // Code for Lazy loading
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: ()=>import('@/views/Hawaii.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: ()=>import('@/views/Jamaica.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: ()=>import('@/views/Panama.vue')
  },
  {
    path: '/destination/:id',
    name: 'destination',
    component: ()=>import('@/views/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //linkActiveClass: "active",
  routes
})

export default router
