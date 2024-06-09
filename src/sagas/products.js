import { call, put, select } from 'redux-saga/effects'
import { storeProducts } from '../stores/products'
import { clearError, storeError } from '../stores/error'
import { getFsCollection, queryFs, updateFs } from '../services/dbService'
import { log2File } from '../services/logService'
import { storeUserShops } from '../stores/user'

export function* fetchProducts() {
	try {
		const shopId = yield select((state) => state.userReducer.user.shopId)
		if (!shopId) return
		const products = yield call(getFsCollection, 'allProducts', {
			shopId,
		})

		yield put(storeProducts(products))
		yield put(clearError())
	} catch (error) {
		yield put(storeError(error.message))
	}
}

export function* addShop(action) {
	const shopData = action.payload
	const user = yield select((state) => state.userReducer.user)
	try {
		yield call(updateFs, 'ADD', 'shops', {}, { ...shopData, userId: user.uid })
		yield put({ type: 'FETCH_USER_SHOPS' })
	} catch (error) {
		yield put(storeError(error.message))
	}
}

export function* fetchUserShops() {
	const user = yield select((state) => state.userReducer.user)
	try {
		const shops = yield call(
			queryFs,
			'shops',
			{},
			{ field: 'userId', op: '==', val: user.uid }
		)

		if (!shops) return
		yield put(storeUserShops(shops))
	} catch (error) {
		yield put(storeError(error.message))
	}
}

export function* addProduct(action) {
	const product = action.payload
	try {
		const shopId = yield select((state) => state.userReducer.user.shopId)

		log2File('adding product: ', product)
		yield call(updateFs, 'ADD', 'allProducts', { shopId }, product)
		yield put({ type: 'FETCH_PRODUCTS_REQUEST' })
	} catch (error) {
		yield put(storeError(error.message))
	}
}

export function* deleteProduct(action) {
	const id = action.payload
	try {
		const shopId = yield select((state) => state.userReducer.user.shopId)
		yield call(updateFs, 'DELETE', 'product', { shopId, productId: id })
		yield put({ type: 'FETCH_PRODUCTS_REQUEST' })
	} catch (error) {
		yield put(storeError(error.message))
	}
}

export function* updateProduct(action) {
	const product = action.payload
	try {
		const shopId = yield select((state) => state.userReducer.user.shopId)
		yield call(
			updateFs,
			'SET',
			'product',
			{ shopId, productId: product.id },
			product
		)
		yield put({ type: 'FETCH_PRODUCTS_REQUEST' })
	} catch (error) {
		yield put(storeError(error.message))
	}
}
