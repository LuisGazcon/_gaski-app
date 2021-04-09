import React from 'react';
import { useTranslation } from 'react-i18next';

import Anchor from '@components/atoms/anchor';
import Form from '@components/atoms/form';
import Small from '@components/atoms/small';
import Title from '@components/atoms/title';
import Alert from '@components/molecules/alert';
import Feedback from '@components/molecules/feedback';
import LabeledInput from '@components/molecules/labeled-input';
import SpinnerButton from '@components/molecules/spinner-button';

import styles from './login-form.module.sass';

const LoginForm = ({ error, values, errors, touched, loading, ...actions }) => {
	const { t } = useTranslation('auth');
	const { handleChange, handleSubmit } = actions;

	return (
		<Form className={styles.logInForm} onSubmit={handleSubmit} noValidate>
			<Title> {t('login.form.title')} </Title>
			<Feedback type='error' message={touched.email ? errors.email : ''}>
				<LabeledInput
					name='email'
					type='email'
					label={t('login.form.labels.email')}
					autoCapitalize='off'
					autoComplete='off'
					autoFocus
					value={values.email}
					onChange={handleChange}
				/>
			</Feedback>
			<Feedback type='error' message={touched.password ? errors.password : ''}>
				<LabeledInput
					name='password'
					type='password'
					label={t('login.form.labels.password')}
					value={values.password}
					onChange={handleChange}
				/>
			</Feedback>
			<Small>
				{t('common.have-not-account')}
				<Anchor href='/auth/signup'>{' ' + t('common.signup-here').toLowerCase()}</Anchor>
			</Small>
			{error && <Alert type='error' message={error.message} />}
			<SpinnerButton type='primary' loading={loading} submit>
				{t('common.login')}
			</SpinnerButton>
		</Form>
	);
};

export default LoginForm;
