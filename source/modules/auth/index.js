import { lazy } from 'react';

import { createReducer } from './auth.reducer';
import { createActions } from './auth.actions';
import { createSelectors } from './auth.selectors';

export default {
	name: 'auth',
	component: lazy(() => import('./auth.component')),
	createActions,
	createReducer,
	createSelectors,
};
