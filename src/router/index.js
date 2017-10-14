import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Customer from '@/pages/Customer'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/customer',
            name: 'Customer',
            component: Customer
        }
    ]
})
