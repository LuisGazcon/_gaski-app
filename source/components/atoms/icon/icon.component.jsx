import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './icon.module.sass';

const Icon = ({ name, className, ...props }) => {
	const classNames = useClassNames(styles.icon, className);
	return (
		<i className={classNames} {...props}>
			{name}
		</i>
	);
};

export default Icon;
