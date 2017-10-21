import Vue from 'vue'

Vue.prototype.$utils = {
    async validateAll(el, validator) {
        if (await validator.validateAll()) {
            return true
        } else {
            this.focusInFirstErrorField(el, validator)
            return false
        }
    },
    focusInFirstErrorField(el, validator) {
        const { items } = validator.errors
        if (items.length) {
            const { id } = items[0]
            const element = el.querySelector(`[data-vv-id=${id}]`)
            element.focus()
        }
    }
}
