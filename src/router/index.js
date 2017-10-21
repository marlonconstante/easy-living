import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import User from '@/pages/User'
import Welcome from '@/pages/Welcome'
import Instruction from '@/pages/Instruction'
import Stop from '@/pages/Stop'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User
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
