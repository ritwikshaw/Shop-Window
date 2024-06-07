import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
	products: [],
}
const productSlice = createSlice({
	name: 'productSlice',
	initialState: INITIAL_STATE,
	reducers: {
		storeProducts: (state, { payload }) => {
			state.products = payload
			return state
		},
		clearProductStore: () => INITIAL_STATE,
	},
})

// // Action creators are generated for each case reducer function
export const { storeProducts, clearProductStore } = productSlice.actions
export default productSlice.reducer
