import React from 'react';

import Form from '@components/atoms/form';
import Initial from '@components/organisms/initial-step';
import Email from '@components/organisms/email-step';
import Names from '@components/organisms/names-step';
import Password from '@components/organisms/password-step';
import Username from '@components/organisms/username-step';
import Verification from '@components/organisms/verification-step';
import Final from '@components/organisms/final-step';
import Wizard from '@components/utils/wizard';

import styles from './signup-form.module.sass';

const SignupForm = ({ ...context }) => {
	return (
		<Form className={styles.signupForm}>
			<Wizard context={context}>
				<Wizard.Step component={Initial} />
				<Wizard.Step component={Names} />
				<Wizard.Step component={Email} />
				<Wizard.Step component={Username} />
				<Wizard.Step component={Password} />
				<Wizard.Step component={Verification} />
				<Wizard.Step component={Final} />
			</Wizard>
		</Form>
	);
};

export default SignupForm;
