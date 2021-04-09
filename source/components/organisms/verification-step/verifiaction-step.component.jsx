import React, { Fragment, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import Alert from '@components/molecules/alert';
import Anchor from '@components/atoms/anchor';
import Small from '@components/atoms/small';
import Bold from '@components/atoms/bold';
import Card from '@components/atoms/card';
import Title from '@components/atoms/title';
import Paragraph from '@components/atoms/paragraph';
import SpinnerButton from '@components/molecules/spinner-button';

const VerificationStep = ({ prev, next, context }) => {
	const { t } = useTranslation('auth');
	const {
		values,
		error,
		loading,
		verification,
		handleSendEmailVerification,
		handleSignUp,
	} = context;

	useEffect(() => {
		if (verification.user && verification.sent) {
			next();
		}
		if (verification.user && !verification.sent) {
			handleSendEmailVerification();
		}
	}, [verification]);

	const handleNextStep = () => {
		handleSignUp(values);
	};

	return (
		<Fragment>
			<Title>{t('signup.form.titles.verification-step')}</Title>
			<Card>
				<Paragraph>
					<Trans t={t} i18nKey='signup.form.messages.send-verification-link'>
						<Bold>{{ email: values.email }}</Bold>
					</Trans>
				</Paragraph>
			</Card>
			<Small>
				{t('common.is-not-your-email')}
				<Anchor onClick={prev}>
					{' ' + t('common.change-email-address').toLowerCase()}
				</Anchor>
			</Small>
			{error && <Alert type='error' message={error.message} />}
			<SpinnerButton type='secondary' loading={loading} onClick={handleNextStep}>
				{t('common.send-verification')}
			</SpinnerButton>
		</Fragment>
	);
};

export default VerificationStep;
