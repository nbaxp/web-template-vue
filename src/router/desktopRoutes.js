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
      icon: 'home',
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
      title: '登录',
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
    path: '/account',
    component: layout('admin-layout'),
    redirect: '/account/info',
    meta: {
      title: '个人中心',
      icon: 'user',
      hide: true,
    },
    children: [
      {
        path: 'info',
        component: view('account/info'),
        meta: {
          title: '个人信息',
          icon: 'page',
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/admin',
    component: layout('admin-layout'),
    redirect: '/admin/dashboard',
    meta: {
      title: '后台',
      icon: 'administator',
    },
    children: [
      {
        path: 'dashboard',
        component: view('admin/dashboard'),
        meta: {
          title: '仪表盘',
          icon: 'page',
          requiresAuth: true,
        },
      },
      {
        path: 'form',
        component: view('admin/form'),
        meta: {
          title: '表单页',
          icon: 'page',
          cached: true,
        },
      },
      {
        path: 'list',
        component: view('admin/list'),
        meta: {
          title: '列表页',
          icon: 'page',
          cached: true,
          requiresAuth: true,
          permission: 'list-list',
        },
      },
      {
        path: 'chart',
        component: view('admin/chart'),
        meta: {
          title: '图表页',
          icon: 'page',
        },
      },
      {
        path: 'user',
        redirect: '/admin/user/user',
        meta: {
          title: '用户中心',
          icon: 'group',
        },
        children: [
          {
            path: 'user',
            component: view('admin/user/user'),
            meta: {
              title: '用户管理',
              icon: 'user',
              requiresAuth: true,
              permission: 'list-user',
            },
          },
          {
            path: 'role',
            component: view('admin/user/role'),
            meta: {
              title: '角色管理',
              icon: 'role',
              requiresAuth: true,
              permission: 'list-role',
            },
          },
          {
            path: 'permission',
            component: view('admin/user/permission'),
            meta: {
              title: '权限管理',
              icon: 'permission',
              requiresAuth: true,
              permission: 'list-permission',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
