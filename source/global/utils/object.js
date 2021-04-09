/**
 *
 * @param {*} object
 * @param {*} props
 * @returns
 */
export const filterProps = (object, props) =>
	Object.keys(object).reduce(
		(filtered, objectKey) =>
			props.includes(objectKey)
				? { ...filtered, [objectKey]: object[objectKey] }
				: filtered,
		{},
	);
