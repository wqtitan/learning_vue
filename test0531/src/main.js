import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 自动找index.js

Vue.config.productionTip = false

new Vue({
  router,  // es6语法 简写
  render: h => h(App)
}).$mount('#app')
