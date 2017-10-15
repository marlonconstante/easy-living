import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Customer from '@/pages/Customer'

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
        }
    ]
})
