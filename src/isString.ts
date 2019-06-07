/**
 * 检查`value`是否为`string`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isString('')
 * // => true
 *
 * isString('string')
 * // => true
 */
export function isString(value: any): boolean {
  return typeof value === 'string';
}
