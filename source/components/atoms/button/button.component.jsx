import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './button.module.sass';

const Button = ({ className, children, onClick, type, icon, submit, ...props }) => {
	const classNames = useClassNames(styles.button, className, styles[type]);
	const handleOnClick = props.disabled ? () => {} : onClick;

	return (
		<button
			onClick={handleOnClick}
			className={classNames}
			{...props}
			type={submit ? 'submit' : 'button'}
		>
			{children}
		</button>
	);
};

export default Button;
