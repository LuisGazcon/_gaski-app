/**
 *
 * @param {string} string
 * @returns
 */
export const normalize = (string) =>
	string
		.normalize('NFD')
		.replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1')
		.normalize();

/**
 *
 * @param {string} string
 * @returns
 */
export const getText = (string) =>
	string
		.trim()
		.toLowerCase()
		.split(' ')
		.filter((char) => char !== '');

/**
 *
 * @param {string} string
 * @returns
 */
export const capitalize = (string) =>
	string.trim().toLowerCase().charAt(0).toUpperCase() + string.slice(1);

/**
 *
 * @param {string} string
 * @returns
 */
export const capitalizeWords = (string) =>
	string
		.trim()
		.toLowerCase()
		.split(' ')
		.filter((char) => char !== '')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
