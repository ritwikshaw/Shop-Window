import { takeLatest, all } from 'redux-saga/effects'
import {
	addProduct,
	addShop,
	deleteProduct,
	fetchProducts,
	fetchUserShops,
	updateProduct,
} from './products'
import { login, updateUserInfo } from './login'
import { initData, startup } from './startup'

export default function* root() {
	yield all([
		takeLatest('STARTUP', startup),
		takeLatest('LOGIN', login),
		takeLatest('userSlice/userIsAdmin', initData),
		takeLatest('UPDATE_USER_INFO', updateUserInfo),
		takeLatest('FETCH_PRODUCTS_REQUEST', fetchProducts),
		takeLatest('FETCH_USER_SHOPS', fetchUserShops),
		takeLatest('ADD_PRODUCT', addProduct),
		takeLatest('ADD_NEW_SHOP', addShop),
		takeLatest('UPDATE_PRODUCT', updateProduct),
		takeLatest('DELETE_PRODUCT', deleteProduct),
	])
}
