import React from 'react';

import styles from './screen.module.sass';

const Screen = ({ children, ...props }) => {
	return (
		<main className={styles.screen} {...props}>
			{children}
		</main>
	);
};

export default Screen;
