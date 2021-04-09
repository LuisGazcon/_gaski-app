import Registry from '@core/registry';

export const selectorsRegistry = Registry();

export const selectors = selectorsRegistry.getRegistered();
