import React, { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import { useDispatch } from 'react-redux'

const libraries = ['places']

const AShopForm = () => {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [location, setLocation] = useState(null)
	const [fullAddress, setFullAddress] = useState('')

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: 'AIzaSyA6Oz-ZHJkrHsAQsY0qhv7lH2KCT4JWJ5s',
		libraries,
	})

	const mapClickHandler = (event) => {
		setLocation({ lat: event.latLng.lat(), lng: event.latLng.lng() })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!name || !location || !fullAddress) {
			alert('Please fill all the fields')
			return
		}

		const shopData = {
			name,
			location,
			fullAddress,
		}

		try {
			dispatch({ type: 'ADD_NEW_SHOP', payload: shopData })
			alert('Shop added successfully')
			// Clear the form
			setName('')
			setLocation(null)
			setFullAddress('')
		} catch (error) {
			console.error('Error adding shop: ', error)
		}
	}

	if (loadError) return <div>Error loading maps</div>
	if (!isLoaded) return <div>Loading Maps...</div>

	return (
		<Container>
			<Typography variant='h4' component='h1' gutterBottom>
				Add Shop
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Shop Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					margin='normal'
					required
				/>
				<Typography variant='h6'>Location</Typography>
				<Box sx={{ height: '400px', width: '100%', marginBottom: '16px' }}>
					<GoogleMap
						mapContainerStyle={{ height: '100%', width: '100%' }}
						zoom={10}
						center={{ lat: 12.867687, lng: 77.597409 }}
						onClick={mapClickHandler}
					>
						{location && (
							<Marker position={{ lat: location.lat, lng: location.lng }} />
						)}
					</GoogleMap>
				</Box>
				<TextField
					label='Full Address'
					value={fullAddress}
					onChange={(e) => setFullAddress(e.target.value)}
					fullWidth
					margin='normal'
					required
				/>
				<Button type='submit' variant='contained' color='primary'>
					Add Shop
				</Button>
			</form>
		</Container>
	)
}

export default AShopForm
