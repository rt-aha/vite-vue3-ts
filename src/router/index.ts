import type { Router } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const modules = import.meta.glob('./pages/*.ts', { eager: true });
const allRoutes = [];
for (const path in modules) {
  allRoutes.push(modules[path].default);
}

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    },
    ...allRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  const scrollEle: HTMLElement | null = document.querySelector('#app');
  if (scrollEle) {
    scrollEle.scrollTo({
      top: 0,
      left: 0,
    });
  }

  next();
});

export default router;
