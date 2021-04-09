import React, { Fragment } from 'react';

import Paragraph from '@components/atoms/paragraph';

import { useClassNames } from '@global/hooks';

import styles from './alert.module.sass';

const Alert = ({ type, message, className, children, ...props }) => {
	const classNames = useClassNames(styles.alert, styles[type], classNames);

	return message ? (
		<div className={classNames} {...props}>
			<Paragraph className={styles.message}> {message} </Paragraph>
		</div>
	) : (
		<Fragment />
	);
};

export default Alert;
