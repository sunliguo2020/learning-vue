import {message,notification} from 'ant-design-vue'

export default {
    install(app){
        //挂载全局对象
        app.config.globalProperties.$message = message
        app.config.globalProperties.$notification = notification
    }
}