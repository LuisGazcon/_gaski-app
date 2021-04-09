import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useClassNames } from '@global/hooks';

import styles from './navbar-element.module.sass';

const NavbarElement = ({ path, icon: Icon, label }) => {
	const history = useHistory();
	const match = useRouteMatch({ path });
	const classNames = useClassNames(styles.navbarElement, match && styles.active);

	const handleOnClick = () => path !== match.path && history.push(path);

	return (
		<ul onClick={handleOnClick} className={classNames}>
			<Icon className={styles.icon} />
			<label className={styles.label}> {label} </label>
		</ul>
	);
};

export default NavbarElement;
