import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './bold.module.sass';

const Bold = ({ children, className, ...props }) => {
	const classNames = useClassNames(styles.bold, className);

	return (
		<span className={classNames} {...props}>
			{children}
		</span>
	);
};

export default Bold;
