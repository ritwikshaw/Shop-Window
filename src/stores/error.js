import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	error: '',
}
const errorSlice = createSlice({
	name: 'errorSice',
	initialState: INITIAL_STATE,
	reducers: {
		storeError: (state, { payload }) => {
			state.error = payload
			return state
		},
		clearError: () => INITIAL_STATE,
	},
})

// Action creators are generated for each case reducer function
export const { storeError, clearError } = errorSlice.actions
export default errorSlice.reducer
