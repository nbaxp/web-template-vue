import 'nprogress/nprogress.css';

import { useTitle } from '@vueuse/core';
import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

import { useAppStore, useRouterStore, useUserStore } from '~/store';

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
  useTitle().value = to.meta?.title;
  const appStore = useAppStore();
  const routerStore = useRouterStore();
  routerStore.excludes = [];
  if (to.path.startsWith('/admin/')) {
    if (appStore.isUseTabsRouter) {
      routerStore.add(to);
    } else {
      routerStore.routes = [to];
    }
  }
});

export default router;
