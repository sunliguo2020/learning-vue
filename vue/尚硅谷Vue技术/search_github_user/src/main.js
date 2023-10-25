//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// 引入 VueRouter
import VueRouter from 'vue-router'

//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false

//应用插件
Vue.use(VueRouter)

//创建vm
new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    //安装全局事件总线 $bus就是当前应用的vm
    Vue.prototype.$bus = this
  },
}).$mount('#app')
