import { isObject } from "./common";

const enumKey = <T>(val:T) => {
  const result = {};
  const recuObj = (val:any, key = '', result: Common.ResultType):any => {
    // console.log(result);

    if (Array.isArray(val)) {
      return val.forEach((item) => {
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
          resultItem.push(val as never)
        } else if (!Array.isArray(resultItem)) {
          result[key] = [resultItem, val]
        }
      } else {
        return result[key] = val;
      }
    }
  };
  recuObj(val, '', result);
  return result
};
export default enumKey