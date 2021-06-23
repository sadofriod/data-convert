export const isObject = (val: any) => !Array.isArray(val) && typeof val === "object";

export const anaylzePath = (path: string, relativeFlag?: string) => {
	const pathArray = path.split(".");
	const arrayReg = /\[\]/;
	//TODO: Revers target path and get real target valve address
	// const
};

export const getCalcResult: Common.CalculateNode = (operation, value): any => {
	switch (operation) {
		case "diff":
			break;
		case "plus":
			break;
		case "timer":
			break;
		case "union":
			break;
		case "direct-map":
			break;
		case "map-by-index":
			break;
		default:
			break;
	}
	return value;
};

export const getValue: Common.GetValue = (nodeMapping, sourceValueMap, node) => {
	/**
	 * TODO:
	 * 1. Get previous node calculation result
	 * 2. Append argument for caching current node calculation result
	 */
	const { previous, operation, sourceKey } = node;
	const sourceVal = sourceKey.map((item) => sourceValueMap[item]);

	if (previous) {
		const val = previous.map((item) => nodeMapping[item]);
		return getCalcResult(operation || "direct-map", sourceKey, [...val, ...sourceVal]);
	} else {
		return getCalcResult(operation || "direct-map", sourceKey, sourceVal);
	}
};

export const setValue: Common.SetValue = (obj, node) => {
	const { operation, targetKey } = node;
	//TODO: Resolve sigle or multi target key
};
