import Registry from '@core/registry';

export const actionsRegistry = Registry();

export const actions = actionsRegistry.getRegistered();
