import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@components/atoms/button';
import Title from '@components/atoms/title';
import LabeledInput from '@components/molecules/labeled-input';
import Feedback from '@components/molecules/feedback';

const NamesStep = ({ context, next }) => {
	const { t } = useTranslation('auth');
	const { handleChange, handleBlur, values, errors, touched } = context;
	const disabled =
		errors['password'] ||
		!touched['password'] ||
		errors['password-confirm'] ||
		!touched['password-confirm'];

	return (
		<Fragment>
			<Title>{t('signup.form.titles.password-step')}</Title>
			<Feedback type='error' message={touched['password'] ? errors['password'] : ''}>
				<LabeledInput
					type='password'
					name='password'
					label={t('signup.form.labels.password')}
					autoComplete='off'
					autoCapitalize='off'
					autoFocus
					value={values['password']}
					onChange={handleChange}
				/>
			</Feedback>
			<Feedback
				type='error'
				message={touched['password-confirm'] ? errors['password-confirm'] : ''}
			>
				<LabeledInput
					type='password'
					name='password-confirm'
					label={t('signup.form.labels.password-confirm')}
					autoComplete='off'
					autoCapitalize='off'
					value={values['password-confirm']}
					onChange={handleChange}
				/>
			</Feedback>
			<Button type='secondary' onClick={next} disabled={disabled}>
				{t('common.next-step')}
			</Button>
		</Fragment>
	);
};

export default NamesStep;
