import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const ACard = ({ product }) => (
	<Card>
		<CardMedia
			component='img'
			alt={product.name}
			height='140'
			image={product.images[0]}
			title={product.name}
			style={{ objectFit: 'contain' }}
		/>
		<CardContent>
			<Typography variant='h5' component='h2'>
				{product.name}
			</Typography>
			<Typography variant='body2' color='textSecondary' component='p'>
				${product.price}
			</Typography>
		</CardContent>
	</Card>
)

export default ACard
