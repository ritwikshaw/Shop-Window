import { call, put } from 'redux-saga/effects'
import { db } from '../firebase'
import { storeProducts } from '../stores/products'
import { clearError, storeError } from '../stores/error'
import { collection, getDocs } from 'firebase/firestore'

export function* fetchProducts() {
	try {
		const products = []
		const collectionRef = collection(
			db,
			'/allProducts/JrKNsY9gFkDdUA4LzWwo/products'
		)
		const querySnapshot = yield call(getDocs, collectionRef)
		querySnapshot.forEach(
			(doc) => doc.data() && products.push({ ...doc.data(), id: doc.id })
		)

		yield put(storeProducts(products))
		yield put(clearError())
	} catch (error) {
		yield put(storeError(error.message))
	}
}
