const isEqual = require('lodash.isequal');
const reduce = require('lodash.reduce');

export const doesFirstObjectHasMoreKeys = (obj1: Object, obj2?: Object) => {
  let res: boolean = true;
  if (obj2 && Object.keys(obj2).length) {
    const length1 = Object.keys(obj1).length;
    const length2 = Object.keys(obj2).length;
    res = length1 > length2;
  }
  return res;
};

export const isEqualWithDiff = (obj1?: Object, obj2?: Object) => {
  if (obj1 && Object.keys(obj1).length) {
    let firstObj;
    let secondObj: any;
    const isFirst = doesFirstObjectHasMoreKeys(obj1, obj2);
    if (isFirst) {
      firstObj = {...obj1};
      secondObj = {...obj2};
    } else {
      firstObj = {...obj2};
      secondObj = {...obj1};
    }

    return reduce(
      firstObj,
      (result: Array<string>, value: any, key: string) => {
        return secondObj
          ? isEqual(value, secondObj[key])
            ? result
            : [...result, { [key]: value }]
          : [];
      },
      []
    );
  } else if (obj2 && Object.keys(obj2).length) {
    return [obj2];
  } else {
    return [];
  }
};
