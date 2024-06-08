import { takeLatest, all } from 'redux-saga/effects'
import {
	addProduct,
	deleteProduct,
	fetchProducts,
	updateProduct,
} from './products'
import { login } from './login'
import { initData, startup } from './startup'

export default function* root() {
	yield all([
		takeLatest('STARTUP', startup),
		takeLatest('LOGIN', login),
		takeLatest('userSlice/userIsAdmin', initData),
		takeLatest('FETCH_PRODUCTS_REQUEST', fetchProducts),
		takeLatest('ADD_PRODUCT', addProduct),
		takeLatest('UPDATE_PRODUCT', updateProduct),
		takeLatest('DELETE_PRODUCT', deleteProduct),
	])
}
