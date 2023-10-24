//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)

//响应组件中的动作
const actions = {

}
//操作数据
const mutations = {

}
//用于存储数据
const sate = {

}

//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    sate
})

//暴露store
export default store