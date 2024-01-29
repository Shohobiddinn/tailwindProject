import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import("../views/user.vue")
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../components/DashboardLayout.vue'),
      children: [
        {
          path: '/',
          path: '/home',

          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
      ]
    }, {
      path: '/shimmer',
      name: "Shimmer",
      component:() => import("../views/Shimmer/shimmer.vue")
    }
  ]
})

export default router
