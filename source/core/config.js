import { configureServices, configureModules, configureStore } from '@core/utils';
import { actionsRegistry, selectorsRegistry, servicesRegistry } from '@context';
import services from '@services/';
import modules from '@modules';

const configuredServices = configureServices(services);
const { components, reducers, selectors, actions } = configureModules(
	modules,
	configuredServices,
);

actionsRegistry.register(actions);
selectorsRegistry.register(selectors);
servicesRegistry.register(configuredServices);

const store = configureStore(reducers);

export default {
	components,
	store,
};
