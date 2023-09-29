import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import ListView from '../views/ListView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/detail/:_id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFoundView
    },
  ]
})

export default router
