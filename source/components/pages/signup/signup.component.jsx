import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Screen from '@components/atoms/screen';
import Header from '@components/organisms/header';
import SignupForm from '@components/organisms/signup-form';

const Signup = () => {
	const { t } = useTranslation('auth');

	return (
		<Fragment>
			<Header title={t('common.signup')} />
			<Screen>
				<SignupForm />
			</Screen>
		</Fragment>
	);
};

export default Signup;
