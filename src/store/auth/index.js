import Firebase from 'firebase'

const SET_NEW_USER = 'SET_NEW_USER'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

const db = Firebase.database()
const auth = Firebase.auth()

const emptyUser = {
    name: '',
    birthDate: '',
    address: '',
    community: ''
}

const setUserData = async (user, data) => {
    const { uid } = user
    await db.ref(`users/${uid}`).set(data)
}

const getUserData = async (user) => {
    const { uid, email } = user
    const snapshot = await db.ref(`users/${uid}`).once('value')
    return Object.assign({}, { uid, email }, snapshot.val())
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
            const user = await auth.createUserWithEmailAndPassword(email, password)
            await setUserData(user, state.newUser)
            commit(SET_NEW_USER, emptyUser)
            commit(SET_CURRENT_USER, await getUserData(user))
        },
        async loginUser({ commit }, { email, password }) {
            const user = await auth.signInWithEmailAndPassword(email, password)
            commit(SET_CURRENT_USER, await getUserData(user))
        },
        loadUser({ commit }) {
            return new Promise((resolve, reject) => {
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        commit(SET_CURRENT_USER, await getUserData(user))
                    } else {
                        commit(SET_CURRENT_USER, null)
                    }
                    resolve()
                })
            })
        },
        async logoutUser({ commit }) {
            await auth.signOut()
            commit(SET_CURRENT_USER, null)
        }
    }
}
