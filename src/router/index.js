import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import GameDetails from '../views/GameDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games/:id',
    name: 'GameDetails',
    component: ()=> import('../views/GameDetails.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
