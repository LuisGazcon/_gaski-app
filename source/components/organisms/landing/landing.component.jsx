import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Card from '@components/atoms/card';
import Title from '@components/atoms/title';
import AnchorButton from '@components/molecules/anchor-button';
import Paragraph from '@components/atoms/paragraph';

import { useClassNames } from '@global/hooks';

import styles from './landing.module.sass';
import Logo from '@resources/svg/logo.svg';

const Landing = () => {
	const { path } = useRouteMatch();
	const { t } = useTranslation('auth');

	return (
		<div className={styles.landing}>
			<div className={styles.logoWrapper}>
				<Logo className={styles.logo} />
			</div>

			<div className={styles.callToAction}>
				<div>
					<Title>{t('common.welcome')}</Title>
					<Paragraph>{t('common.slogan')}</Paragraph>
				</div>
				<AnchorButton type='primary' href={path + 'signup'}>
					{t('common.signup')}
				</AnchorButton>
				<AnchorButton type='primaryGhost' href={path + 'login'}>
					{t('common.login')}
				</AnchorButton>
			</div>
		</div>
	);
};

export default Landing;
