/* jshint esversion: 6 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';

const Cart = () => import('@/views/cart/Cart.vue');
const Category = () => import('@/views/category/Category.vue');
const Home = () => import('@/views/home/Home.vue');
const Profile = () => import('@/views/profile/Profile.vue');

//1.安装插件
Vue.use(VueRouter);

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    // name: '/home',
    component: Home
    //component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/category',
    // name: '/category',
    component: Category
    //component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/cart',
    // name: '/cart',
    component: Cart
    //component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/profile',
    // name: '/profile',
    component: Profile
    //component: () => import('../views/cart/Cart.vue')
  },
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

//3.导出router
export default router;

