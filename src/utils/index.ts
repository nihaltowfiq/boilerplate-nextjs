/**
 * Allow input value numbers only
 * @param value - pass value is paramater
 */
export const allowNumberOnly = (value: string): string => {
	const regex = /[^0-9]/;
	return value.replace(regex, '');
};
