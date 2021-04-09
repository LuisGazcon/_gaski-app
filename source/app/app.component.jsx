import React, { Fragment, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import { selectors } from '@context';

import Route from '@components/utils/route';

const { selectUser } = selectors.auth;

const App = ({ modules: { Auth } }) => {
	useSelector(selectUser);

	return (
		<Suspense fallback={<Fragment />}>
			<Switch>
				<Route.Public
					path='/auth'
					anonymous
					fallback={<Redirect to='/' />}
					component={Auth}
				/>
				<Route.Private path='/' fallback={<Redirect to='/auth' />} exact />
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Suspense>
	);
};

export default App;
