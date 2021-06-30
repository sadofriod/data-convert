import { set } from "lodash";

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
	const tempArr = pathArray.reverse().join(".");
	return (index = NaN) => {
		if (isNaN(index)) {
			return tempArr;
		} else {
			return tempArr.replace("[]", `[${index}]`);
		}
	};
};

const directMap = (value: any[]) => {
	return value.reduce((prev, acc) => {
		return [...prev, ...acc];
	}, []);
};

export const getCalcResult: Common.CalculateNode = (operation, sourceKey, value): any[] => {
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
			return directMap(value);
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
	console.log(value);
	targetKey.forEach((key) => {
		const path = anaylzePath(key);
		if (Array.isArray(value)) {
			value.forEach((val, index) => {
				console.log(path(index));

				set(obj, path(index), val);
			});
		}
	});
};
