import { createRouter, createWebHistory } from 'vue-router'
import HomeRoute from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeRoute
    }
  ]
})

export default router
