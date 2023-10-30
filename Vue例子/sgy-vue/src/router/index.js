import VueRouter from 'vue-router'

import Users from '../components/Users.vue'
// import Users from '../components/Users'
import Person from '../components/Person'

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
