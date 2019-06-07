/**
 * 检查`value`是否为`boolean`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isBoolean(true)
 * // => true
 *
 * isBoolean([1, 2, 3])
 * // => false
 */
export function isBoolean(value: any): boolean {
  return typeof value === 'boolean'
}
