import React from 'react';
import { ChatRightTextFill } from 'react-bootstrap-icons';

import NavbarElement from '@components/molecules/navbar-element';

import styles from './navbar.module.sass';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<NavbarElement path='/messages' icon='message' label='Messages' />
			<NavbarElement path='/settings' icon='message' label='Settings' />
			<NavbarElement path='/account' icon='message' label='Account' />
		</nav>
	);
};

export default Navbar;
