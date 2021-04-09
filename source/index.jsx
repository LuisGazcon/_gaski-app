import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { register } from './service-worker-registration';

import i18n from './i18n';

import { render } from '@core/app';

import '@resources/sass/index.sass';

render(
	(AppComponent, { store }) => (
		<StrictMode>
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>{AppComponent}</BrowserRouter>
				</I18nextProvider>
			</Provider>
		</StrictMode>
	),
	document.querySelector('#root'),
);

/**
 *
 */
register();

module.hot.accept();
