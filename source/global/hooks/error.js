import { useState } from 'react';

export const useError = () => {
	const [error, setError] = useState();
	return {
		setError: (message = null) => {
			setError(message);
		},
		error,
	};
};
