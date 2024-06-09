import {
	doc,
	setDoc,
	addDoc,
	collection,
	updateDoc,
	deleteDoc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore'
import { db } from '../firebase'
import { map } from 'lodash'
import { log2File } from './logService'

const paths = {
	allProducts: 'allProducts/$shopId/products',
	product: 'allProducts/$shopId/products/$productId',
	user: 'users/$userId',
	shops: 'shops',
}

function getPath(pathId, params) {
	try {
		let path = paths[pathId]

		map(params, (v, k) => {
			path = path.replace(`\$${k}`, v)
		})

		return path
	} catch (err) {
		log2File('Error in getPath: ', err, pathId, params)
		return 'undefined'
	}
}

export const getFs = async (pathId, params) => {
	try {
		const path = getPath(pathId, params)
		const docRef = doc(db, path)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			return docSnap.data()
		} else {
			console.log('No such document!')
			return {}
		}
	} catch (err) {
		log2File('Error in getFs: ', err, pathId, params)
		return {}
	}
}

export const queryFs = async (pathId, params, q) => {
	try {
		const path = getPath(pathId, params)
		const collectionRef = collection(db, path)
		const queryRef = query(collectionRef, where(q.field, q.op, q.val))

		const qSnapshot = await getDocs(queryRef)

		let data = []
		qSnapshot.forEach(
			(doc) => doc.data() && data.push({ ...doc.data(), id: doc.id })
		)

		return data
	} catch (err) {
		log2File('Error in queryFs: ', err, pathId, params)
		return {}
	}
}

export const getFsCollection = async (pathId, params) => {
	try {
		const path = getPath(pathId, params)
		let docs = []
		const collectionRef = collection(db, path)
		const querySnapshot = await getDocs(collectionRef)
		querySnapshot.forEach(
			(doc) => doc.data() && docs.push({ ...doc.data(), id: doc.id })
		)

		return docs
	} catch (err) {
		log2File('Error in getFsCollection: ', err, pathId, params)
		return []
	}
}

export const updateFs = async (operation, pathId, params, newObj = {}) => {
	const p = getPath(pathId, params)
	try {
		if (operation == 'SET') {
			await setDoc(doc(db, p), newObj, { merge: true })
		} else if (operation == 'UPDATE') {
			await updateDoc(doc(db, p), newObj)
		} else if (operation == 'ADD') {
			await addDoc(collection(db, p), newObj)
		} else if (operation == 'DELETE') {
			await deleteDoc(doc(db, p))
		}
	} catch (e) {
		log2File('updateFs error is: ', e, operation, pathId, p, params, newObj)
	}
}

export const fsDocRef = (pathId, params) => {
	try {
		const path = getPath(pathId, params)
		return doc(db, path)
	} catch (err) {
		log2File('Error in fsDocRef: ', err, pathId, params)
		return {}
	}
}

export const fsCollectionRef = (pathId, params) => {
	try {
		const path = getPath(pathId, params)
		return collection(db, path)
	} catch (err) {
		log2File('Error in fsCollectionRef: ', err, pathId, params)
		return {}
	}
}
