import React from 'react'
import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import { get } from 'lodash'

const ACard = (props) => {
	const classes = useStyles()
	const { item, animation } = props
	return (
		<motion.div
			// initial={{ scale: 0 }}
			// animate={{ scale: 1 }}
			// transition={{ delay: 1 }}
			initial={animation.initial}
			animate={animation.animate}
			transition={animation.transition}
			className={classes.modalOuter}
		>
			<div className={classes.cardOuter}>
				<div className={classes.cardMain}>
					<div className={classes.infoDiv}>
						<p className={classes.cardText}>{item.name}</p>
						<p className={classes.cardPrice}>
							{'\u20B9'}
							{item.price}
						</p>
					</div>
					<div className={classes.imageDiv}>
						<div className={classes.cardbg}></div>
						<img
							className={classes.cardImage}
							alt='product-img'
							src={get(
								item,
								'images[0]',
								'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/01/07/Pictures/_233ba43e-b52c-11e5-9ceb-2d30c6caf0ea.jpg'
							)}
						/>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const useStyles = makeStyles((theme) => ({
	cardOuter: {
		width: '20vw',
		height: '25vh',
		borderRedius: '10px',
		backgroundColor: '#FFFFFF',
		padding: '2vh',
		margin: '1px',
		borderRadius: '20px',
	},
	cardMain: {
		display: 'flex',
		flexDirection: 'row',
	},
	infoDiv: {
		width: '30%',
		height: '25vh',
	},
	cardText: {
		fontWeight: 600,
		fontSize: '1.4vw',
	},
	cardPrice: {
		fontWeight: 600,
		fontSize: '1.2vw',
		color: '#DA1500',
	},
	imageDiv: {
		width: '70%',
		height: '25vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		position: 'relative',
	},
	cardbg: {
		width: '100%',
		height: '80%',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top',
		position: 'absolute',
		zIndex: 1,
	},
	cardImage: {
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		borderRadius: '20px',
		position: 'absolute',
		zIndex: 2,
	},
}))

export default ACard
