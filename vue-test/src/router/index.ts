import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import TestView from '@/views/TestView.vue';
import ManyView from '@/views/ManyView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import('../views/AboutView.vue'),
      component: AboutView,
    },
    {
      path: '/many',
      component: ManyView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: TestView,
    },
  ],
});

export default router;
