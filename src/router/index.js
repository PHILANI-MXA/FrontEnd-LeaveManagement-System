import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  ,
  {
    path: '/applyForLeave',
    name: 'applyForLeave',
    component: () => import(/* webpackChunkName: "about" */ '../views/applyLeave.vue')
  },
  {
    path: '/registerNewEmployee',
    name: 'registerNewEmployee',
    component: () => import(/* webpackChunkName: "about" */ '../views/registerEmployee.vue')
  },
  {
    path: '/showLeaves',
    name: 'showLeaves',
    component: () => import(/* webpackChunkName: "about" */ '../views/showLeave.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
