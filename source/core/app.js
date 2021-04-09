import React from 'react';
import ReactDOM from 'react-dom';
import config from '@core/config';
import AppComponent from '@app';

const { components, store } = config;

/**
 * # Render
 * It receives a callback that returns the elements that have to be rendered,
 * `<AppComponent />` will be the parameter that callback receives.
 * @param {any} callback render callback
 * @param {*} element app root element
 */
export const render = (callback, element) => {
	ReactDOM.render(callback(<AppComponent modules={components} />, { store }), element);
};
