import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexLoader } from 'vuex-loading'
import auth from './auth'
import delivery from './delivery'

const VuexLoading = createVuexLoader({})

Vue.use(Vuex)
Vue.use(VuexLoading)

export default new Vuex.Store({
    modules: {
        auth,
        delivery
    },
    plugins: [VuexLoading.Store]
})
