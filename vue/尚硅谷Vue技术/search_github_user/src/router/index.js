//该文件专门用来创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import  Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail
                        }
                    ]
                },

            ]
        },

    ]
})

//暴露router
export default router