import React from 'react';

import { useClassNames } from '@global/hooks';

import styles from './paragraph.module.sass';

const Paragraph = ({ className, children, ...props }) => {
	const classNames = useClassNames(styles.paragraph, className);

	return (
		<p className={classNames} {...props}>
			{children}
		</p>
	);
};

export default Paragraph;
