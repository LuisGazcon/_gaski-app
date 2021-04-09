import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Title from '@components/atoms/title';
import Button from '@components/atoms/button';
import LabeledInput from '@components/molecules/labeled-input';
import Feedback from '@components/molecules/feedback';

const NamesStep = ({ context, next, ...props }) => {
	const { t } = useTranslation('auth');
	const { handleChange, values, errors, touched } = context;
	const disabled =
		errors['first-name'] ||
		!touched['first-name'] ||
		errors['last-name'] ||
		!touched['last-name'];

	return (
		<Fragment>
			<Title>{t('signup.form.titles.names-step')}</Title>
			<Feedback type='error' message={touched['first-name'] ? errors['first-name'] : ''}>
				<LabeledInput
					type='text'
					name='first-name'
					label={t('signup.form.labels.first-name')}
					autoComplete='off'
					autoCapitalize='off'
					autoFocus
					value={values['first-name']}
					onChange={handleChange}
				/>
			</Feedback>
			<Feedback type='error' message={touched['last-name'] ? errors['last-name'] : ''}>
				<LabeledInput
					type='text'
					name='last-name'
					label={t('signup.form.labels.last-name')}
					autoComplete='off'
					autoCapitalize='off'
					value={values['last-name']}
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
