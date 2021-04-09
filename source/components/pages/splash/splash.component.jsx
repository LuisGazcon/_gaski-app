import React from 'react';

import Logo from '@resources/svg/logo.svg';

import Screen from '@components/atoms/screen';
import Spinner from '@components/atoms/spinner';

import styles from './splash.module.sass';

const Splash = () => {
	return (
		<Screen className={styles.splash}>
			<Logo className={styles.logo} />
		</Screen>
	);
};

export default Splash;
