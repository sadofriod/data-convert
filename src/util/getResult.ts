import { map } from "lodash";
import { getValue } from "./common";

/**
 * Getting result Object from map array
 * @param source Source object
 * @param target Target onject
 * @param mapping
 */
const getRestul = (target: any, mapping: Common.CalcKeysResult) => {
	const keys = Object.keys(mapping);
	const result: typeof target = {};
	const previousCache: string[] = []; //Saving previous calc-node's code to optimize
	keys.forEach((key) => {
		const item = mapping[key];
		const sourceValue = getValue(mapping, item);
		item.value = sourceValue;
		return setValue(target, sourceValue);
	});
};
export default getRestul;
