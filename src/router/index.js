import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/clientes',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'ProjetoConstrucao',
      component: () => import('../views/ProjetoConstrucao.vue')
    },
    {
      path: '/orcamento',
      name: 'Orcamento',
      component: () => import('../views/Orcamento.vue')
    },
    {
      path: '/resumo',
      name: 'ResumoOrcamento',
      component: () => import('../views/resumo_orca.vue')
    },
  ]
})

export default router
