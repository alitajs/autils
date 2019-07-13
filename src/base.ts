import { getType } from './getType';
/**
 * 检查 `value` 是否是一个数组。
 *
 * @param value 要检查的值
 * @returns `value` 是数组返回 `true`，否则返回 `false`
 * @example
 * ```
 * isArray(['x']) // => true
 * isArray('x') // => false
 * ```
 */
export function isArray(
  value: any
): value is any[] {
  return Array.isArray(value);
}

/**
 * 检查 `value` 是否是一个布尔值。
 *
 * @param value 要检查的值
 * @returns `value` 是布尔值返回 `true`，否则返回 `false`
 * @example
 * ```
 * isBoolean(true) // => true
 * isBoolean(false) // => true
 * isBoolean('true') // => false
 * ```
 */
export function isBoolean(
  value: any
): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 检查 `value` 是否是一个数字。
 *
 * `NaN` 不被认为是数字。
 *
 * @param value 要检查的值
 * @returns `value` 是数字返回 `true`，否则返回 `false`
 * @example
 * ```
 * isNumber(1) // => true
 * isNumber(0.1) // => true
 * isNumber(NaN) // => false
 * ```
 */
export function isNumber(
  value: any
): value is number {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * 检查 `value` 是否是一个对象
 *
 * @param value 要检查的值
 * @returns `value` 是对象返回 `true`，否则返回 `false`
 * @example
 * ```
 * isObject({}) // => true
 * isObject(1) // => false
 * ```
 */
export function isObject(
  value: any
): value is object {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function')
}

/**
 * 检查 `value` 是否是一个日期
 *
 * @param value 要检查的值
 * @returns `value` 是日期返回 `true`，否则返回 `false`
 * @example
 * ```
 * isDate(new Date()) // => true
 * ```
 */
export function isDate(
  value: any
): value is Date {
  return getType(value) === 'Date';
}

/**
 * 检查 `value` 是否是一个函数
 *
 * @param value 要检查的值
 * @returns `value` 是函数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isFunction(() => {}) // => true
 * isFunction(2) // => false
 * ```
 */
export function isFunction(
  value: any
): value is Function {
  return typeof value === 'function';
}

/**
 * 检查 `value` 是否是一个整数。
 *
 * @param value 要检查的值
 * @returns `value` 是整数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isInteger(1) // => true
 * isInteger(1.2) // => false
 * isInteger(-1) // => true
 * ```
 */
export function isInteger(
  value: any
): value is number {
  return Number.isInteger(value)
}

/**
 * 检查 `value` 是否是一个负整数
 *
 * @param value 要检查的值
 * @returns `value` 是负整数返回 `true`，否则返回 `false`
 * @example
 * ```
 * isNegativeInteger(-1) // => true
 * isNegativeInteger(1) // => false
 * ```
 */
export function isNegativeInteger(
  value: any
): value is number {
  return value < 0 && isInteger(value);
}

/**
 * 检查 `value` 是否是 `NaN`。
 *
 * @param value 要检查的值
 * @returns `value` 是 `NaN` 返回 `true`，否则返回 `false`
 * @example
 * ```
 * isNaN(NaN) // => true
 * isNaN(2) // => false
 * ```
 */
export function isNaN(
  value: any
): boolean {
  return value !== value;
}

/**
 * 检查 `value` 是否是 `null` 或 `undefined`
 *
 * @param value 要检查的值
 * @returns `value` 是 `null` 或 `undefined` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isNil(null) // => true
 * isNil(undefined) // => true
 * ```
 */
export function isNil(
  value: any
): value is null | undefined {
  return value === undefined || value === null;
}

/**
 * 检查 `value` 是否是 `null`
 *
 * @param value 要检查的值
 * @returns `value` 是 `null` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isNull(null) // => true
 * ```
 */
export function isNull(
  value: any
): value is null {
  return value === null;
}

/**
 * 检查 `value` 是否等于 `undefined`。
 *
 * @param value 要检查的值
 * @returns `value` 是 `undefined` 返回 `true`，否则返回 `false`
 * @example
 * ```ts
 * isUndefined(undefined) // => true
 * isUndefined(void 0) // => true
 * ```
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined
}


/**
 * 检查 `value` 是否是一个正则对象。
 *
 * @param value 要检查的值
 * @returns `value` 是正则对象返回 `true`，否则返回 `false`
 * @example
 * ```
 * isRegExp(/hello/) // => true
 * isRegExp(new RegExp('hello')) // => true
 * ```
 */
export function isRegExp(
  value: any
): value is RegExp {
  return getType(value) === 'RegExp'
}

/**
 * 检查 `value` 是否是一个字符串
 *
 * @param value 要检查的值
 * @returns `value` 是字符串返回 `true`，否则返回 `false`
 * @example
 * ```
 * isString('') // => true
 * isString('hello') // => true
 * ```
 */
export function isString(value: any): value is string {
  return typeof value === 'string'
}

