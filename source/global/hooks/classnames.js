export const useClassNames = (...classNames) =>
	classNames.filter((className) => !!className).join(' ');
