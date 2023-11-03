import Vue from 'vue'
import App from './App.vue'

// 引入 VueRouter
import VueRouter from 'vue-router'

//引入路由器
import router from './router'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios
import axios from 'axios';
// 挂载到vue原型链上
Vue.prototype.axios = axios;


Vue.config.productionTip = false

Vue.use(ElementUI);

//应用插件
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
