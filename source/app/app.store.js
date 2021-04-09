import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

/**
 * # Configure app store
 * You can add middlewares and extra configuration inside this function,
 * it must be synchronous
 * @param {any} reducers
 * @returns
 */
export const configureStore = (reducers) => {
	// reducers are inyected in the init method of app
	const rootReducer = combineReducers(reducers);
	const composeEnhancers =
		process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunkMiddleware)),
	);
	return store;
};
