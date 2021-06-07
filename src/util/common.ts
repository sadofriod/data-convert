export const isObject = (val:any) => !Array.isArray(val) && typeof val === 'object';

export const anaylzePath = (path:string,relativeFlag?: string) => {
  const pathArray = path.split(".");
  const arrayReg = /\[\]/;
}

export const getCalcResult = (operation: Common.KeyOperation, value: any): any => {
  switch (operation) {
    case 'diff':
      break;
    case 'plus':
      break;
    case 'timer':
      break;
    case 'union':
      break;
    case 'direct-map':
      break;
    case 'multi-map':
      break;
    default:
      break;
  }
}