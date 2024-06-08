import { put, call } from 'redux-saga/effects'
import { log2File } from '../services/logService'
import {
	loginFailed,
	loginInProgress,
	loginSuccess,
	userIsAdmin,
} from '../stores/user'
import { getFs } from '../services/dbService'
import { fbLogin } from '../services/userService'

export function* login(loginAction) {
	try {
		log2File('Starting Login Saga....', loginAction)

		yield put(loginInProgress())

		// If fbUserInfo not found or Redux storage is empty
		// Login and get userInfo.
		const user = yield call(fbLogin, loginAction.loginInfo)
		log2File('User SignIn - done', user)

		if (user) {
			yield put(loginSuccess(user))
			yield call(verifyUser, user.uid, user)
		} else {
			yield put(loginFailed('ERROR: User is not a system user'))
		}
	} catch (err) {
		log2File('Error in login', err)
	}
}

export function* verifyUser(uid, user) {
	const userProfile = yield call(getFs, 'user', { userId: uid })
	if (userProfile && userProfile.role === 'admin') {
		yield put(userIsAdmin({ ...user, ...userProfile }))
	}
}
