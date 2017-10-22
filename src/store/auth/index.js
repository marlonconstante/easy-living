const SET_NEW_USER = 'SET_NEW_USER'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

const emptyUser = {
    name: '',
    birthDate: '',
    address: '',
    community: ''
}

import Firebase from 'firebase'

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
        [SET_NEW_USER](state, payload) {
            state.newUser = payload
        },
        [SET_CURRENT_USER](state, payload) {
            state.currentUser = payload
        }
    },
    actions: {
        clearNewUser({ commit }) {
            commit(SET_NEW_USER, emptyUser)
        },
        setNewUser({ commit }, user) {
            commit(SET_NEW_USER, user)
        },
        async registerNewUser({ commit, state }, { email, password }) {
            const { uid } = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            await Firebase.database().ref(`users/${uid}`).set(state.newUser)

            const registeredUser = Object.assign({}, { uid, email }, state.newUser)
            commit(SET_NEW_USER, emptyUser)
            commit(SET_CURRENT_USER, registeredUser)
        },
        async loginUser({ commit }, { email, password }) {
            const { uid } = await Firebase.auth().signInWithEmailAndPassword(email, password)
            const snapshot = await Firebase.database().ref(`users/${uid}`).once('value')

            const loggedUser = Object.assign({}, { uid, email }, snapshot.val())
            commit(SET_CURRENT_USER, loggedUser)
        },
        async logoutUser({ commit }) {
            await Firebase.auth().signOut()
            commit(SET_CURRENT_USER, null)
        }
    }
}
