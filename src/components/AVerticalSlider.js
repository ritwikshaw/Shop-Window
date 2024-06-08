import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@mui/styles'
import { useSelector } from 'react-redux'
import { get, map } from 'lodash'
import { motion } from 'framer-motion'

const AVerticalSlider = ({ autoScrollInterval = 3000 }) => {
	const classes = useStyles()
	const [currentIndex, setCurrentIndex] = useState(0)
	const products = useSelector((state) =>
		get(state, 'ProductReducer.products', [])
	)
	const sliderRef = useRef(null)

	// Function to move to the next slide
	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === products.length - 1 ? 0 : prevIndex + 1
		)
	}

	useEffect(() => {
		// Auto-scroll functionality
		const intervalId = setInterval(() => {
			nextSlide()
		}, autoScrollInterval)

		// Clear interval on component unmount
		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className={classes.verticalSlider} ref={sliderRef}>
			<div
				className={classes.sliderContainer}
				style={{
					transform: `translateY(-${currentIndex * (100 / products.length)}%)`,
				}}
			>
				{map(products, (product, index) => (
					<div className={classes.slide} key={index}>
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<img
								className={classes.slideImage}
								src={get(product, 'images[0]', '')}
								alt={`Slide ${index}`}
							/>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	verticalSlider: {
		position: 'relative',
		width: '100%',
		height: '100vh',
		overflow: 'hidden',
	},
	sliderContainer: {
		display: 'flex',
		flexDirection: 'column',
		transition: 'transform 0.5s ease-in-out',
	},
	slide: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	slideImage: {
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'cover',
	},
}))

export default AVerticalSlider
