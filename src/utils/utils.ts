// 判断是否是字符串
export function isString(value: any): boolean {
  return typeof value === 'string';
}

// 判断是否是数组
export function isArray(value: any): boolean {
  return Array.isArray(value) || value instanceof Array;
}

// 判断是否值数字
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

// 判断是否是对象
export function isObject(value: any): boolean {
  return value !== null && typeof value === 'object';
}

// 判断是否是Date
export function isDate(value) {
  return toString.call(value) === '[object Date]';
}

// 判断是否是方法
export function isFunction(value) {
  return typeof value === 'function';
}
