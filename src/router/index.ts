import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/about',
      name: 'Cats',
      component: () => import('../pages/HomeView.vue')
    },
    {
      path: '/facts',
      name: 'Facts',
      component: () => import('../pages/AnimalFacts.vue')
    }
  ]
})

export default router