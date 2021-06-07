
declare namespace Common {

  interface ResultType {
    [key: string]: string | number | string[] | number[];
  }

  type KeyMathOperation = "plus" | "timer";
  type KeySetOperation = "union" | "diff";
  type KeyDefaultOperation = "direct-map" | "multi-map";

  type KeyOperation = KeyMathOperation | KeySetOperation | KeyDefaultOperation;

  type CalcNode = {
    sourceKey: string[] | string;
    targetKey: string[] | string;
    previous?: string;
    operation?: KeyOperation;
  };

  interface CalcKeysResult {
    [code: string]: CalcNode
  }

  interface CalcFunc {
    (operation: KeyOperation, value: any): any;
  }

  interface GetValue {
    (code: string, val: CalcNode): CalcNode;
  }

  interface SetValue {
    (obj: any, path: string, val: CalcNode): void;
  }

}

// declare namespace Helpers {}