import { put, delay, call } from 'redux-saga/effects'
import { verifyUser } from '../sagas/login'
import { loginSuccess, logout } from '../stores/user'
import { log2File } from '../services/logService'
import { getCurrentUser } from '../services/userService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup() {
	try {
		// Check if user is already logged in
		yield delay(3000)
		const currentUser = getCurrentUser()

		if (currentUser) {
			log2File('User is already logged in', currentUser)
			yield put(loginSuccess(currentUser))
			yield call(verifyUser, currentUser.uid, currentUser)
		} else {
			log2File('Could not find user', currentUser)
			yield put(logout())
		}
	} catch (err) {
		log2File('Error in startup', err)
	}
}

export function* initData() {
	yield put({ type: 'FETCH_PRODUCTS_REQUEST' })
}
