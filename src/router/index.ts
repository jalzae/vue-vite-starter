import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/about',
      name: 'HomeView',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/facts',
      name: 'AnimalFacts',
      component: () => import('../pages/AnimalFacts.vue')
    }
  ]
})

export default router