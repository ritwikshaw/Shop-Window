import JSZip from 'jszip'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../firebase'

let timestamp = new Date().getTime()
let logBuffer = []

export const log2File = (oLog, ...params) => {
	let log =
		new Date().toISOString() +
		' ' +
		oLog +
		(params ? JSON.stringify(params) : '') +
		'\n'

	if (logBuffer.length < 10000) {
		logBuffer.push(log)
	} else {
		try {
			console.log('Writing to file...', logBuffer.length)

			uploadLogFileToFirebase(timestamp)

			//Remove first log to avoid buffer overflow
			logBuffer = []

			//Change file name for next upload
			timestamp = new Date().getTime()
		} catch (e) {
			console.log('Error Uploading logBuffer to firebase:', e)
		}
	}

	console.log(new Date().toISOString() + ' ', oLog, params)
}

export const uploadLogFileToFirebase = async (timestamp) => {
	try {
		//Create blob from log buffer
		// var logsBlob = new Blob(logBuffer, { type: 'text/plain' });

		//Create zip file from buffer
		var zip = new JSZip()
		zip.file(`${timestamp}.txt`, logBuffer.join(''))

		// Generate the zip file asynchronously
		zip
			.generateAsync({ type: 'blob' })
			.then(function (content) {
				//Upload zip to firebase
				const storageRef = ref(storage, `appLogs/${timestamp}.zip`)
				uploadBytes(storageRef, content)
					.then((snapshot) => {
						console.log('Uploaded a blob or file!')
					})
					.catch((error) => {
						console.log(
							'Error in uploading log file to Firebase Cloud Storage',
							error
						)
					})
			})
			.catch((error) => {
				console.log('Error generating zip file:', error)
			})
	} catch (error) {
		console.log('Error uploading log file to Firebase Cloud Storage:', error)
	}
}
