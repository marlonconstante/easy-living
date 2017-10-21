import Vue from 'vue'
import Vuex from 'vuex'
import { createVuexLoader } from 'vuex-loading'

const VuexLoading = createVuexLoader({})

Vue.use(Vuex)
Vue.use(VuexLoading)

export default new Vuex.Store({
    plugins: [VuexLoading.Store]
})
