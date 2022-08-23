const layouts = import.meta.glob('../layouts/mobile/**/*.vue');
const views = import.meta.glob('../views/mobile/**/*.vue');

function layout(path) {
  return layouts[`../layouts/mobile/${path}.vue`];
}

function view(path) {
  return views[`../views/mobile/${path}.vue`];
}

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout('layout'),
    children: [
      {
        path: 'home',
        component: view('home'),
      },
      {
        path: 'category',
        component: view('category'),
      },
      {
        path: 'worth',
        component: view('worth'),
      },
      {
        path: 'cart',
        component: view('cart'),
      },
      {
        path: 'user',
        component: view('user'),
      },
    ],
  },
  {
    path: '/login',
    component: view('login'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: view('404'),
  },
];

export default routes;
