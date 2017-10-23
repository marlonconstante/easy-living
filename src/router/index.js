import Vue from 'vue'
import Router from 'vue-router'
import Load from '@/pages/Load'
import Login from '@/pages/Login'
import User from '@/pages/User'
import Welcome from '@/pages/Welcome'
import Instruction from '@/pages/Instruction'
import Stop from '@/pages/Stop'
import Thanks from '@/pages/Thanks'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Load
        },
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
        },
        {
            path: '/thanks',
            name: 'thanks',
            component: Thanks
        }
    ]
})

router.push('/')

export default router
