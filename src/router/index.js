/* jshint esversion: 6 */ 
import Vue from 'vue';
import VueRouter from 'vue-router';

const Cart = () => import('@/views/cart/Cart.vue');

const Category = () => import('@/views/category/Category.vue');
const Detail = () => import('@/views/category/Detail.vue');

const Home = () => import('@/views/home/Home.vue');
const HomeChoice = () => import('@/views/home/HomeChoice.vue');
const HomeNew = () => import('@/views/home/HomeNew.vue');
const HomePop = () => import('@/views/home/HomePop.vue');

const Profile = () => import('@/views/profile/Profile.vue');
const numProject = () => import('@/views/numProject.vue');
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
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/homePop'
      },
      {
        path: "homePop",
        component: HomePop
      },
      {
        path: "homeNew",
        component: HomeNew
      },
      {
        path: "homeChoice",
        component: HomeChoice
      },
    ]
  },
  {
    path: '/category',
    // name: '/category',
    component: Category
    //component: () => import('../views/cart/Cart.vue')
  },
  {
    path: '/detail',
    component: Detail
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
  {
    path: '/numProject',
    component: numProject
  },
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

//3.导出router
export default router;

