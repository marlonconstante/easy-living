import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'

Vue.use(VueFire)

const firebaseApp = Firebase.initializeApp({
    apiKey: 'AIzaSyBUH8pJ2qOMFxblLKM87mFmbT9FYzC6OZU',
    authDomain: 'easy-living-deliveries.firebaseapp.com',
    databaseURL: 'https://easy-living-deliveries.firebaseio.com',
    projectId: 'easy-living-deliveries',
    storageBucket: 'easy-living-deliveries.appspot.com',
    messagingSenderId: '587352170048'
})

const db = firebaseApp.database()
const auth = firebaseApp.auth()

export {
    db,
    auth
}
