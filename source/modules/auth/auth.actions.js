import auth from '.';

export const createActions = ({ services: { authService } }) => {
	const ActionTypes = {
		LOG_IN: 'LOG_IN',
		LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
		LOG_IN_FAILURE: 'LOG_IN_FAILURE',
		LOG_OUT: 'LOG_OUT',
		LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
		LOG_OUT_FAILURE: 'LOG_OUT_FAILURE',
		SIGN_UP: 'SIGN_UP',
		SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
		SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
		SEND_EMAIL_VERIFICATION: 'SEND_EMAIL_VERIFICATION',
		SEND_EMAIL_VERIFICATION_SUCCESS: 'SEND_EMAIL_VERIFICATION_SUCCESS',
		SEND_EMAIL_VERIFICATION_FAILURE: 'SEND_EMAIL_VERIFICATION_FAILURE',
		EMAIL_VERIFICATION: 'EMAIL_VERIFICATION',
		EMAIL_VERIFICATION_SUCCESS: 'EMAIL_VERIFICATION_SUCCESS',
		EMAIL_VERIFICATION_FAILURE: 'EMAIL_VERIFICATION_FAILURE',
	};

	const actions = {
		/**
		 *
		 * @param {string} email
		 * @param {string} password
		 * @returns {Function}
		 */
		logIn: (email, password) => (dispatch) => {
			dispatch({ type: ActionTypes.LOG_IN });
			authService
				.logIn(email, password)
				.then((user) => {
					dispatch({
						type: ActionTypes.LOG_IN_SUCCESS,
						payload: { user },
					});
				})
				.catch((error) => {
					dispatch({
						type: ActionTypes.LOG_IN_FAILURE,
						payload: { error },
					});
				});
		},
		/**
		 *
		 * @returns {Function}
		 */
		logOut: () => (dispatch) => {
			dispatch({ type: ActionTypes.LOG_OUT });
			authService
				.logout()
				.then(() => {
					dispatch({
						type: ActionTypes.LOG_OUT_SUCCESS,
					});
				})
				.catch(() => {
					dispatch({
						type: ActionTypes.LOG_OUT_FAILURE,
					});
				});
		},
		signUp: (email, password, data) => (dispatch) => {
			dispatch({ type: ActionTypes.SIGN_UP });
			authService
				.signUp(email, password, data)
				.then((user) => {
					dispatch({
						type: ActionTypes.SIGN_UP_SUCCESS,
						payload: { user },
					});
				})
				.catch((error) => {
					dispatch({
						type: ActionTypes.SIGN_UP_FAILURE,
						payload: { error },
					});
				});
		},
		sendEmailVerification: () => (dispatch) => {
			dispatch({ type: ActionTypes.SEND_EMAIL_VERIFICATION });
			authService
				.sendEmailVerification()
				.then(() => {
					dispatch({
						type: ActionTypes.SEND_EMAIL_VERIFICATION_SUCCESS,
					});
				})
				.catch((error) => {
					dispatch({
						type: ActionTypes.SEND_EMAIL_VERIFICATION_FAILURE,
						payload: { error },
					});
				});
		},
		verifyEmail: () => (dispatch) => {
			dispatch({ type: ActionTypes.EMAIL_VERIFICATION });
			authService
				.verifyEmail()
				.then((user) => {
					dispatch({
						type: ActionTypes.EMAIL_VERIFICATION_SUCCESS,
						payload: { user },
					});
				})
				.catch((error) => {
					dispatch({
						type: ActionTypes.EMAIL_VERIFICATION_FAILURE,
						payload: { error },
					});
				});
		},
	};

	return Object.freeze({
		ActionTypes,
		actions,
	});
};
