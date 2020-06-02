import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// 2.创建VueRouter对象
const router = new VueRouter({
  // 配置路径和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'vactive',
})

// 3. 将router对象传入Vue实例(在"../main.js"中)
export default router
