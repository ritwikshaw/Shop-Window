import Colors from './colors'

const style = {
	bgMain: {
		backgroundColor: Colors.main,
	},
	bgPrimary: {
		backgroundColor: Colors.primary,
	},
	bgSecondary: {
		backgroundColor: Colors.secondary,
	},
	bgSuccess: {
		backgroundColor: Colors.success,
	},
	bgDark: {
		backgroundColor: Colors.dark,
	},
	bgLight: {
		backgroundColor: Colors.light,
	},
	bgInfo: {
		backgroundColor: Colors.info,
	},
	bgExLight: {
		backgroundColor: Colors.exLight,
	},
	bgCancelled: {
		backgroundColor: Colors.cancelled,
	},
	bgLightGrey: {
		background: Colors.lightGrey,
	},
	textPrimary: {
		color: Colors.primary,
	},
	textSecondary: {
		color: Colors.secondary,
	},
	textWhite: {
		color: Colors.bright,
	},
	textRed: {
		color: Colors.cancelled,
	},
	textBlack: {
		color: Colors.darkGrey,
	},
	textDanger: {
		color: Colors.danger,
	},
	textSuccess: {
		color: Colors.success,
	},
	textDark: {
		color: Colors.dark,
	},
	textRatings: {
		color: Colors.ratings,
	},
	textTLight: {
		color: Colors.tLight,
	},
	inactive: {
		backgroundColor: Colors.inactive,
	},
	white: {
		color: Colors.white,
	},

	textCenter: {
		textAlign: 'center !important',
	},
	padding_0: {
		padding: 0,
	},
	h_100: {
		height: '100%',
	},
	vh_100: {
		height: '100vh',
	},
	mh_100: {
		maxHeight: '100%',
	},
	w_30: {
		width: '30%',
	},
	w_50: {
		width: '50%',
	},
	w_100: {
		width: '100%',
	},
	mw_100: {
		maxWidth: '100%',
	},
	textL: {
		fontSize: 24,
	},
	textXs: {
		fontSize: 10,
	},
	textSm: {
		fontSize: 12,
	},
	textM: {
		fontSize: 18,
	},
	loginButton: {
		backgroundColor: '#3E90DC',
		margin: '10px',
	},
	textCapitalize: {
		textTransform: 'capitalize',
	},
	textLowerCase: {
		textTransform: 'lowercase',
	},
	flex_row_sb: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	flex_sb: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	flex_start: {
		display: 'flex',
		justifyContent: 'start',
	},
	flex_end: {
		display: 'flex',
		justifyContent: 'end',
	},
	flex_evenly: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	flex_column_sb: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	flex_column_sa: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
	},
	flex_row_start: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'start',
	},
	flex_row_center: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	flex_column_se: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},
	flex_row_se: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	mousecursor: { cursor: 'pointer' },
	borderRadiusXs: {
		borderRadius: 5,
	},
	borderRadiusM: {
		borderRadius: 10,
	},
	commonButtonStyle: {
		color: '#ffffff',
		background: Colors.darkGreen,
		border: '1px solid solid',
		borderRadius: 5,
	},
	buttonStyle: {
		color: '#ffffff',
		border: '1px solid solid',
		borderRadius: 5,
	},
	button: {
		borderRadius: 20,
		height: 40, // added new
		textTransform: 'capitalize',
		paddingLeft: 30,
		paddingRight: 30,
		color: Colors.dark,
	},
	smallButton: {
		borderRadius: 5,
		height: 30,
		textTransform: 'capitalize',
		paddingLeft: 14,
		paddingRight: 14,
		color: Colors.dark,
	},
	smallRedButton: {
		borderRadius: 5,
		height: 30,
		textTransform: 'capitalize',
		paddingLeft: 14,
		paddingRight: 14,
		color: '#fffff',
		background: '#CE0202',
	},
	smallAddButton: {
		borderRadius: 5,
		height: 30,
		textTransform: 'capitalize',
		paddingLeft: 30,
		paddingRight: 30,
		color: Colors.dark,
	},
	extraSmallButton: {
		borderRadius: 5,
		minHeight: 20,
		maxHeight: 'auto',
		// width:50,
		textTransform: 'capitalize',
		paddingLeft: 10,
		paddingRight: 10,
	},

	smallButtonGreen: {
		borderRadius: 5,
		height: 30,
		textTransform: 'capitalize',
		paddingLeft: 14,
		paddingRight: 14,
		color: 'white',
		backgroundColor: Colors.success,
	},
}

export default style
