const SET_STORES = 'SET_STORES'
const SET_INSTRUCTION = 'SET_INSTRUCTION'

export default {
    namespaced: true,
    state: {
        stores: [],
        instruction: ''
    },
    mutations: {
        [SET_STORES](state, payload) {
            state.stores = payload
        },
        [SET_INSTRUCTION](state, payload) {
            state.instruction = payload
        }
    },
    actions: {
        setStores({ commit }, stores) {
            commit(SET_STORES, stores)
        },
        setInstruction({ commit }, instruction) {
            commit(SET_INSTRUCTION, instruction)
        }
    }
}
