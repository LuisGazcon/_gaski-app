import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '@components/atoms/title';
import Alert from '@components/molecules/alert';
import Feedback from '@components/molecules/feedback';
import LabeledInput from '@components/molecules/labeled-input';
import SpinnerButton from '@components/molecules/spinner-button';

import { useError, useService } from '@global/hooks';

const UsernameStep = ({ next, prev, context }) => {
	const { error, setError } = useError();
	const authService = useService('authService');
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation('auth');

	const { handleChange, handleBlur, values, errors, touched } = context;
	const disabled = !touched['username'] || errors['username'];

	const handleNextStep = async () => {
		setLoading(true);
		try {
			await authService.checkUsername(values.username, () => {
				setError(null);
				next();
			});
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};

	return (
		<Fragment>
			<Title>{t('signup.form.titles.username-step')}</Title>
			<Feedback type='error' message={touched['username'] ? errors['username'] : ''}>
				<LabeledInput
					type='text'
					name='username'
					label={t('signup.form.labels.username')}
					autoComplete='off'
					autoCapitalize='off'
					autoFocus
					onChange={handleChange}
					onBlur={handleBlur}
					value={values['username']}
				/>
			</Feedback>
			{error && <Alert type='error' message={error} />}
			<SpinnerButton
				type='secondary'
				onClick={handleNextStep}
				disabled={disabled}
				loading={loading}
			>
				{t('common.next-step')}
			</SpinnerButton>
		</Fragment>
	);
};

export default UsernameStep;
