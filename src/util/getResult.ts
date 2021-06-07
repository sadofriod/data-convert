

/**
 * Getting result Object from map array
 * @param source Source object
 * @param target Target onject
 * @param mapping 
 */
const getRestul = (target: any, mapping: Common.CalcKeysResult) => {
  const keys = Object.keys(mapping);
  const result: typeof target = {};
  const previousCache:string[] = [] //Saving previous calc-node's code to optimize   
  keys.forEach(key => {
    const item = mapping[key];
    const sourceValue = getValue( item.previous, item.sourceKey);
    const targetValue = getCalcResult(item.operation, sourceValue)
    return setValue(target, item.targetKey);
  })
}
export default getRestul;