import { createRouter, createWebHistory, Router } from 'vue-router';
import series from '@/router/pages/series';

// console.log('routes..', pages);

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
    },
    ...series,
  ],
});

router.beforeEach((to, from, next) => {
  const scrollEle: HTMLElement | null  = document.querySelector('#app');
  if (scrollEle) {
    scrollEle.scrollTo({
      top: 0,
      left: 0,
    });
  }

  next();
});

export default router;
