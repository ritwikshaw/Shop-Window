import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import NavigationContainer from './NavigationContainer'

const App = () => {
	const dispatch = useDispatch()
	const error = useSelector((state) => state.errorReducer.error)

	useEffect(() => {
		dispatch({ type: 'STARTUP' })
	}, [dispatch])

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<div className='App'>
			<NavigationContainer />
		</div>
	)
}

export default App
