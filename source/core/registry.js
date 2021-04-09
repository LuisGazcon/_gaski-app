/**
 * # Registry
 * It creates a registry object, it stores all the specified data by calling the method
 * `register()`, you can also access to this data by calling the method `getRegistered()`.
 * @returns
 */
const Registry = () => {
	const registered = {};

	const getRegistered = () => {
		return registered;
	};

	const register = (units) => {
		Object.keys(units).forEach((key) => {
			registered[key] = units[key];
		});
	};

	return Object.freeze({
		getRegistered,
		register,
	});
};

export default Registry;
