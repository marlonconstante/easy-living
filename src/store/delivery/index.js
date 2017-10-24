import Firebase from 'firebase'

const SET_STORES = 'SET_STORES'
const SET_SELECTED_STORES = 'SET_SELECTED_STORES'
const SET_INSTRUCTION = 'SET_INSTRUCTION'

const db = Firebase.database()

export default {
    namespaced: true,
    state: {
        stores: [],
        selectedStores: [],
        instruction: ''
    },
    getters: {
        isLoadedStores: state => {
            return state.stores.length > 0
        }
    },
    mutations: {
        [SET_STORES](state, payload) {
            state.stores = payload
        },
        [SET_SELECTED_STORES](state, payload) {
            state.selectedStores = payload
        },
        [SET_INSTRUCTION](state, payload) {
            state.instruction = payload
        }
    },
    actions: {
        async saveDelivery({ commit, state }, user) {
            await db.ref('deliveries').push().set({
                user,
                instruction: state.instruction,
                stores: state.selectedStores
            })

            commit(SET_SELECTED_STORES, [])
            commit(SET_INSTRUCTION, '')
        },
        async loadStores({ commit }) {
            const stores = []

            const snapshot = await db.ref('stores').once('value')
            snapshot.forEach(child => {
                stores.push(child.val())
            });

            commit(SET_STORES, stores)
        },
        setSelectedStores({ commit }, stores) {
            commit(SET_SELECTED_STORES, stores)
        },
        setInstruction({ commit }, instruction) {
            commit(SET_INSTRUCTION, instruction)
        }
    }
}
