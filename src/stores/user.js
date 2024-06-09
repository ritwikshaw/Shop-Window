import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	user: {},
	isAdmin: false,
	inProgress: false,
	signedIn: false,
	errMsg: '',
	userShops: [],
}
const userSlice = createSlice({
	name: 'userSlice',
	initialState: INITIAL_STATE,
	reducers: {
		loginInProgress: (state, { payload }) => {
			state.inProgress = true
			return state
		},
		loginSuccess: (state, { payload }) => {
			state.user = payload._user || payload
			state.signedIn = true
			state.inProgress = false
			return state
		},
		loginFailed: (state, { payload }) => {
			state.errMsg = payload
			state.inProgress = false
			return state
		},
		userIsAdmin: (state, { payload }) => {
			state.inProgress = false
			state.isAdmin = true
			state.user = payload
			return state
		},
		storeUserShops: (state, { payload }) => {
			state.userShops = payload
			return state
		},
		logout: (state) => {
			state.user = {}
			state.isAdmin = false
			state.inProgress = false
			state.signedIn = false
			state.errMsg = ''
		},
		clearUserStore: () => INITIAL_STATE,
	},
})

// // Action creators are generated for each case reducer function
export const {
	loginInProgress,
	loginSuccess,
	loginFailed,
	userIsAdmin,
	storeUserShops,
	logout,
	clearUserStore,
} = userSlice.actions
export default userSlice.reducer
