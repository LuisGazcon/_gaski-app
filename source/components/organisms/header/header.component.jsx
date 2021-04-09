import React from 'react';
import { useHistory } from 'react-router-dom';

import Back from '@components/molecules/back';

import styles from './header.module.sass';

const Header = ({ title }) => {
	const history = useHistory();
	const backPath = history.location.pathname.split('/').filter(Boolean).shift();

	return (
		<header className={styles.header}>
			<Back className={styles.back} onClick={() => history.replace(`/${backPath}`)} />
			<h1 className={styles.title}>{title}</h1>
		</header>
	);
};

export default Header;
