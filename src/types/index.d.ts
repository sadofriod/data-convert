declare namespace Common {
	interface ResultType {
		[key: string]: string | number | string[] | number[];
	}

	interface EnumKeysNode {
		//Node value
		value: any;

		//Node val refence of meta data
		ref: Object | Array;
	}

	interface EnumKeys {
		[key: string]: EnumKeysNode;
	}

	type KeyMathOperation = "plus" | "timer";
	type KeySetOperation = "union" | "diff";
	type KeyDefaultOperation = "direct-map" | "map-by-index";

	type KeyOperation = KeyMathOperation | KeySetOperation | KeyDefaultOperation;

	type CalcNode = {
		sourceKey: string[] | string;
		targetKey: string[] | string;
		// previous calc-node code
		previous?: string[];
		// next calc-node code
		next?: string[];
		operation?: KeyOperation;
		value: any;
	};

	type CreateNode = (code?: string, option?: Common.CalcNode) => { code: string; node: CalcNode };

	type UpdateNode = (calcResult: CalcKeysResult, code: string, option: Partial<CalcNode>) => CalcKeysResult;

	interface CalcKeysResult {
		[code: string]: CalcNode;
	}

	interface CalcFunc {
		(operation: KeyOperation, value: any): any;
	}

	interface GetValue {
		(calc: CalcKeysResult, val: CalcNode): CalcNode;
	}

	interface SetValue {
		(obj: any, path: string, val: any): void;
	}

	type CalculateNode = (operation: KeyOperation, val: any, previous?: any) => any;
}

// declare namespace Helpers {}
