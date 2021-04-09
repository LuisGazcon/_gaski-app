import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './card.module.sass';

const Card = ({ children, className, ...props }) => {
	const classNames = useClassNames(styles.card, className);
	return (
		<div className={classNames} {...props}>
			{children}
		</div>
	);
};

export default Card;
