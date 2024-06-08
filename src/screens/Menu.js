import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AListCarousel from '../components/AListCarousel'
import { makeStyles } from '@mui/styles'
import ACard from '../components/ACard'
import { map } from 'lodash'
import { chunkArray } from '../services/utils'

export default function Menu() {
	const classes = useStyles()
	const [currentChunkIndex, setCurrentChunkIndex] = useState(0)
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

	return (
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
