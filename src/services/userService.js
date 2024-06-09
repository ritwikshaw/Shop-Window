import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import { log2File } from './logService'
import { updateFs } from './dbService'

export const fbLogin = async (user) => {
	try {
		let email = user.email.replace(/\s+/g, '')
		if (!user.email.toString().match(/@/)) {
			email += '@gmail.com'
		}
		const passwd = user.password.replace(/\s+/g, '')
		const auth = getAuth()
		// Attempt to sign in the user
		const userCredential = await signInWithEmailAndPassword(auth, email, passwd)
		console.log('User signed in:', userCredential.user)
	} catch (err) {
		log2File('Login failed', err)
	}
	const auth = getAuth()
	return auth.currentUser ? auth.currentUser : null
}

export const fbSignUp = async (user) => {
	try {
		let email = user.email.replace(/\s+/g, '')
		if (!user.email.toString().match(/@/)) {
			email += '@gmail.com'
		}
		const passwd = user.password.replace(/\s+/g, '')
		const auth = getAuth()
		const newUserCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			passwd
		)
		console.log('New user created:', newUserCredential.user)
		if (!newUserCredential.user) {
			return null
		}
		await updateFs(
			'SET',
			'user',
			{ userId: newUserCredential.user.uid },
			{
				name: newUserCredential.user.displayName || '',
				email: newUserCredential.user.email || '',
				role: 'admin',
				shopId: '',
			}
		)
	} catch (err) {
		log2File('Registration failed', err)
	}
	const auth = getAuth()
	return auth.currentUser ? auth.currentUser : null
}

export const getCurrentUser = () => {
	try {
		const auth = getAuth()
		return auth.currentUser
	} catch (err) {
		log2File('Error in getCurrentUser', err)
	}
}
