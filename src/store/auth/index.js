const SET_NEW_USER = 'SET_NEW_USER'
const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export default {
    state: {
        newUser: null,
        currentUser: null
    },
    getters: {
        isNewAccount: state => {
            return state.newUser != null
        },
        isLoggedUser: state => {
            return state.currentUser != null
        }
    },
    mutations: {
        [SET_NEW_USER](state, payload) {
            const { name, birthDate, address, community } = payload
            state.newUser = {
                name,
                birthDate,
                address,
                community
            }
        },
        [REGISTER_NEW_USER](state, payload) {

        },
        [LOGIN_USER](state, payload) {

        },
        [LOGOUT_USER](state) {
            state.currentUser = null
        }
    },
    actions: {
        setNewUser({ commit }, user) {
            commit(SET_NEW_USER, user)
        }
    }
}
