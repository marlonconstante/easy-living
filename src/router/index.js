import Vue from 'vue'
import Router from 'vue-router'
import Load from '@/pages/Load'
import Login from '@/pages/Login'
import User from '@/pages/User'
import Welcome from '@/pages/Welcome'
import Stop from '@/pages/Stop'
import Instruction from '@/pages/Instruction'
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
            path: '/stop',
            name: 'stop',
            component: Stop
        },
        {
            path: '/instruction',
            name: 'instruction',
            component: Instruction
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
