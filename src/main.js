// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]
/* 初始化路由 */
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* 绑定路由，并将app.vue挂到index */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
默认路由
 */
router.push('/ratings')
