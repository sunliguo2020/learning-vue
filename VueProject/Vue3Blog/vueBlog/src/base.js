import {message,notification} from 'ant-design-vue'
// 全局引入子组件
import ArticleItem from './components/ArticleItem.vue'

export default {
    install(app){
        //挂载全局对象
        app.config.globalProperties.$message = message
        app.config.globalProperties.$notification = notification

        //挂载全局组件
        app.component('ArticleItem',ArticleItem)
    }
}