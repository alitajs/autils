/**
 * 检查`value`是否为`array`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {boolean}
 *
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray([1, 2, 3])
 * // => true
 */
export function isArray(value: any): boolean {
  return Array.isArray(value) || value instanceof Array;
}
