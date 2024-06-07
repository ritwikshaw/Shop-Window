import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import ACard from './ACard'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ACarousel = ({ products }) => (
	<Carousel autoPlay infiniteLoop>
		{products.map((product) => (
			<ACard key={product.id} product={product} />
		))}
	</Carousel>
)

export default ACarousel
