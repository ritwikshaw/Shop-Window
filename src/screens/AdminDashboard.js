import React from 'react'
import AProductForm from '../components/AProductForm'
import AProductList from '../components/AProductList'
import { makeStyles } from '@mui/styles'

const AdminDashboard = () => {
	const classes = useStyles()
	return (
		<div>
			<h1>Admin Panel</h1>
			<div className={classes.formContainer}>
				<AProductList />
				<AProductForm />
			</div>
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
