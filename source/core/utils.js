export { configureStore } from '@app/app.store';

const MODULES_INITIAL_VALUE = {
	actions: {},
	reducers: {},
	selectors: {},
	components: {},
};

/**
 * # To component name
 * Returns a string that matches with react components naming convention,
 * name argument is required, it makes reference to the module name.
 * @param {string} name module name
 * @returns {string} component name
 */
export const toComponentName = (name) => {
	return name.trim().charAt(0).toUpperCase() + name.slice(1);
};

/**
 * # Configure modules
 * It returns an object that contains all components, actions, reducers
 * and selectors in all modules, modules and services parameter are required,
 * modules make reference to the modules that will be configured, services make reference
 * to the services object that all module actions need to work.
 * @param {any} modules unconfigured modules
 * @param {any} services configured services
 * @returns {any} components, actions, reducers and selectors
 */
export const configureModules = (modules, services) =>
	Object.keys(modules).reduce((prev, key) => {
		const _module = modules[key];
		const { ActionTypes, actions } = _module.createActions({ services });
		const reducer = _module.createReducer({ ActionTypes });
		const selectors = _module.createSelectors();

		return {
			components: {
				...prev.components,
				[toComponentName(_module.name)]: _module.component,
			},
			actions: {
				...prev.actions,
				[_module.name]: actions,
			},
			reducers: {
				...prev.reducers,
				[_module.name]: reducer,
			},
			selectors: {
				...prev.selectors,
				[_module.name]: selectors,
			},
		};
	}, MODULES_INITIAL_VALUE);

const SERVICES_INITIAL_VALUE = {};

/**
 * # Configure services
 * Return an object with all configured services, it just call all functions
 * in services object.
 * @param {any} services unconfigured services
 * @returns {any} configured services
 */
export const configureServices = (services) =>
	Object.keys(services).reduce((prev, key) => {
		return {
			...prev,
			[key]: services[key](),
		};
	}, SERVICES_INITIAL_VALUE);
