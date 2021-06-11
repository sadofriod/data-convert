export const isObject = (val: any) => !Array.isArray(val) && typeof val === "object";

export const anaylzePath = (path: string, relativeFlag?: string) => {
	const pathArray = path.split(".");
	const arrayReg = /\[\]/;
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

export const getValue: Common.GetValue = (nodeMapping, node) => {
	/**
	 * TODO:
	 * 1. Get previous node calculation result
	 * 2. Append argument for caching current node calculation result
	 */
	const { previous, operation, sourceKey } = node;

	if (previous) {
		const val = previous.map((item) => nodeMapping[item].value);
		return getCalcResult(operation || "direct-map", sourceKey, val);
	} else {
		return getCalcResult(operation || "direct-map", sourceKey);
	}
};

export const setValue: Common.SetValue = (obj, path, val) => {};
