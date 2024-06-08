import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory as history } from 'history'
import { AnimatePresence } from 'framer-motion'
import Login from './screens/Login'
import Menu from './screens/Menu'
import AdminDashboard from './screens/AdminDashboard'

const NavigationContainer = () => {
	const isAdmin = useSelector((state) => state.userReducer.isAdmin)
	return (
		<BrowserRouter>
			<AnimatePresence>
				<Routes history={history}>
					{isAdmin ? (
						<>
							<Route path='/' element={<Menu />} />
							<Route path='/admin' element={<AdminDashboard />} />
						</>
					) : (
						<Route path='/login' element={<Login />} />
					)}
					<Route path='*' element={<Login />} />
				</Routes>
			</AnimatePresence>
		</BrowserRouter>
	)
}

export default NavigationContainer
