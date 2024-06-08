import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import { makeStyles } from '@mui/styles'
import { Skeleton } from '@mui/material'
import ACard from './ACard'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const AListCarousel = () => {
	const classes = useStyles()
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)
	const items = useSelector((state) =>
		get(state, 'ProductReducer.products', [])
	)

	return (
		<div className={classes.carouselMain}>
			{items?.length > 0 ? (
				<ReactSimplyCarousel
					autoplay={true}
					autoplayDirection='forward'
					autoplayDelay={3000}
					activeSlideIndex={activeSlideIndex}
					onRequestChange={setActiveSlideIndex}
					forwardBtnProps={{
						style: {
							display: 'none',
						},
						children: <span>{`>`}</span>,
					}}
					backwardBtnProps={{
						style: {
							display: 'none',
						},
						children: <span>{`<`}</span>,
					}}
					responsiveProps={[
						{
							itemsToShow: 5,
							itemsToScroll: 1,
							minWidth: 1000,
						},
					]}
					itemsToShow={5}
					itemsToScroll={1}
					speed={2000}
					easing='linear'
				>
					{items?.map((item, i) => (
						<ACard
							key={i}
							item={item}
							animation={{
								initial: { opacity: 0, y: 50 },
								animate: { opacity: 1, y: 0 },
								transition: { delay: 0.5, duration: 0.5 },
							}}
						/>
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
		height: '30vh',
		width: '100vw',
		overflow: 'hidden',
		backgroundColor: '#F6F6F6',
	},
}))

export default AListCarousel
