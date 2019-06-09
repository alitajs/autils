import { isArray } from './isArray';
import { isObject } from './isObject';

/**
 * 深拷贝
 * @param data
 */
export function deepClone(data) {
  if (isArray(data)) {
    return data.map(deepClone);
  } else if (isObject(data)) {
    return Object.keys(data).reduce(function(o, k) {
      o[k] = deepClone(data[k]);
      return o;
    }, {});
  } else {
    return data;
  }
}
