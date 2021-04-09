import React from 'react';
import PropTypes from 'prop-types';

import Small from '@components/atoms/small';

import styles from './feedback.module.sass';

import { useClassNames } from '@global/hooks';

const Feedback = ({ children, message, type, className, ...props }) => {
	const messageClassNames = useClassNames(styles.message, styles[type]);
	const feedbackClassNames = useClassNames(styles.feedback, className);

	return (
		<div className={feedbackClassNames} {...props}>
			{children}
			{message && <Small className={messageClassNames}> {message} </Small>}
		</div>
	);
};

export default Feedback;
