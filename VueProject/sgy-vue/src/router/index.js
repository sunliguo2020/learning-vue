import VueRouter from 'vue-router'

import Users from '../pages/Users.vue'
import Person from '../pages/Person'
import PersonID from '../pages/PersonId'

const router  =new VueRouter({
    routes:[
        {
            path:'/user',
            component:Users
        },
        {
            path:'/person',
            component:Person
        },
        {
            path:'/personid',
            component:PersonID
        },

    ]
})

export default router
