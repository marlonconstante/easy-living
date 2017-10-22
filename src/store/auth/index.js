const CLEAR_NEW_USER = 'CLEAR_NEW_USER'
const SET_NEW_USER = 'SET_NEW_USER'
const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const emptyUser = {
    name: '',
    birthDate: '',
    address: '',
    community: ''
}

export default {
    state: {
        newUser: emptyUser,
        currentUser: null
    },
    getters: {
        isNewAccount: state => {
            return state.newUser != emptyUser
        },
        isLoggedUser: state => {
            return state.currentUser != null
        }
    },
    mutations: {
        [CLEAR_NEW_USER](state) {
            state.newUser = emptyUser
        },
        [SET_NEW_USER](state, payload) {
            state.newUser = payload
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
        clearNewUser({ commit }) {
            commit(CLEAR_NEW_USER)
        },
        setNewUser({ commit }, user) {
            commit(SET_NEW_USER, user)
        }
    }
}
