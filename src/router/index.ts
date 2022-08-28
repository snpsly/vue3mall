import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/index/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/shoppingcart/index.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/me/index.vue')
      },
      {
        path: '/detail/:iid',
        component: () => import('../views/detail/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
