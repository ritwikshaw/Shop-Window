import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Skeleton } from '@mui/material'
import ReactPlayer from 'react-player'
import { get, isEmpty } from 'lodash'

const AVideo = (props) => {
	const classes = useStyles()
	const [vIndex, setVIndex] = useState(0)
	const ads = [
		'https://firebasestorage.googleapis.com/v0/b/freshot-prod.appspot.com/o/Ads%2FIdli%20Making%202_1.mp4?alt=media&token=f5307a27-85cb-49f5-934d-06322e650d96',
	]

	const nextVideo = () => {
		if (vIndex < ads.length - 1) {
			setVIndex((vi) => vi + 1)
		} else if (vIndex === ads.length - 1) {
			setVIndex(0)
			//TODO: call to fetch another random videos
		}
	}

	return (
		<div className={classes.videoOuter}>
			{isEmpty(ads) ? (
				<Skeleton animation='wave' variant='rounded' height='70vh' />
			) : (
				<ReactPlayer
					url={ads[vIndex]} // replace with your actual video URL
					loop={ads?.length === 1 ? true : false}
					playing={true} // Set this to true for autoplay
					controls={get(props, 'controls', false)} // If you want to show video controls
					muted={get(props, 'muted', true)}
					width='100%'
					height='100%'
					className={classes.videoMain}
					onBuffer={(buf) => {
						console.log('onBuffer', buf)
						setVIndex(ads?.length - 1 >= vIndex ? 0 : vIndex + 1)
					}}
					onError={async (err) => {
						console.log('onError*', err)
						setVIndex(ads?.length - 1 >= vIndex ? 0 : vIndex + 1)
					}}
					onEnded={nextVideo}
				/>
			)}
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	videoOuter: {
		width: '100%',
		height: '100%',
	},
	videoMain: {
		width: '70vw',
		height: '70vh',
		overflow: 'hidden',
		objectFit: 'cover',
	},
}))

export default AVideo
