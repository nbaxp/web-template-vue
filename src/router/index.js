import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

import { useUserStore } from '~/store';

import desktopRoutes from './desktopRoutes';
import mobileRoutes from './mobileRoutes';

const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHashHistory(import.meta.url),
  routes: isMobile ? mobileRoutes : desktopRoutes,
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  try {
    const userStore = useUserStore();
    if (to.path !== '/login' && to.meta?.requiresAuth) {
      if (!userStore.token) {
        next({ path: '/login', query: { redirect: to.fullPath } });
      } else if (to.meta?.role && userStore.isInRole(to.meta?.role)) {
        next({ path: '/403', query: { redirect: to.fullPath } });
      } else {
        next();
      }
    } else {
      next();
    }
  } catch (error) {
    NProgress.done();
  }
  console.log(`router.beforeEach:${from.path}->${to.path}`);
});

router.afterEach((to, from) => {
  NProgress.done();
  console.log(`router.afterEach:${from.path}->${to.path}`);
  console.log(to.matched);
  console.log(router.options.routes);
});

export default router;
