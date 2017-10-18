import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Customer from '@/pages/Customer'
import Welcome from '@/pages/Welcome'
import Instruction from '@/pages/Instruction'
import Stop from '@/pages/Stop'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            props: (route) => ({ customer: route.query })
        },
        {
            path: '/customer',
            name: 'customer',
            component: Customer
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/instruction',
            name: 'instruction',
            component: Instruction
        },
        {
            path: '/stop',
            name: 'stop',
            component: Stop
        }
    ]
})
