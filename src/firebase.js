import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBUH8pJ2qOMFxblLKM87mFmbT9FYzC6OZU',
  authDomain: 'easy-living-deliveries.firebaseapp.com',
  databaseURL: 'https://easy-living-deliveries.firebaseio.com',
  projectId: 'easy-living-deliveries',
  storageBucket: 'easy-living-deliveries.appspot.com',
  messagingSenderId: '587352170048'
})

export const db = firebaseApp.database()
