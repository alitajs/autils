/**
 * 检查`value`是否为`array`。
 *
 * @since 0.0.6
 *
 * @param value
 * @returns {array}
 *
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray([1, 2, 3])
 * // => true
 */
function isArray(value: any): boolean {
  return Array.isArray(value) || value instanceof Array;
}

export default isArray;
