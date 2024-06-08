import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import { makeStyles } from '@mui/styles'
import { Skeleton } from '@mui/material'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const FHCarousel = () => {
	const classes = useStyles()
	const products = useSelector((state) =>
		get(state, 'ProductReducer.products', [])
	)
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

	return (
		<div className={classes.carouselMain}>
			{products?.length > 0 ? (
				<ReactSimplyCarousel
					autoplay={true}
					autoplayDirection='forward'
					autoplayDelay={3000}
					activeSlideIndex={activeSlideIndex}
					onRequestChange={setActiveSlideIndex}
					forwardBtnProps={{
						//here you can also pass className, or any other button element attributes
						style: {
							// alignSelf: "center",
							// background: "black",
							// border: "none",
							// borderRadius: "50%",
							// color: "white",
							// cursor: "pointer",
							// fontSize: "20px",
							// height: 30,
							// lineHeight: 1,
							// textAlign: "center",
							// width: 30,
							display: 'none',
						},
						children: <span>{`>`}</span>,
					}}
					backwardBtnProps={{
						//here you can also pass className, or any other button element attributes
						style: {
							// alignSelf: "center",
							// background: "black",
							// border: "none",
							// borderRadius: "50%",
							// color: "white",
							// cursor: "pointer",
							// fontSize: "20px",
							// height: 30,
							// lineHeight: 1,
							// textAlign: "center",
							// width: 30,
							display: 'none',
						},
						children: <span>{`<`}</span>,
					}}
					responsiveProps={[
						{
							itemsToShow: 1,
							itemsToScroll: 1,
							minWidth: 1000,
						},
					]}
					itemsToShow={1}
					itemsToScroll={1}
					speed={1000}
					easing='linear'
				>
					{products?.map((item, i) => (
						<div key={i} className={classes.childMain}>
							<img
								className={classes.childImage}
								alt='product-img'
								src={get(item, 'images[0]', '')}
							/>
						</div>
					))}
				</ReactSimplyCarousel>
			) : (
				<Skeleton animation='wave' variant='rounded' height='70vh' />
			)}
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	carouselMain: {
		height: '100%',
		width: '100%',
		overflow: 'hidden',
	},
	childMain: {
		width: '70vw',
		height: '70vh',
		overflow: 'hidden',
		padding: '1vw',
	},
	childImage: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		borderRadius: '20px',
	},
}))

export default FHCarousel
