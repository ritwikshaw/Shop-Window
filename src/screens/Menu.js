import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AListCarousel from '../components/AListCarousel'
import { makeStyles } from '@mui/styles'
import ACard from '../components/ACard'
import { map, isEmpty } from 'lodash'
import { chunkArray } from '../services/utils'
import AShopForm from '../components/AShopForm'
import {
	Alert,
	Button,
	FormControl,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Menu() {
	const classes = useStyles()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [currentChunkIndex, setCurrentChunkIndex] = useState(0)
	const [shopId, setShopId] = useState('')
	const user = useSelector((state) => state.userReducer.user)
	const userShops = useSelector((state) => state.userReducer.userShops)
	const products = useSelector((state) => state.ProductReducer.products)
	const chunkSize = 8

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentChunkIndex((prevIndex) =>
				prevIndex + 1 === productChunks.length ? 0 : prevIndex + 1
			)
		}, 10000)

		return () => clearInterval(interval)
	}, [products])

	const productChunks = chunkArray(products, chunkSize)
	const currentChunk = productChunks[currentChunkIndex] || []

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setShopId(value)
		dispatch({ type: 'UPDATE_USER_INFO', payload: value })
	}

	useEffect(() => {
		if (userShops.length > 0) {
			setShopId(userShops[0].id)
			dispatch({ type: 'UPDATE_USER_INFO', payload: userShops[0].id })
		}
	}, [userShops])

	return (
		<div>
			{user.shopId == '' ? (
				<>
					<FormControl style={{ marginTop: '20px' }}>
						<FormLabel>Select Shop</FormLabel>
						<Select
							name='shopId'
							value={shopId}
							onChange={handleInputChange}
							style={{ width: '100vw' }}
							required
						>
							{map(userShops, (shop) => (
								<MenuItem key={shop.id} value={shop.id}>
									{shop.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<AShopForm />
				</>
			) : isEmpty(products) ? (
				<>
					<Alert severity='info'>No products found.</Alert>
					<Button onClick={() => navigate('admin')}>Add Product</Button>
				</>
			) : (
				<div>
					<AListCarousel products={products} />
					<div className={classes.cardCantainer}>
						{map(currentChunk, (product) => (
							<ACard
								key={product.id}
								item={product}
								animation={{
									initial: { scale: 0 },
									animate: { scale: 1 },
									transition: { delay: 0.5, duration: 1 },
								}}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	cardCantainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	card: {
		width: '250px',
		height: '250px',
	},
}))
