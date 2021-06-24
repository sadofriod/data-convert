import { isObject } from "./common";

enum subpahtState {
	isSigleArr = 0,
	isNormalArr = 1,
	isNormal = 2,
}

const enumKey = <T>(val: T): Common.ResultType => {
	const result: Common.ResultType = {};

	const recuObj = (val: any, key = "", result: Common.ResultType): any => {
		// console.log(result);

		if (Array.isArray(val)) {
			return val.forEach((item, index) => {
				const nextKey = `${key}[]`;
				// const next = val[item];

				return recuObj(item, nextKey, result);
			});
		} else if (isObject(val)) {
			const keys = Object.keys(val);

			return keys.forEach((item) => {
				const nextKey = `${key}.${item}`;
				const next = val[item];
				return recuObj(next, nextKey, result);
			});
		} else {
			const resultItem = result[key];
			if (resultItem !== undefined) {
				if (Array.isArray(resultItem) && resultItem.length >= 1) {
					resultItem.push(val as never);
				} else if (!Array.isArray(resultItem)) {
					result[key] = [resultItem, val];
				}
			} else {
				return (result[key] = val);
			}
		}
	};
	recuObj(val, "", result);
	return result;
};

const chartRegSet = {
	sigleArr: /^\[\]$/,
	normalArr: /^\w+\[\]$/,
	normal: /^\w+$/,
};

const getSubpathState = (subpath: string) => {
	switch (true) {
		case chartRegSet.normalArr.test(subpath):
			return subpahtState.isNormalArr;
		case chartRegSet.sigleArr.test(subpath):
			return subpahtState.isSigleArr;
		case chartRegSet.normal.test(subpath):
			return subpahtState.isNormal;
		default:
			return -1;
	}
};

const analyzePath = (resultTemplate: any, path: string) => {};

const setValue = (path: string, value: any, result: any) => {
	const pathArr = path.split(".");
	// pathArr.forEach((subPath) => {
	// 	const subpathState = getSubpathState(subPath);
	// 	if (subpathState === subpahtState.isNormal) {
	// 	}
	// });
	if (Array.isArray(value)) {
		value.forEach((item) => {
			if (item !== undefined) {
			} else {
			}
		});
	} else {
	}
};

const translateEnumKyes = (enumKeys: { [key: string]: any }, result: any) => {
	const keys = Object.keys(enumKeys);
	keys.forEach((key) => {
		const item = [key];
	});
};

export default enumKey;
