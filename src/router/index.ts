import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/home/Index.vue')
  },
  {
    path: '/search',
    component: () => import('../components/search/Index.vue')
  },
  {
    path: '/detail',
    component: () => import('../components/detail/Index.vue')
  },
  {
    path: '/video',
    component: () => import('../components/video/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router