import React from 'react';
import { useHistory } from 'react-router-dom';

import { useClassNames } from '@global/hooks';

import styles from './anchor.module.sass';

const Anchor = ({ className, children, href, onClick, ...props }) => {
	const history = useHistory();
	const classNames = useClassNames(styles.anchor, className);
	const handleOnClick = href ? () => history.push(href) : onClick;

	return (
		<a className={classNames} onClick={handleOnClick}>
			{children}
		</a>
	);
};

export default Anchor;
