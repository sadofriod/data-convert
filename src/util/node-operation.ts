import { uniqueId } from "lodash";

export const createNode: Common.CreateNode = (code, option) => {
	if (option) {
		return {
			code: code || uniqueId(),
			node: option,
		};
	} else {
		return {
			code: code || uniqueId(),
			node: {
				value: [],
				sourceKey: [],
				targetKey: [],
			},
		};
	}
};

/**
 * Update calc node
 * @param calcResult Middle struct
 * @param code calc-node code
 * @param option calc-node data
 */
export const updateNode: Common.UpdateNode = (calcResult, code, option) => {
	const calc = calcResult[code];
	if (calc) {
		calcResult[code] = {
			...calc,
			...option,
		};
	}
	return calcResult;
};
