declare namespace Common {
	interface ResultType {
		[key: string]: string | number | string[] | number[];
	}

	type KeyMathOperation = "plus" | "timer";
	type KeySetOperation = "union" | "diff";
	type KeyDefaultOperation = "direct-map" | "map-by-index";

	type KeyOperation = KeyMathOperation | KeySetOperation | KeyDefaultOperation;

	type CalcNode = {
		//Real path of origin object
		sourceKey: string[];
		targetKey: string[];
		// previous calc-node code
		previous?: string[];
		// next calc-node code
		next?: string[];
		operation?: KeyOperation;
		value: any;
		// will be resolve data
		tempValue?: any;
	};

	type CreateNode = (code?: string, option?: CalcNode) => { code: string; node: CalcNode };

	type UpdateNode = (calcResult: CalcKeysResult, code: string, option: Partial<CalcNode>) => CalcKeysResult;

	interface CalcKeysResult {
		[code: string]: CalcNode;
	}

	interface PathNode {
		updateCalc(code: string, node: Partial<CalcNode>): void;
		calcNode: CalcNode;
		//source value address & target value address
		pathKey: "targetKey" | "sourceKey";
		code: string;
		path: string;
		tempValue: any;
	}

	interface CalcListItemProps {
		updateCalc(code: string, node: Partial<CalcNode>): void;
		deleteCalc(code: string): void;
		setCurrentCalcCode(code: string): void;
		calcNode: CalcNode;
		code: string;
	}

	interface CalcFunc {
		(operation: KeyOperation, value: any): any;
	}

	interface GetValue {
		(calc: CalcKeysResult, sourceValMap: ResultType, val: CalcNode): CalcNode;
	}

	interface SetValue {
		(obj: any, node: CalcNode): void;
	}

	type CalculateNode = (operation: KeyOperation, val: any, previous?: any) => any;
}

// declare namespace Helpers {}
