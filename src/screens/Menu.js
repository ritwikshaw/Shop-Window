import React from 'react'
import { useSelector } from 'react-redux'
import ACarousel from '../components/ACarousel'
import AVerticalSlider from '../components/AVerticalSlider'

export default function Menu() {
	const products = useSelector((state) => state.ProductReducer.products)

	return (
		<div>
			<ACarousel products={products} />
			<AVerticalSlider products={products} />
		</div>
	)
}
