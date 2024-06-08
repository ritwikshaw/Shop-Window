// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBI18uxh5ymlulzoKYF1mPWpDj9ybDXplo',
	authDomain: 'advertiser-1a821.firebaseapp.com',
	projectId: 'advertiser-1a821',
	storageBucket: 'advertiser-1a821.appspot.com',
	messagingSenderId: '251315928805',
	appId: '1:251315928805:web:7e6a8113e9df3ed912de0c',
	measurementId: 'G-MM36TENYZD',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
