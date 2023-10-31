import VueRouter from 'vue-router'

import Users from '../pages/Users.vue'
import Person from '../pages/Person'

const router  =new VueRouter({
    routes:[
        {
            path:'/user',
            component:Users
        },
        {
            path:'/person',
            component:Person
        }
    ]
})

export default router
