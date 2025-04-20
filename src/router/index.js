import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Users from '@/pages/Users.vue'
import UserDetails from '@/pages/UserDetails.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/users', name: 'Users', component: Users },
  { path: '/users/:id', name: 'UserDetails', component: UserDetails },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router