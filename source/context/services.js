import Registry from '@core/registry';

export const servicesRegistry = Registry();

export const services = servicesRegistry.getRegistered();
