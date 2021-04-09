import React from 'react';

import Button from '@components/atoms/button';
import Spinner from '@components/atoms/spinner';

import { useClassNames } from '@global/hooks';

import styles from './spinner-button.module.sass';

export const SpinnerButton = ({ className, children, loading, ...props }) => {
	const buttonClassNames = useClassNames(styles.button, className);
	const spinnerClassNames = useClassNames(styles.spinner);
	return (
		<Button className={buttonClassNames} {...props}>
			{loading && <Spinner className={spinnerClassNames} />} {children}
		</Button>
	);
};

export default SpinnerButton;
