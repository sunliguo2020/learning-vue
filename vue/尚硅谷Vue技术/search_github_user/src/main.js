//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
// import vueResource from 'vue-resource'


//引入store
import store from './store'

Vue.config.productionTip = false

//使用插件
// Vue.use(vueResource)


//创建vm
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    //安装全局事件总线 $bus就是当前应用的vm
    Vue.prototype.$bus = this
  },
}).$mount('#app')
