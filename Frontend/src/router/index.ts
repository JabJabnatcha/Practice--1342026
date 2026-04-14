import { createRouter, createWebHistory } from 'vue-router'

// import หน้า
import Home from '../Views/Home.vue'
import About from '../Views/Detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
})

export default router