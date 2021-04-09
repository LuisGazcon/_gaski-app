import React from 'react';

const Form = ({ children, onSubmit, ...props }) => {
	const handleOnSubmit = (event) => {
		event.preventDefault();
		typeof onSubmit === 'function' && onSubmit(event);
	};

	return (
		<form onSubmit={handleOnSubmit} {...props}>
			{children}
		</form>
	);
};

export default Form;
