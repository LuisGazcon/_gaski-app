import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@components/atoms/card';
import Paragraph from '@components/atoms/paragraph';
import Title from '@components/atoms/title';
import Alert from '@components/molecules/alert';
import Feedback from '@components/molecules/feedback';
import LabeledInput from '@components/molecules/labeled-input';
import SpinnerButton from '@components/molecules/spinner-button';

import { useError, useService } from '@global/hooks';

const EmailStep = ({ next, prev, context }) => {
	const { handleChange, handleBlur, values, errors, touched } = context;
	const { error, setError } = useError();
	const authService = useService('authService');
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation('auth');
	const disabled = !touched['email'] || errors['email'];

	const handleNextStep = async () => {
		setLoading(true);
		try {
			await authService.checkEmail(values.email, () => {
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
			<Title>{t('signup.form.titles.email-step')}</Title>
			<Card>
				<Paragraph>{t('signup.form.messages.email-required-for-verification')}</Paragraph>
			</Card>
			<Feedback type='error' message={touched['email'] ? errors['email'] : ''}>
				<LabeledInput
					type='text'
					name='email'
					label={t('signup.form.labels.email')}
					autoComplete='off'
					autoCapitalize='off'
					autoFocus
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
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

export default EmailStep;
