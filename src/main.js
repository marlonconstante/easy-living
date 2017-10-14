// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'

import './services/firebase'
import './toasted'
import './mask'
import './material'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
