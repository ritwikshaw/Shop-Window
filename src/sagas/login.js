import { put, call, select } from 'redux-saga/effects'
import { log2File } from '../services/logService'
import {
	loginFailed,
	loginInProgress,
	loginSuccess,
	userIsAdmin,
} from '../stores/user'
import { getFs, updateFs } from '../services/dbService'
import { fbLogin, fbSignUp } from '../services/userService'

export function* login(loginAction) {
	try {
		log2File('Starting Login Saga....', loginAction)

		yield put(loginInProgress())

		// If fbUserInfo not found or Redux storage is empty
		// Login and get userInfo.

		const mode = loginAction.mode
		let user = null
		if (mode == 'login') {
			user = yield call(fbLogin, loginAction.loginInfo)
			log2File('User SignIn - done', user)
		} else {
			user = yield call(fbSignUp, loginAction.loginInfo)
		}

		if (user) {
			yield put(loginSuccess(user))
			yield call(verifyUser, user.uid, user)
		} else {
			yield put(loginFailed('ERROR: Wrong email or password'))
		}
	} catch (err) {
		log2File('Error in login', err)
	}
}

export function* updateUserInfo(action) {
	const shopId = action.payload
	if (!shopId) return
	const user = yield select((state) => state.userReducer.user)
	yield call(updateFs, 'SET', 'user', { userId: user.uid }, { shopId })
	yield call(verifyUser, user.uid, user)
}

export function* verifyUser(uid, user) {
	const userProfile = yield call(getFs, 'user', { userId: uid })
	if (userProfile && userProfile.role === 'admin') {
		yield put(userIsAdmin({ ...user, ...userProfile }))
	} else {
		yield put(loginFailed('ERROR: User is not a system user'))
	}
}
