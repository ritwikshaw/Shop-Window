import { takeLatest, all } from 'redux-saga/effects'
import { fetchProducts } from './products'

export default function* root() {
	yield all([yield takeLatest('FETCH_PRODUCTS_REQUEST', fetchProducts)])
}
