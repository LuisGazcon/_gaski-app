import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './small.module.sass';

const Small = ({ children, className, ...props }) => {
	const classNames = useClassNames(styles.small, className);

	return (
		<small className={classNames} {...props}>
			{children}
		</small>
	);
};

export default Small;
