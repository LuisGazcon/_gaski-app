import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@components/atoms/card';
import Title from '@components/atoms/title';
import Anchor from '@components/atoms/anchor';
import Button from '@components/atoms/button';
import Paragraph from '@components/atoms/paragraph';
import Small from '@components/atoms/small';

const InitialStep = ({ next }) => {
	const { t } = useTranslation('auth');

	return (
		<Fragment>
			<Title>{t('signup.form.titles.initial-step')}</Title>
			<Card>
				<Paragraph>{t('signup.form.instructions')}</Paragraph>
			</Card>
			<Small>
				{t('common.have-account')}
				<Anchor href='login'>{' ' + t('common.login-here').toLowerCase()}</Anchor>
			</Small>
			<Button type='primary' onClick={next}>
				{t('common.get-started')}
			</Button>
		</Fragment>
	);
};

export default InitialStep;
