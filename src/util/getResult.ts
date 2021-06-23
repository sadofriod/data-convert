import { getValue, setValue } from "./common";

/**
 * Getting result Object from map array
 * @param source Source object
 * @param target Target onject
 * @param mapping
 */
const getRestul = (target: any, mapping: Common.CalcKeysResult, sourceValueMap: Common.ResultType) => {
	const keys = Object.keys(mapping);
	const result: typeof target = {};
	const previousCache: string[] = []; //Saving previous calc-node's code to optimize
	keys.forEach((key) => {
		const item = mapping[key];
		const sourceValue = getValue(mapping, sourceValueMap, item);
		item.value = sourceValue;
		setValue(result, item);
	});
};
export default getRestul;
