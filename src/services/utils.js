import { v4 as uuidv4 } from 'uuid'
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const chunkArray = (array, chunkSize) => {
	const results = []
	for (let i = 0; i < array.length; i += chunkSize) {
		results.push(array.slice(i, i + chunkSize))
	}
	return results
}

export const uploadImage = async (image) => {
	const imageRef = ref(storage, `images/${uuidv4()}_${image.name}`)

	// Upload the file and metadata
	const snapshot = await uploadBytes(imageRef, image)
	const downloadURL = await getDownloadURL(snapshot.ref)

	return downloadURL
}
