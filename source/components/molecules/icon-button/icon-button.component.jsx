import React from 'react';

import Button from '@components/atoms/button';

import styles from './icon-button.module.sass';

const IconButton = ({ icon, children, ...props }) => {
	return (
		<Button {...props}>
			<Icon className={styles.icon} /> {children}
		</Button>
	);
};

export default IconButton;
