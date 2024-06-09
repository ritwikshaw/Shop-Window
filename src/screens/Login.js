import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	TextField,
	CircularProgress,
	Button,
	Snackbar,
	Alert,
	Box,
	Radio,
	Container,
	Typography,
	RadioGroup,
	FormControlLabel,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import CommanClasses from '../theme/commonClasses'
import Logo from '../assets/logo.png'

const customStyles = makeStyles(CommanClasses)

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const common = customStyles(CommanClasses)
	const classes = useStyles()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [mode, setMode] = useState('login')
	const [errorMsg, setErrorMsg] = useState('')
	const [open, setOpen] = useState(false)
	const inProgress = useSelector((state) => state.userReducer.inProgress)
	const isAdmin = useSelector((state) => state.userReducer.isAdmin)
	const errMsg = useSelector((state) => state.userReducer.errMsg)

	useEffect(() => {
		if (isAdmin) {
			navigate('/')
		}
	}, [isAdmin])

	useEffect(() => {
		if (errMsg != '') {
			setErrorMsg(errMsg)
			setOpen(true)
		}
	}, [errMsg])

	const handleModeChange = (event) => {
		setMode(event.target.value)
	}

	const handleLogin = () => {
		if (email == '' || password == '') {
			setErrorMsg('Please enter email and password')
			setOpen(true)
		} else {
			dispatch({ type: 'LOGIN', loginInfo: { email, password }, mode })
		}
	}
	return (
		<div className={classes.loginOuter}>
			<Container maxWidth='xs' className={classes.loginContainer}>
				<Box className={classes.logo}>
					<img src={Logo} alt='logo' style={{ width: 150, height: 120 }} />
				</Box>
				<Typography variant='h5' component='h1' gutterBottom>
					{mode === 'login' ? 'Login' : 'Register'}
				</Typography>
				<RadioGroup
					row
					value={mode}
					onChange={handleModeChange}
					className={classes.radioGroup}
				>
					<FormControlLabel value='login' control={<Radio />} label='Sign In' />
					<FormControlLabel
						value='register'
						control={<Radio />}
						label='Register'
					/>
				</RadioGroup>
				<TextField
					variant='outlined'
					label='Email Address'
					fullWidth
					className={classes.input}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					variant='outlined'
					label='Password'
					type='password'
					fullWidth
					className={classes.input}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{inProgress ? (
					<CircularProgress style={{ alignSelf: 'center' }} />
				) : (
					<Button
						variant='contained'
						className={common.loginButton}
						onClick={handleLogin}
					>
						{' '}
						Get Started
					</Button>
				)}

				<Snackbar open={open} autoHideDuration={4000}>
					<Alert severity='error' sx={{ width: '100%' }}>
						{errorMsg}
					</Alert>
				</Snackbar>
			</Container>
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	loginOuter: {
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	},
	loginContainer: {
		backgroundColor: '#fff',
		borderRadius: '10px',
		padding: '30px',
		boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
		textAlign: 'center',
	},
	input: {
		marginBottom: '20px',
	},
	button: {
		backgroundColor: '#a569f6',
		color: '#fff',
		'&:hover': {
			backgroundColor: '#8a49d6',
		},
	},
	logo: {
		alignSelf: 'center',
	},
}))

export default Login
