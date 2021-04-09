import { services } from '@context';

export const useService = (name) => {
	return name in services ? services[name] : null;
};
