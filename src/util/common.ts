export const isObject = (val: any) => !Array.isArray(val) && typeof val === "object";

export const anaylzePath = (path: string) => {
	const pathArray = path.split(".").reverse();
	const arrayReg = /\[\]/;
	let arrayCount = 0;
	//TODO: Revers target path and get real target valve address
	pathArray.forEach((item) => {
		const isArray = arrayReg.test(item);
		if (isArray) {
			arrayCount++;
		}
		if (arrayCount > 1 && isArray) {
			//Default set previous array 0 index
			item = item.replace("[]", "[0]");
		}
	});
	return (index = NaN) => {
		if (isNaN(index)) {
			return pathArray.join(".");
		} else {
			return pathArray.join(".").replace("[]", `[${index}]`);
		}
	};
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
	const { targetKey, value } = node;
	//TODO: Resolve sigle or multi target key
	targetKey.forEach((key) => {
		const path = anaylzePath(key);
		if (Array.isArray(value)) {
			value.forEach((val, index) => {
				obj[index] = val;
			});
		} else {
			obj[path()] = value;
		}
	});
};
