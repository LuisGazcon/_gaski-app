import React from 'react';

import styles from './input.module.sass';

import { useClassNames } from '@global/hooks';

const Input = ({ className, ...props }) => {
	const classNames = useClassNames(styles.input, className);
	return <input className={classNames} {...props} />;
};

export default Input;
