import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { log2File } from './logService'

export const fbLogin = async (user) => {
	try {
		let email = user.email.replace(/\s+/g, '')
		if (!user.email.toString().match(/@/)) {
			email += '@freshot.in'
		}
		const passwd = user.password.replace(/\s+/g, '')
		const auth = getAuth()
		await signInWithEmailAndPassword(auth, email, passwd)
	} catch (err) {
		log2File('Login failed', err)
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
