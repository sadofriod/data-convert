import { getValue, setValue } from "./common";

/**
 * Getting result Object from map array
 * @param source Source object
 * @param target Target onject
 * @param mapping
 */
const getResult = <Result = { [key: string]: any }>(result: Result, mapping: Common.CalcKeysResult, sourceValueMap: Common.ResultType): Result => {
	const keys = Object.keys(mapping);
	// const result: any = {};
	const previousCache: string[] = []; //Saving previous calc-node's code to optimize

	keys.forEach((key) => {
		const item = mapping[key];
		const sourceValue = getValue(mapping, sourceValueMap, item);
		// console.log(sourceValue);
		item.value = sourceValue;
		setValue(result, item);
	});
	return result;
};
export default getResult;
