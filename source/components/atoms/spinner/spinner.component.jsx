import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './spinner.module.sass';

const Spinner = ({ className, ...props }) => {
	const classNames = useClassNames(styles.spinner, className);
	return <span className={classNames} {...props} />;
};

export default Spinner;
