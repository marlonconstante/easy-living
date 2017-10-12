// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueFire from 'vuefire'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueFire)
Vue.use(VueMaterial)

Vue.use(VueMask)
Vue.directive('mask', VueMaskDirective)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
