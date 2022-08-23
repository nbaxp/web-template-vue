const layouts = import.meta.glob('../layouts/desktop/**/*.vue');
const views = import.meta.glob('../views/desktop/**/*.vue');

function layout(path) {
  return layouts[`../layouts/desktop/${path}.vue`];
}

function view(path) {
  return views[`../views/desktop/${path}.vue`];
}

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout('default-layout'),
    meta: {
      title: '前台',
      icon: 'i-ion-home-outline',
    },
    children: [
      {
        path: 'home',
        component: view('home'),
      },
    ],
  },
  {
    path: '/login',
    component: view('login'),
    meta: {
      hide: true,
    },
  },
  {
    path: '/403',
    component: view('403'),
    meta: {
      hide: true,
    },
  },
  {
    path: '/test',
    component: view('test'),
    meta: {
      hide: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: view('404'),
    meta: {
      hide: true,
    },
  },
  {
    path: '/admin',
    component: layout('admin-layout'),
    redirect: '/admin/home',
    meta: {
      title: '后台',
      icon: 'i-administator-line',
    },
    children: [
      {
        path: 'home',
        component: view('admin/home'),
        meta: {
          title: '仪表盘',
          requiresAuth: true,
        },
      },
      {
        path: 'list',
        component: view('admin/list'),
        meta: {
          title: '列表页',
        },
      },
      {
        path: 'chart',
        component: view('admin/dashboard'),
        meta: {
          title: '图表页',
        },
      },
      {
        path: 'user',
        redirect: '/admin/user/home',
        meta: {
          title: '用户中心',
        },
        children: [
          {
            path: 'home',
            component: view('admin/user/home'),
            meta: {
              title: '用户管理',
            },
          },
          {
            path: 'role',
            component: view('admin/user/role'),
            meta: {
              title: '角色管理',
            },
          },
          {
            path: 'permission',
            component: view('admin/user/permission'),
            meta: {
              title: '权限管理',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
