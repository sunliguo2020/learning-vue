import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  mounted(){
    console.log(Vue.prototype)
  }
}).$mount('#app')
