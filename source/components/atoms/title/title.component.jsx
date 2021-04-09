import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './title.module.sass';

const Title = ({ children, className, ...props }) => {
	const classNames = useClassNames(styles.title, className);
	return (
		<h2 className={classNames} {...props}>
			{children}
		</h2>
	);
};

export default Title;
