import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '折扣卡管理系统',
  },
  routes: [
    {
      path: '/',
      wrappers: ['@/wrappers/auth'],
      redirect: '/manage',
    },
    {
      name: '店铺管理',
      path: '/manage',
      wrappers: ['@/wrappers/auth'],
      component: './Manage',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
      menuRender: false,
      hideInMenu: true,
    },
  ],
  npmClient: 'pnpm',
});
