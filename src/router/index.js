import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../views/Books.vue'
import Seek from '../views/Seek.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Retrieve from '../views/Retrieve.vue'
import Classify from '../views/Classify.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    // 购物车
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    // 分类
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    // 搜索
    path: '/seek',
    name: 'Seek',
    component: Seek
  },
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // 注册
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    // 找回密码
    path: '/retrieve',
    name: 'Retrieve',
    component: Retrieve
  },

  {
    path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router