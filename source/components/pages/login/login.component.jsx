import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Screen from '@components/atoms/screen';
import Header from '@components/organisms/header';
import LogInForm from '@components/organisms/login-form';

const Login = () => {
	const { t } = useTranslation('auth');

	return (
		<Fragment>
			<Header title={t('common.login')} />
			<Screen>
				<LogInForm />
			</Screen>
		</Fragment>
	);
};

export default Login;
