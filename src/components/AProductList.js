import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
	Button,
} from '@mui/material'
import { Edit, Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { map } from 'lodash'

const useStyles = makeStyles((theme) => ({
	table: {
		height: '80vh',
		width: '70vw',
		overflowY: 'scroll',
	},
	button: {
		marginRight: 20,
	},
}))

const AProductList = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const products = useSelector((state) => state.ProductReducer.products)

	const handleDelete = async (id) => {
		dispatch({ type: 'DELETE_PRODUCT', payload: id })
	}

	const handleEdit = (id) => {
		dispatch({ type: 'UPDATE_PRODUCT', payload: id })
	}

	return (
		<TableContainer className={classes.table} component={Paper}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>No</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Media type</TableCell>

						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{map(products, (product, index) => (
						<TableRow key={index}>
							<TableCell>{index}</TableCell>
							<TableCell>{product.name}</TableCell>
							<TableCell>{product.price}</TableCell>
							<TableCell>{product.mediaType}</TableCell>
							<TableCell>
								<IconButton
									className={classes.button}
									onClick={() => handleEdit(product.id)}
								>
									<Edit />
								</IconButton>
								<IconButton
									color='secondary'
									onClick={() => handleDelete(product.id)}
								>
									<Delete />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default AProductList
