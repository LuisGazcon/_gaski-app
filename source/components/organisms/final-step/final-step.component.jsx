import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import Anchor from '@components/atoms/anchor';
import Small from '@components/atoms/small';
import Bold from '@components/atoms/bold';
import Button from '@components/atoms/button';
import Card from '@components/atoms/card';
import Title from '@components/atoms/title';
import Paragraph from '@components/atoms/paragraph';
import Alert from '@components/molecules/alert';
import SpinnerButton from '@components/molecules/spinner-button';

const FinalStep = ({ context }) => {
	const { error, loading, handleEmailVerification } = context;
	const { t } = useTranslation('auth');

	return (
		<Fragment>
			<Title>{t('signup.form.titles.final-step')}</Title>
			<Card>
				<Paragraph>{t('signup.form.messages.verification-link-sent')}</Paragraph>
			</Card>
			<Small>
				{t('signup.form.messages.verification-link-not-sent')}
				<Anchor onClick={() => 1} disabled>
					{' ' + t('signup.form.messages.resend-verification-link').toLowerCase()}
				</Anchor>
			</Small>
			{error && <Alert type='error' message={error.message} />}
			<SpinnerButton type='secondary' loading={loading} onClick={handleEmailVerification}>
				{t('common.verify')}
			</SpinnerButton>
		</Fragment>
	);
};

export default FinalStep;
