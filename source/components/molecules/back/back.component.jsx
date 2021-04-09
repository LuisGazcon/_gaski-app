import React from 'react';
import { KeyboardArrowLeft } from '@material-ui/icons';

import styles from './back.module.sass';

const Back = (props) => {
	return <KeyboardArrowLeft className={styles.back} {...props} />;
};

export default Back;
