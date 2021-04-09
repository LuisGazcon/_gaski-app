import { useState } from 'react';

export const useAlert = (type = null, message = null) => {
	const INITIAL_STATE = type && message ? { type: type, message: message } : null;

	const [alert, setAlert] = useState(INITIAL_STATE);
	return {
		setAlert: (type, message) => {
			setAlert(type && message ? { type, message } : null);
		},
		alert,
	};
};
