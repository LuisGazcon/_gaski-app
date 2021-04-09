const INITIAL_STATE = {
	user: null,
	error: null,
	loading: false,
	verification: {
		sent: false,
		user: null,
	},
};

export const createReducer = ({ ActionTypes }) => (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.LOG_IN: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.LOG_IN_SUCCESS: {
			const { user } = action.payload;
			console.log(user);
			return {
				...state,
				user,
				error: undefined,
				loading: false,
			};
		}

		case ActionTypes.LOG_IN_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				error: {
					code: error.code,
					message: error.message,
				},
				loading: false,
			};
		}

		case ActionTypes.LOG_OUT: {
			return state;
		}

		case ActionTypes.LOG_OUT_SUCCESS: {
			return {
				...state,
				user: undefined,
			};
		}

		case ActionTypes.LOG_OUT_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				error: error,
			};
		}
		default:
			return state;

		case ActionTypes.SIGN_UP: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.SIGN_UP_FAILURE: {
			const { error } = action.payload;

			return {
				...state,
				loading: false,
				error: error,
			};
		}

		case ActionTypes.SIGN_UP_SUCCESS: {
			const { user } = action.payload;
			return {
				...state,
				loading: false,
				error: undefined,
				verification: {
					user,
				},
			};
		}

		case ActionTypes.SEND_EMAIL_VERIFICATION: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.SEND_EMAIL_VERIFICATION_SUCCESS: {
			return {
				...state,
				loading: false,
				verification: {
					user: state.verification.user,
					sent: true,
				},
			};
		}

		case ActionTypes.SEND_EMAIL_VERIFICATION_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				error: error,
				verification: {
					sent: false,
				},
			};
		}

		case ActionTypes.EMAIL_VERIFICATION: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.EMAIL_VERIFICATION_SUCCESS: {
			const { user } = action.payload;

			return {
				...state,
				loading: false,
				user: user,
				verification: null,
			};
		}

		case ActionTypes.EMAIL_VERIFICATION_FAILURE: {
			const { error } = action.payload;
			return {
				...state,
				loading: false,
				verification: {
					sent: true,
				},
				error: error,
			};
		}
	}
};
