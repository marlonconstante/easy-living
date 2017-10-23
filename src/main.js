// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import './main.css'
import './plugins/material'
import './plugins/toasted'
import './plugins/mask'
import './plugins/validate'
import './services/firebase'
import './utils'

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.directive('focus', {
    inserted(el) {
        setTimeout(() => {
            if (el.classList.contains('inputText')) {
                el.querySelector('input').focus()
            } else if (el.classList.contains('inputTextArea')) {
                el.querySelector('textarea').focus()
            } else if (el.classList.contains('roundButton')) {
                el.querySelector('button').focus()
            } else {
                el.focus()
            }
        }, 1000)
    }
})

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
