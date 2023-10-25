//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'
//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)

//响应组件中的动作
const actions = {
    jia(context, value) {
        console.log('actions中的jia被调用了')
        context.commit('JIA', value)
    },
    jian(context, value) {
        console.log('actions中的jian被调用了')
        context.commit('JIAN', value)
    }
}
//操作数据
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了')
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了')
        state.sum -= value
    }
}
//用于存储数据
const state = {
    sum: 0, //当前的和
}

//创建store
const store = new Vuex.Store({
    actions,
    mutations,
    state
})

//暴露store
export default store