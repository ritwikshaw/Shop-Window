import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import {
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	MenuItem,
	Select,
	InputLabel,
	Typography,
} from '@mui/material'
import { uploadImage } from '../services/utils'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		width: '400px',
		margin: '0 auto',
		padding: '20px',
		border: '1px solid #ccc',
		borderRadius: '8px',
	},
	input: {
		display: 'none',
	},
	label: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100px',
		border: '1px dashed #ccc',
		borderRadius: '8px',
		cursor: 'pointer',
	},
	image: {
		height: '100px',
	},
}))

const AProductForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		name: '',
		price: 0,
		mediaType: '',
		description: '',
		images: [],
	})
	const [imagePreviews, setImagePreviews] = useState([])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleImageChange = (e) => {
		const files = Array.from(e.target.files)
		setFormData({ ...formData, images: files })

		// Generate image previews
		const previews = files.map((file) => URL.createObjectURL(file))
		setImagePreviews(previews)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const { name, price, mediaType, description, images } = formData
		const imageUrls = await Promise.all(images.map(uploadImage))

		const newProduct = {
			name,
			price,
			mediaType,
			description,
			images: imageUrls,
		}

		dispatch({ type: 'ADD_PRODUCT', payload: newProduct })
		setFormData({
			name: '',
			price: 0,
			mediaType: '',
			description: '',
			images: [],
		})
		setImagePreviews([])
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<input
				accept='image/jpeg,image/png'
				className={classes.input}
				id='contained-button-file'
				multiple
				type='file'
				onChange={handleImageChange}
			/>
			<label htmlFor='contained-button-file' className={classes.label}>
				{imagePreviews.length > 0 ? (
					imagePreviews.map((src, index) => (
						<img
							key={index}
							src={src}
							alt='preview'
							className={classes.image}
						/>
					))
				) : (
					<Typography>Add a product photo</Typography>
				)}
			</label>
			<TextField
				name='name'
				label='Product Name'
				value={formData.name}
				onChange={handleInputChange}
				required
			/>
			<FormControl>
				<InputLabel>Media Type</InputLabel>
				<Select
					name='mediaType'
					value={formData.mediaType}
					onChange={handleInputChange}
					required
				>
					<MenuItem value='image'>image</MenuItem>
					<MenuItem value='video'>video</MenuItem>
				</Select>
			</FormControl>
			<TextField
				name='price'
				type='number'
				label='Product price (in Rs.)'
				value={formData.price}
				onChange={handleInputChange}
				required
			/>
			<TextField
				name='description'
				label='Product description'
				value={formData.description}
				onChange={handleInputChange}
				multiline
				rows={4}
			/>
			<Button type='submit' variant='contained' color='primary'>
				Save
			</Button>
			<Button variant='outlined' color='secondary'>
				Cancel
			</Button>
		</form>
	)
}

export default AProductForm
