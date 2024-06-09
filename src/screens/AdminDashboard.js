import React, { useEffect } from 'react'
import AProductForm from '../components/AProductForm'
import AProductList from '../components/AProductList'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Alert, Button } from '@mui/material'

const AdminDashboard = () => {
	const classes = useStyles()
	const navigate = useNavigate()
	const user = useSelector((state) => state.userReducer.user)

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Admin Panel</h1>
			{user.shopId ? (
				<div className={classes.formContainer}>
					<AProductList />
					<AProductForm />
				</div>
			) : (
				<>
					<Alert severity='info'>Please add your shop.</Alert>
				</>
			)}

			<Button onClick={() => navigate('/')}>Go Back</Button>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	formContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
}))

export default AdminDashboard
