import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import MenuScreen from './screens/Menu'

const App = () => {
	const dispatch = useDispatch()
	const error = useSelector((state) => state.errorReducer.error)

	useEffect(() => {
		dispatch({ type: 'FETCH_PRODUCTS_REQUEST' })
	}, [dispatch])

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className='App'>
			<MenuScreen />
		</div>
	)
}

export default App
