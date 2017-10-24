import Vue from 'vue'
import Toasted from 'vue-toasted'
import './toasted.css'

Vue.use(Toasted, {
    position: 'bottom-center',
    className: 'custom-view',
    duration: 4000
})

Vue.toasted.showInfo = (info) => {
    Vue.toasted.show(info.message, { icon: 'info' })
}

Vue.toasted.showError = (error) => {
    Vue.toasted.show(error.message, { icon: 'error' })
}
